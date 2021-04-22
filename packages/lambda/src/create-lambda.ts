import {CreateFunctionCommand, LambdaClient} from '@aws-sdk/client-lambda';
import {
	CreateBucketCommand,
	PutBucketWebsiteCommand,
	PutObjectCommand,
	S3Client,
} from '@aws-sdk/client-s3';
import {createReadStream} from 'fs';
import xns from 'xns';
import {bundleLambda} from './bundle-lambda';
import {bundleRemotion} from './bundle-remotion';
import {uploadDir} from './upload-dir';

const region = 'eu-central-1';

const lambdaClient = new LambdaClient({
	region,
});

const s3Client = new S3Client({region});

xns(async () => {
	const bucketName = 'remotion-bucket-' + Math.random();
	const id = String(Math.random());
	const s3Key = `remotion-function-${id}.zip`;
	const fnName = 'remotion-test-' + String(Math.random()).replace('0.', '');
	const [remBundle, out] = await Promise.all([
		bundleRemotion(),
		bundleLambda(),
	]);

	await s3Client.send(
		new CreateBucketCommand({
			Bucket: bucketName,
			ACL: 'public-read',
		})
	);

	await s3Client.send(
		new PutBucketWebsiteCommand({
			Bucket: bucketName,
			WebsiteConfiguration: {
				IndexDocument: {
					Suffix: 'index.html',
				},
			},
		})
	);

	// Upload bundle
	await uploadDir({
		bucket: bucketName,
		client: s3Client,
		dir: remBundle,
	});
	console.log('bundle uploaded');

	// Upload lambda
	await s3Client.send(
		new PutObjectCommand({
			Bucket: bucketName,
			Body: createReadStream(out),
			Key: s3Key,
			ACL: 'public-read',
		})
	);

	// TODO: Do it with HTTPS, but wait for certificate
	const url = `http://${bucketName}.s3.${region}.amazonaws.com/index.html`;
	console.log(url);
	await lambdaClient.send(
		new CreateFunctionCommand({
			Code: {
				S3Bucket: bucketName,
				S3Key: s3Key,
			},
			FunctionName: fnName,
			Handler: 'index.handler',
			Role: 'arn:aws:iam::976210361945:role/lambda-admin', // IAM_ROLE_ARN; e.g., arn:aws:iam::650138640062:role/v3-lambda-tutorial-lambda-role
			Runtime: 'nodejs12.x',
			Description: 'Renders a Remotion video.',
			MemorySize: 1769 * 2,
			Timeout: 60 * 10,
		})
	);

	return fnName;
});
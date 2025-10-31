import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client();

const Bucket = "<YOUR_BUCKET_NAME>";
const Key = "pfp.jpg";

const object = await s3.send(
  new GetObjectCommand({
    Bucket,
    Key,
  }),
);

console.log("Successfully fetched the object", object.$metadata);

// Process the data as needed
// For example, to get the content as a Buffer:
// const content = data.Body;

// Or to save the file (requires 'fs' module):
// import { writeFile } from "node:fs/promises";
// await writeFile('ingested_0001.parquet', data.Body);

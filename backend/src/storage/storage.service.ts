import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {
  private readonly s3 = new S3Client({
    region: process.env.SUPABASE_S3_REGION,
    endpoint: process.env.SUPABASE_S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID!,
      secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY!,
    },
  });

  async upload(
    bucket: string,
    key: string,
    file: Buffer,
    mimetype: string,
  ): Promise<string> {
    await this.s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: file,
        ContentType: mimetype,
      }),
    );

    return `${process.env.SUPABASE_S3_ENDPOINT}/${bucket}/${key}`;
  }

  async delete(bucket: string, key: string): Promise<void> {
    await this.s3.send(
      new DeleteObjectCommand({
        Bucket: bucket,
        Key: key,
      }),
    );
  }
}

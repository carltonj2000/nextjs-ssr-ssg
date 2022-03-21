# Next JS SSR and SSD

The code in this repository is base on the
[NextJS 12.1 SSR & SSG: Everything you need to know](https://youtu.be/kdXKz1UWc3E)
video.

The images and json files cloned from
https://github.com/jherr/pokemon
to the local `pokemon` directory, and excluded via `.gitignore`,
were uploaded to an amazon s3 bucket with ARN
`arn:aws:s3:::ccaj-pokemon-1`
which was later deleted.

Enable public AWS S3 access via:

1 - BUCKET_ARN -> Permissions -> Block public access -> Off
2 - Edit `Bucket policy` and set json content as show below.
2 - Edit CORS and set json content as show below.

```json title="Bucket policy"
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "BUCKET_ARN/*"
    }
  ]
}
```

```json title="Cross-origin resource sharing (CORS)"
[
  {
    "AllowedHeaders": ["Authorization"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": ["Access-Control-Allow-Origin"]
  }
]
```

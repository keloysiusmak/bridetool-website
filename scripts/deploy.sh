BUCKET="bridetool-website"
DIST="public"

gatsby build

# clean the bucket
echo "Clean the bucket from previous vomit"
aws s3 rm s3://$BUCKET --recursive

ls

# sync to the S3 bucket
# aws-cli is needed
echo "Copying files over to S3"
aws s3 sync ./$DIST s3://$BUCKET --acl public-read

echo "🚀 🚀 🚀 🚀 🚀 "

Front End

- Use React and Material UI
- Create a contact form that takes a name, an email, and a message
- On submit, make a call to the AWS Endpoint you create
- If successful, clear form
- Give notification for submission
- Host the application in an S3 bucket

AWS

- Use the API Gateway to create an API endpoint which triggers a Lambda function
- The Lambda function should send an email using the Simple Email Service (SES) as well as save the name, the email, and the message to DynamoDB
- Look into IAM roles

- IAM roles
  Use IAM policy with JSON to grant the required permissions to the DynamoDB table and CloudWatch Logs.
  Attach this policy to a role, and this role will then be attached to a Lambda function, which will assume the required access to DynamoDB and CloudWatch Logs

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
  Look into IAM roles

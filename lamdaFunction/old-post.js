exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    return contactForm(event)
  }

};


const contactForm = event => {
  const response = {
    statusCode: 200, 
    // "operation": "create",
    // "tableName": "ContactForm",
    headers: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods" : "OPTIONS,POST",
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Origin" : "*",
        "X-Requested-With" : "*"
     },
    body: JSON.stringify({
      message: "message received!"
    })
  }

  return response;
}
exports.handler = async(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Function invoked"})
    received: JSON.stringify(event.body)
  }
}
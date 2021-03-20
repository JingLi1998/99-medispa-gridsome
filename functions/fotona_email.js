require("dotenv").config();
const sgMail = require("@sendgrid/mail");

exports.handler = async function (event, context) {
  sgMail.setApiKey(process.env.SEND_GRID);
  const msg = {
    to: "jing_li1998@hotmail.com",
    from: "jing.li.1998.jl@gmail.com",
    subject: "Test",
    html: "<div>Fotona Form Submitted</div>",
  };
  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      httpMethod: event.httpMethod,
      body: JSON.stringify({ message: "Function invoked" }),
      received: JSON.stringify(event.body),
    };
  } catch {
    return {
      statusCode: 400,
      httpMethod: event.httpMethod,
      body: JSON.stringify({ message: "Function failed" }),
      received: JSON.stringify(event.body),
    };
  }
};

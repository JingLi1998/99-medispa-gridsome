require("dotenv").config();
const sgMail = require("@sendgrid/mail");

exports.handler = async function (event, context) {
  sgMail.setApiKey(process.env.SEND_GRID);
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: "Invalid HTTP Method",
      }),
    };
  }
  const { name, email, phone, message } = JSON.parse(event.body);
  const msg = {
    to: "jing_li1998@hotmail.com",
    from: "jing.li.1998.jl@gmail.com",
    subject: "Test",
    html: `
    <div>
      <h4>Fotona Form Submitted</h4> 
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Message: ${message}</li>
      </ul>
    </div>
    `,
  };
  try {
    const res = await sgMail.send(msg);
    console.log(res);
    return {
      statusCode: 200,
      body: JSON.stringify({
        httpMethod: event.httpMethod,
        message: "Function invoked",
        received: event.body,
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        httpMethod: event.httpMethod,
        message: "Function failed",
        received: event.body,
      }),
    };
  }
};

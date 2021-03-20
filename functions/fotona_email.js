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

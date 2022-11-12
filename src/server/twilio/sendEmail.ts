import { string } from "zod";
import sgMail from "./sendgrid";

interface Email {
  from_mail: string;
  to_mail: string;
  raza: string;
  imagen: string;
  color?: string;
  detalles?: string;
  edad?: number;
}

const sendEmail = (email: Email) => {
  let msg = {
    from: email.from_mail,
    to: email.to_mail,
    subject: "Acerca de tu cuenta",
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge">
          <!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 600px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
    <![endif]-->
          <style type="text/css">
        body, p, div {
          font-family: inherit;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #e46216;
          text-decoration: none;
        }
        p { margin: 0; padding: 0; }
        table.wrapper {
          width:100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        ul ul ul ul  {
          list-style-type: disc !important;
        }
        ol ol {
          list-style-type: lower-roman !important;
        }
        ol ol ol {
          list-style-type: lower-latin !important;
        }
        ol ol ol ol {
          list-style-type: decimal !important;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
          <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet"><style>
    body {font-family: 'Fredoka One', cursive;}
    </style><!--End Head user entered-->
        </head>
        <body>
          <center class="wrapper" data-link-color="#e46216" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#fdf7f0;">
            <div class="webkit">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#fdf7f0">
                <tr>
                  <td valign="top" bgcolor="#fdf7f0" width="100%">
                    <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100%">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <!--[if mso]>
        <center>
        <table><tr><td width="600">
      <![endif]-->
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                          <tr>
                                            <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
        <tr>
          <td role="module-content">
            <p></p>
          </td>
        </tr>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0560568e-3361-4f86-aedf-c44a1b56d021" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:5px 5px 5px 5px; line-height:22px; text-align:inherit; background-color:#fdf7f0;" height="100%" valign="top" bgcolor="#fdf7f0" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 14px">Tenemos un mensaje para tí. </span><a href="{{Weblink}}"><span style="color: #f0640b; font-size: 14px">Es importante</span></a><span style="font-size: 14px">.</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 20px 0px 20px;" bgcolor="#ffecd8" data-distribution="1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="540" style="width:540px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ae7c0dcd-db1e-45d0-a1bb-51a5c9b0dd62">
        <tbody>
          <tr>
            <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
            </td>
          </tr>
        </tbody>
      </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b24b70f5-6d7c-4998-ab8f-29c672972924">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
              <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="150" alt="" data-proportionally-constrained="true" data-responsive="false" src="http://cdn.mcauto-images-production.sendgrid.net/0122155ee32bb770/881b8954-e7af-4d14-a571-da90cdff3c12/2051x669.png" height="50">
            </td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2f5db5f1-91f9-412f-9eab-ccb93d345207">
        <tbody>
          <tr>
            <td style="padding:0px 0px 40px 0px;" role="module-content" bgcolor="">
            </td>
          </tr>
        </tbody>
      </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="999aaa14-40ff-4416-a92a-46842ea26f07">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
              <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="374" alt="" data-proportionally-constrained="true" data-responsive="false" src="http://cdn.mcauto-images-production.sendgrid.net/0122155ee32bb770/b8d2346e-e8a8-4d3b-a6d4-6c33f230c921/1080x1080.png" height="380">
            </td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="67af03f8-98a6-486c-8090-ebc6fb32df39">
        <tbody>
          <tr>
            <td style="padding:0px 0px 60px 0px;" role="module-content" bgcolor="">
            </td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="18872649-a6e4-4cfa-8387-d642b8126a11" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:40px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #1a3b40; font-size: 18px">Requerimos de tu ayuda.</span></div>
            <div style="font-family: inherit; text-align: center"><span style="color: #1a3b40; font-size: 18px">Uno de nuestros amigos está perdido cerca de tu ubicación.</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="32bdfd69-69de-44d4-a7fa-8628dbd3eb4c">
        </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="858e9604-8593-4fdf-ab57-3e3636ddc874">
        <tbody>
          <tr>
            <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="">
            </td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a5a7c736-f09e-46a6-b8b5-1f222e600496" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:50px 0px 20px 0px; line-height:22px; text-align:inherit; background-color:#1a3b40;" height="100%" valign="top" bgcolor="#1a3b40" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffd93c; font-size: 18px">Las características del perro extraviado son las siguientes:</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a5a7c736-f09e-46a6-b8b5-1f222e600496.1" data-mc-module-version="2019-10-22">
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a5a7c736-f09e-46a6-b8b5-1f222e600496.1" data-mc-module-version="2019-10-22">
      <tbody>
        <tr>
          <td style="padding:30px 50px 30px 50px; line-height:22px; text-align:inherit; background-color:#1a3b40;" height="100%" valign="top" bgcolor="#1a3b40" role="module-content">
        ${
          email.raza
            ? `<div style="font-family: inherit; text-align: inherit"><span style="color: #ffecd8; font-size: 18px; font-family: inherit">Raza: ${email.raza}.</span></div>`
            : ``
        }
        ${
          email.color
            ? `<div style="font-family: inherit; text-align: inherit"><span style="color: #ffecd8; font-size: 18px; font-family: inherit">Color: ${email.color}.</span></div>`
            : ``
        }
        ${
          email.edad
            ? `<div style="font-family: inherit; text-align: inherit"><span style="color: #ffecd8; font-size: 18px; font-family: inherit">Edad: ${email.edad} ${email.edad === 1 ? `año` : `años`}.</span></div>`
            : ``    
        }
        ${
          email.detalles
            ? `<br /><div style="font-family: inherit; text-align: inherit"><span style="color: #ffecd8; font-size: 18px; font-family: inherit">Detalles</span></div>
            <div style="font-family: inherit; text-align: inherit"><span style="color: #ffecd8">${email.detalles}</span></div><br />`
            : ``
        }
        ${
          email.imagen
            ? `<div style="font-family: inherit; text-align: inherit"><span style="color: #ffecd8; font-size: 18px; font-family: inherit">Este es nuestro pequeño amigo:</span></div>
            <img class="max-width" border="0" style="padding:10px 0px 0px 0px display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" alt="" data-proportionally-constrained="true" data-responsive="false" src="${email.imagen}">`
            : ``
        }
          </td>
        </tr>
      </tbody>
    </html>
    `
  };
  sgMail
    .send(msg)
    .then(() => {})
    .catch((error: any) => {
      console.error(error);
    });
};

export { sendEmail };

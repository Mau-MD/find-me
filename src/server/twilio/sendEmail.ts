import { string } from 'zod'
import sgMail from './sendgrid'


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
    subject: 'Acerca de tu cuenta',
    html: `
      <div style="font-family: inherit; text-align: inherit"><b>Hola. Queremos informarte que un perro se ha extraviado cerca de tí. El perro tiene las siguientes características: </b>&nbsp;</div>
      <div style="font-family: inherit; text-align: inherit">· <b>Raza</b>: ${email.raza}. &nbsp;</div>
      ${email.color ? `<div style="font-family: inherit; text-align: inherit">&emsp;· <b>Color</b>: ${email.color}. &nbsp;</div>` : ''}
      ${email.edad ? `<div style="font-family: inherit; text-align: inherit">&emsp;· <b>Edad</b>: ${email.edad}. &nbsp;</div>` : ''}
      ${email.detalles ? `<div style="font-family: inherit; text-align: inherit">&emsp;· <b>Detalles</b>: ${email.detalles}. &nbsp;</div>` : ''}
      <div style="font-family: inherit; text-align: inherit"><br /></div>
      <div style="font-family: inherit; text-align: inherit">Se muestra una foto del perro extraviado a continuación:</div>
      <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
        <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="0" alt="" data-proportionally-constrained="true" data-responsive="true" src="${email.imagen}">
      </td>
    `
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error: any) => {
      console.error(error)
    })
}

export { sendEmail }

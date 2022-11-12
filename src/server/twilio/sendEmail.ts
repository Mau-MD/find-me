import sgMail from './sendgrid'

const sendEmail = (to_mail: string, from_mail: string) => {
  let msg = {
    to: from_mail,
    from: to_mail,
    subject: 'Acerca de tu cuenta',
    html: 'Se ha creado tu evento '
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

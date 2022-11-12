import { Button } from '@mantine/core';
import { NextPage } from 'next';
import { trpc } from '../utils/trpc'

const send: NextPage = () => {  
  const mutation = trpc.emails.Send.useMutation()

  const handleSendEmail = async () => {
    mutation.mutate({
      from_mail: 'internhub99@gmail.com',
      to_mail: 'internhub99@gmail.com',
      raza: 'salchicha',
      imagen: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-conoce%20todo-acerca-del-dachshund-perro-salchicha.jpg?itok=gtpvnLfv',
      color: 'naranja',
      detalles: 'esta feo jajaja',
      edad: 4,
    })
  } 

  return (
    <div>
      <Button onClick={handleSendEmail}>
        Mandar correo
      </Button>
    </div>
  )
}

export default send;

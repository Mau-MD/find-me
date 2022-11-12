import { Button } from '@mantine/core';
import { NextPage } from 'next';
import { trpc } from '../utils/trpc'

const send: NextPage = () => {  
  const mutation = trpc.emails.Send.useMutation()

  const handleSendEmail = async () => {
    mutation.mutate({
      to_mail: 'internhub99@gmail.com',
      from_mail: 'internhub99@gmail.com'
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

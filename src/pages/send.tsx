import { Button } from '@mantine/core';
import { NextPage } from 'next';
import { trpc } from '../utils/trpc'

const send: NextPage = () => {  
  const query = trpc.posts.singlePost.useQuery({ id: "cladstbyq000217euv0im0h11" })
  const queryEmails = trpc.emails.GetEmails.useQuery()
  const mutation = trpc.emails.Send.useMutation()

  const handleSendEmail = async () => {
    const missing_dog_data = query.data
    const all_emails = queryEmails.data
    console.log(all_emails)
    for (const item in all_emails) {
      console.log(item)
      mutation.mutate({
        from_mail: 'internhub99@gmail.com',
        to_mail: all_emails[item].email,
        raza: missing_dog_data?.raza || "",
        imagen: missing_dog_data?.imagen || "",
        color: missing_dog_data?.color,
        detalles: missing_dog_data?.detalles || "",
        edad: missing_dog_data?.edad || 1,
      })
    }
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

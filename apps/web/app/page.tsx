import { trpc } from '@web/app/trpc';
import ClientSide from './ClientSide';

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: 'Tom' });
  return (
    <div>
      <p>server side - {greeting}</p>
      
      <ClientSide />
    </div>
  ) ;
}

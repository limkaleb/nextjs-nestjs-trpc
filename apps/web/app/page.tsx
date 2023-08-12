import { trpc } from '@web/app/trpc';
// import ClientSide from './ClientSide';

export default async function Home() {
  const response = await trpc.hello.query({ name: 'kaleb' });
  console.log('responsee: ', response)
  return (
    <div>
      <p>server side - {response}</p>
      {/* <ClientSide /> */}
    </div>
  );
}

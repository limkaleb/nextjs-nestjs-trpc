import { trpc } from '@web/app/trpc';
// import ClientSide from './ClientSide';

export default async function Home() {
  // const response = await trpc.hello.query({ name: 'kaleb' });
  return (
    <div>
      <p>server side</p>
      {/* <ClientSide /> */}
    </div>
  );
}

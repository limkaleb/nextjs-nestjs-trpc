'use client'

import { trpc } from './trpc';
import { useEffect, useState } from 'react';

export default function ClientSide() {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    trpc.hello.query({}).then((response) => setGreeting(response));
  });
  return <p>I am client side new: {greeting}</p>;
}
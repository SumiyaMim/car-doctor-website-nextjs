import UpdateCheckoutForm from '@/components/forms/UpdateCheckoutForm'
import { headers } from 'next/headers';
import React from 'react'

export default async function UpdateCheckoutPage({ params }) {

    const p = await params;
    const res = await fetch(
        `http://localhost:3000//api/my-order/${p.id}`,
        {
        headers: new Headers(await headers()),
        }
    );
    const data = await res.json();
    
  return (
    <div>
      <UpdateCheckoutForm data={data}/>
    </div>
  )
}

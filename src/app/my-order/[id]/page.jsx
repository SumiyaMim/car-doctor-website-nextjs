import UpdateCheckoutForm from '@/components/forms/UpdateCheckoutForm'
import { headers } from 'next/headers';
import React from 'react'

export default async function UpdateCheckoutPage({ params }) {

    const p = await params;
    const res = await fetch(
        `https://car-doctor-website-nextjs.vercel.app/api/my-order/${p.id}`,
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

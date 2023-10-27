import React from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from '../auth/[...nextauth]/options';

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    return (
        <header className='w-full'>
          
        </header>
      )
}




import * as React from 'react';
import Link from '@/components/Link';
import { AlertButton } from '@/components/AlertButton';
import '../globals.css'

export default function Page() {
  return (
      <div className='flex flex-col'>
        <h2 className='text-400' >
        Next.js With Material UI - Asaf you pice of shit
        </h2>
        <AlertButton />
        <Link href="/notes">Notes</Link>

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </div>
  );
}
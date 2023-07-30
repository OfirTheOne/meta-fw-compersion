import * as React from 'react';
import Link from '@/components/Link';


export default function Page() {
  return (
      <div className='flex'>
        <h2>
          About page - Material UI - Next.js example in TypeScript
        </h2>
        <div className='m-4'>
          <Link href="/notes">
            Go to the notes page
          </Link>
        </div>
      </div>
  );
}
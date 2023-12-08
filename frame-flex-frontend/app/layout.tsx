import React from 'react';
import { Providers } from '@/lib/providers'
import 'react-multi-carousel/lib/styles.css';

/* Instruments */
import './styles/globals.css'

function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {props.children}
        </body>
      </html>
    </Providers>
  )
}

export default RootLayout;

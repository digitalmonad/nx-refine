import { Refine } from '@refinedev/core';
import { dataProvider } from 'src/providers/fake-rest-provider';
import routerProvider from '@refinedev/nextjs-router';
import React, { Suspense } from 'react';
import './global.css';

export const metadata = {
  title: 'Welcome to nx-refine',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <Refine
            dataProvider={dataProvider}
            resources={[
              {
                name: 'products',
                list: '/products',
                create: '/products/create',
                edit: '/products/edit/:id',
                show: '/products/show/:id',
              },
            ]}
            routerProvider={routerProvider}
          >
            {children}
          </Refine>
        </Suspense>
      </body>
    </html>
  );
}

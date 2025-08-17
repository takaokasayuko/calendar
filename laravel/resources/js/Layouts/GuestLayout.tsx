import { PropsWithChildren } from 'react';

interface titleProps {
  title: string;
}
type MyPropsWithChildren = PropsWithChildren<titleProps>;

export default function GuestLayout({ children, title }: MyPropsWithChildren) {
  return (
    <div className=" flex min-h-screen flex-col items-center bg-gray-100">
      <h1 className=" text-3xl font-bold m-8">{title}</h1>

          <div className=" w-full flex justify-center m-3 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl overflow-hidden bg-white p-5 shadow-md rounded-lg">
            {children}
          </div>

      </div>
    );
}

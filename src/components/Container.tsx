import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => (
  <div className='mx-auto max-w-screen-xl flex flex-col gap-5 h-full p-5 md:p-9 lg:p-20'>{children}</div>
);

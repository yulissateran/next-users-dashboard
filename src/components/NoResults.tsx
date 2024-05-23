import { ReactNode } from 'react';

export const NoResults = ({ children }: { children: ReactNode }) => (
  <div className='text-slate-400 text-center text-xl mx-auto my-6'>{children}</div>
);

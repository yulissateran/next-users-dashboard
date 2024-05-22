import clsx from 'clsx';
import { ReactNode } from 'react';

export const Pill = ({ type, children }: { children: ReactNode; type: 'primary' | 'secondary' }) => {
  const className = clsx('py-2 px-7 rounded-full capitalize', {
    'bg-orange-100': type === 'primary',
    'text-orange-500': type === 'primary',
    'bg-blue-100': type === 'secondary',
    'text-blue-500': type === 'secondary',
  });

  return <div className={className}>{children}</div>;
};

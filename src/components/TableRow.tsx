import { EllipsisHorizontalOutline } from '@/icons/EllipsisHorizontalOutline';
import { User } from '@/types/user.interface';
import { Button } from '@headlessui/react';
import { ListChildComponentProps } from 'react-window';
import { Pill } from './Pill';

export const TableRow = ({ data, style, index }: ListChildComponentProps<User[]>) => {
  const user: User = data[index];
  return (
    <div style={style} className='py-2'>
      <div className='grid grid-cols-12 gap-4 p-2 px-8 bg-white rounded-xl h-full'>
        <div className='col-span-10 md:col-span-3 flex  items-center'>{user.name}</div>
        <div className='hidden md:flex col-span-4  items-center'>{user.email}</div>
        <div className='hidden md:flex col-span-2  items-center'>{user.phone}</div>
        <div className='hidden md:flex col-span-2  items-center '>
          {<Pill type={user.gender === 'female' ? 'primary' : 'secondary'}>{user.gender}</Pill>}
        </div>
        <div className='col-span-2 md:col-span-1 flex items-center justify-end'>
          {
            <Button aria-label={`See more about ${user.name}`}>
              <EllipsisHorizontalOutline className='w-8 h-8 text-slate-400' />
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

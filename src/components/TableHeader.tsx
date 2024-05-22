import { PlaySolidIcon } from '@/icons/PlaySolidIcon';

interface TableHeaderProps {
  texts: { name: string; email: string; phone: string; gender: string };
}

export const TableHeader = ({ texts }: TableHeaderProps) => {
  return (
    <div className={'grid grid-cols-12 gap-4 p-2 px-8 text-slate-600'}>
      <div className='col-span-3 flex  items-center'>
        {texts.name} <PlaySolidIcon className='w-3 h-3 transform rotate-90 ml-2' />
      </div>
      <div className='col-span-4 flex  items-center'>
        {texts.email} <PlaySolidIcon className='w-3 h-3 transform rotate-90 ml-2' />
      </div>
      <div className='col-span-2 flex  items-center'>
        {texts.phone} <PlaySolidIcon className='w-3 h-3 transform rotate-90 ml-2' />
      </div>
      <div className='col-span-2 flex  items-center'>
        {texts.gender} <PlaySolidIcon className='w-3 h-3 transform rotate-90 ml-2' />
      </div>
    </div>
  );
};

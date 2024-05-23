import { MagnifyingGlassOutline } from '@/icons/MagnifyingGlassOutline';
import { Input } from '@headlessui/react';
import { ChangeEvent, useState } from 'react';

interface SeachBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  time?: number;
}

export const SearchBar = ({ onSearch, placeholder, time = 300 }: SeachBarProps) => {
  const [query, setQuery] = useState('');
  let timeoutId: NodeJS.Timeout | null = null;

  return (
    <div className='flex bg-white h-10'>
      <div className='px-3'>
        <MagnifyingGlassOutline className='w-6 h-10' />
      </div>
      <Input
        placeholder={placeholder}
        name='full_name'
        type='text'
        className='h-10 flex-grow outline-none'
        value={query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value);

          if (timeoutId) {
            clearTimeout(timeoutId);
          }
      
          timeoutId = setTimeout(() => {
            onSearch(event.target.value);
          }, time);
        }}
      />
    </div>
  );
};

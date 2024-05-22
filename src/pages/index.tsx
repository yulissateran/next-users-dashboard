import { SearchBar } from '@/components/SearchBar';
import { TableHeader } from '@/components/TableHeader';
import { TableRow } from '@/components/TableRow';
import { User } from '@/types/user.interface';
import { useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import usersList from './users.json';

const users = usersList as User[];

export default function Home() {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [searchTerm, setSearchTerm] = useState('');
  const showNotFoundResults = searchTerm !== '' && filteredUsers.length === 0;

  return (
    <main className={`flex flex-col gap-3 min-h-screen bg-slate-100  p-5 md:p-9 lg:p-20`}>
      <span className='text-3xl font-bold text-slate-900'>Customer List</span>

      <SearchBar
        placeholder='Search by name'
        onSearch={(query) => {
          setSearchTerm(query);
          if (query === '') {
            setFilteredUsers(users);
          } else {
            const filteredResults = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
            setFilteredUsers(filteredResults);
          }
        }}
      />

      <div className='flex-auto'>
        <TableHeader texts={{ name: 'Name', email: 'Email', gender: 'Gender', phone: 'Phone number' }} />
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList height={height} width={width} itemSize={100} itemCount={filteredUsers.length} itemData={filteredUsers}>
              {TableRow}
            </FixedSizeList>
          )}
        </AutoSizer>
        {showNotFoundResults && <div className='text-slate-400 text-center text-xl'>No results found</div>}
      </div>
    </main>
  );
}

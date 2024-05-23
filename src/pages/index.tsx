import { Container } from '@/components/Container';
import { NoResults } from '@/components/NoResults';
import { SearchBar } from '@/components/SearchBar';
import { UsersTable } from '@/components/UsersTable';
import { User } from '@/types/user.interface';
import { useState } from 'react';
import usersList from '../data/users.json';

const users = usersList as User[];

export default function Home() {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [searchTerm, setSearchTerm] = useState('');
  const showNotFoundResults = searchTerm !== '' && filteredUsers.length === 0;

  return (
    <main className='h-screen bg-slate-100'>
      <Container>
        <h1 className='text-3xl font-bold text-slate-800'>Customer List</h1>
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
        {!showNotFoundResults && (
          <UsersTable users={filteredUsers} columnNames={{ name: 'Name', email: 'Email', phone: 'Phone', gender: 'Gender' }} />
        )}
        {showNotFoundResults && <NoResults>No results found</NoResults>}
      </Container>
    </main>
  );
}

import { TableHeader, TableHeaderProps } from '@/components/TableHeader';
import { TableRow } from '@/components/TableRow';
import { User } from '@/types/user.interface';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';

export const UsersTable = ({ users, columnNames }: { users: User[]; columnNames: TableHeaderProps['texts'] }) => {
  return (
    <div className='flex-auto'>
      <TableHeader texts={columnNames} />
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList height={height} width={width} itemSize={100} itemCount={users.length} itemData={users}>
            {TableRow}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};

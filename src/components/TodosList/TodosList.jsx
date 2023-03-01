import TodoListItem from 'components/TodoListItem';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';
import { Table, TableHead, TableField } from './TodosList.styled';

const TodoList = () => {
  const data = useSelector(selectTodos);
  return (
    <Table>
      <thead>
        <TableHead>
          <TableField>ID</TableField>
          <TableField>TITLE</TableField>
          <TableField>DESCRIPTION</TableField>
          <TableField>STATUS</TableField>
        </TableHead>
      </thead>
      <tbody>
        {data?.map(({ id, title, descr, status }) => (
          <TodoListItem
            key={id}
            id={id}
            title={title}
            descr={descr}
            status={status}
          />
        ))}
      </tbody>
    </Table>
  );
};
export default TodoList;

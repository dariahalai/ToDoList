import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

const TodoList = () => {
  const data = useSelector(selectTodos);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
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
    </table>
  );
};
export default TodoList;

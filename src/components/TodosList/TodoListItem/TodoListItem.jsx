import Modal from 'components/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toogleTodoStatus } from 'redux/slice';

const TodoListItem = ({ id, title, descr, status }) => {
  const [todoID, setTodoId] = useState('');
  const dispatch = useDispatch();
  const closeModal = () => {
    setTodoId('');
  };

  return (
    <>
      <tr key={id}>
        <td onClick={() => setTodoId(id)}>{id}</td>
        <td onClick={() => setTodoId(id)}>{title}</td>
        <td onClick={() => setTodoId(id)}>{descr}</td>
        <td>
          <input
            type="checkbox"
            name="status"
            checked={status}
            onChange={() => dispatch(toogleTodoStatus(id))}
          />
        </td>
        <td>
          <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </td>
      </tr>
      {todoID && (
        <Modal closeModal={closeModal}>
          <h3>{title}</h3>
          <p>{descr}</p>
          <p>{status ? 'Completed' : 'Not completed'}</p>
        </Modal>
      )}
    </>
  );
};
export default TodoListItem;

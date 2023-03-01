import Modal from 'components/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toogleTodoStatus } from 'redux/slice';

const TodoListItem = ({ id, title, descr, status }) => {
  const [todoId, setTodoId] = useState('');
  const dispatch = useDispatch();
  const openModal = () => {
    setTodoId(id);
  };
  const closeModal = () => {
    setTodoId('');
  };
  return (
    <>
      <tr key={id}>
        <td onClick={openModal}>{id}</td>
        <td onClick={openModal}>{title}</td>
        <td onClick={openModal}>{descr}</td>
        <td>
          <input
            type="checkbox"
            name="status"
            checked={status}
            onChange={() => dispatch(toogleTodoStatus(id))}
          />
        </td>
      </tr>
      {todoId && (
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

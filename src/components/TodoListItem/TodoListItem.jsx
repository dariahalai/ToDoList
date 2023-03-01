import Modal from 'components/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toogleTodoStatus } from 'redux/slice';
import {
  TableField,
  TableBody,
  ModalAbout,
  ModalTitle,
  ModalDescr,
} from './TodoListItem.styled';

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
      <TableBody key={id}>
        <TableField onClick={openModal}>{id}</TableField>
        <TableField onClick={openModal}>{title}</TableField>
        <TableField onClick={openModal}>{descr}</TableField>
        <TableField>
          <input
            type="checkbox"
            name="status"
            checked={status}
            onChange={() => dispatch(toogleTodoStatus(id))}
          />
        </TableField>
      </TableBody>
      {todoId && (
        <Modal closeModal={closeModal}>
          <ModalAbout>
            <ModalTitle>{title}</ModalTitle>
            <p>Description:</p>
            <ModalDescr>{descr}</ModalDescr>
            <p>
              Status:
              <input
                type="checkbox"
                name="status"
                checked={status}
                onChange={() => dispatch(toogleTodoStatus(id))}
              />
            </p>
          </ModalAbout>
        </Modal>
      )}
    </>
  );
};
export default TodoListItem;

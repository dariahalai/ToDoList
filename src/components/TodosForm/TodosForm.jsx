import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo } from 'redux/slice';
const TodosForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, descr } = form;
    const addNewTodo = {
      id: nanoid(),
      ...form,
      status: false,
    };
    if (!title || !descr) {
      console.log('no no no');
    } else {
      dispatch(addTodo(addNewTodo));
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="false">
      <label>
        Title
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Description
        <input type="text" name="descr" onChange={handleChange} />
      </label>
      <button>Create</button>
    </form>
  );
};

export default TodosForm;

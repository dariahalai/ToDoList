import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/slice';

const TodosForm = () => {
  const [form, setForm] = useState({ title: '', descr: '' });
  const [dirtyForm, setDirtyForm] = useState({ title: false, descr: false });
  const [errorForm, setErrorForm] = useState({
    title: 'Title can`t be empty',
    descr: 'Description can`t be empty',
  });
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { title, descr } = errorForm;
    if (title || descr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errorForm]);

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
    if (form.title) {
      setErrorForm(prev => ({ ...prev, title: '' }));
    }
    if (form.descr) {
      setErrorForm(prev => ({ ...prev, descr: '' }));
    }
  };
  const handleBlur = ({ target: { name } }) => {
    setDirtyForm(prev => ({ ...prev, [name]: true }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { title, descr } = form;
    const addNewTodo = {
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
        {dirtyForm.title && errorForm.title && <div>{errorForm.title}</div>}
        <input
          value={form.title}
          type="text"
          name="title"
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </label>
      <label>
        Description
        {dirtyForm.descr && errorForm.descr && <div>{errorForm.descr}</div>}
        <input
          value={form.descr}
          type="text"
          name="descr"
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </label>
      <button disabled={!formValid}>Create</button>
    </form>
  );
};

export default TodosForm;

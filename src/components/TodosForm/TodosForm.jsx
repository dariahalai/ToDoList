import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/slice';
import { Form, Label, Input, Button } from './TodosForm.styled';

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
    const addNewTodo = {
      ...form,
      status: false,
    };
    dispatch(addTodo(addNewTodo));
    setForm({ title: '', descr: '' });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="false">
      <Label>
        Title
        {dirtyForm.title && errorForm.title && (
          <div style={{ color: 'red', fontSize: '12px' }}>
            {errorForm.title}
          </div>
        )}
        <Input
          value={form.title}
          type="text"
          name="title"
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Description
        {dirtyForm.descr && errorForm.descr && (
          <div style={{ color: 'red', fontSize: '12px' }}>
            {errorForm.descr}
          </div>
        )}
        <Input
          value={form.descr}
          type="text"
          name="descr"
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Label>
      <Button
        disabled={!formValid}
        style={{ cursor: !formValid ? 'not-allowed' : 'pointer' }}
      >
        Create
      </Button>
    </Form>
  );
};

export default TodosForm;

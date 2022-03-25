import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { handleApiRequest } from '../utils/api';
import { RequestPath } from '../utils/constants';
import { createFormBinder } from '../utils/form';
import './Form.css';
import Input from './Input';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string()
    .min(3, 'Name should be longer than 3 characters')
    .required('Name is required'),
  age: Yup.number()
    .min(1, 'Age should be greater than 1')
    .max(99, 'Age should be less than 99')
    .required('Age is required'),
});

const CreateUserForm = ({ setNotification }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      age: null,
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    handleApiRequest(RequestPath, 'POST', data, null, (error) => {
      setNotification({
        message: error.message,
        title: 'Request Error',
        type: 'error',
      });
    });
  };
  return (
    <form className='Form' onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='email'
        bindForm={createFormBinder(register, 'email')}
        error={errors.email}
        label={'Email'}
      />
      <Input
        bindForm={createFormBinder(register, 'name')}
        error={errors.name}
        label={'Name'}
      />
      <Input
        bindForm={createFormBinder(register, 'age')}
        label={'Age'}
        error={errors.age}
        type={'number'}
      />
      <div className='buttonContainer'>
        {/* <button className='button secondary'>Cancel</button> */}
        <button type='submit' className='button primary'>
          Save
        </button>
      </div>
    </form>
  );
};

CreateUserForm.propTypes = {
  setNotification: PropTypes.func.isRequired,
};

export default CreateUserForm;

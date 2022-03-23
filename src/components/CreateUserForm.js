import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import './Form.css';
import Input from './Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { createFormBinder } from '../utils/form';
import { getQueryParam } from '../utils/query';
import { ApiQueryKey, RequestPath } from '../utils/constants';

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    name: Yup.string().min(3, 'Name should be longer than 3 characters').required('Name is required'),
    age: Yup.number().min(1, 'Age should be greater than 1').max(99, 'Age should be less than 99').required('Age is required'),
});

const CreateUserForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            email: '',
            name: '',
            age: null,
        },
        mode: 'onSubmit',
        resolver: yupResolver(schema), 
    })
    const onSubmit = data => {
        fetch(getQueryParam(ApiQueryKey).concat(RequestPath), {
            method: 'POST',
            body: JSON.stringify(data),
        })
    };
    return (
        <form className='Form' onSubmit={handleSubmit(onSubmit)}>
            <Input type='email' bindForm={createFormBinder(register, 'email')} error={errors.email} label={'Email'}/>
            <Input bindForm={createFormBinder(register, 'name')} error={errors.name} label={'Name'}/>
            <Input bindForm={createFormBinder(register, 'age')} label={'Age'} error={errors.age} type={'number'} />
            <div className='buttonContainer'>
                {/* <button className='button secondary'>Cancel</button> */}
                <button type='submit' className='button primary'>Save</button>
            </div>
        </form>
    )
}

export default CreateUserForm;
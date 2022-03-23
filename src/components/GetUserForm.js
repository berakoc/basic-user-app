import './Form.css';
import Input from './Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { createFormBinder } from '../utils/form';
import PropTypes from 'prop-types';
import { getQueryParam } from '../utils/query';
import { ApiQueryKey, RequestPath } from '../utils/constants';


const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

const GetUserForm = ({setUser}) => {
    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            email: '',
        },
        mode: 'onSubmit',
        resolver: yupResolver(schema), 
    })
    const onSubmit = data => {
        fetch(getQueryParam(ApiQueryKey).concat(RequestPath).concat(`?email=${data.email}`), {
            method: 'GET',
        }).then(res => res.json()).then(setUser);
    };
    return (
        <form className='Form' onSubmit={handleSubmit(onSubmit)}>
            <Input type='email' bindForm={createFormBinder(register, 'email')} error={errors.email} label={'Email'}/>
            <div className='buttonContainer'>
                {/* <button className='button secondary'>Cancel</button> */}
                <button type='submit' className='button primary'>Get User</button>
            </div>
        </form>
    )
}

GetUserForm.propTypes = {
    setUser: PropTypes.func.isRequired,
}

export default GetUserForm;
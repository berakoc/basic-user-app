import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { handleApiRequest } from '../utils/api';
import { RequestPath } from '../utils/constants';
import { createFormBinder } from '../utils/form';
import { createQueryParams } from '../utils/query';
import './Form.css';
import Input from './Input';


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
        handleApiRequest(RequestPath.concat(createQueryParams({email: data.email})), 'GET', null, setUser, )
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
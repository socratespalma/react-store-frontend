import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Your password is too short')
});

export default loginSchema;

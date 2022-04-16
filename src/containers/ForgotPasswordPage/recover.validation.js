/* eslint-disable no-unneeded-ternary */
import * as Yup from 'yup';

const recoverSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required')
});

export default recoverSchema;

/* eslint-disable import/no-unresolved */
import countries from '@utils/countries';
import titles from '@utils/titles';
import * as Yup from 'yup';

// * Select input options arrays
const titleOptions = titles.map((title) => title.option);
const countryOptions = countries.map((country) => country.name);

// * Name format: supports international names
const nameRegEx =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

// * US & Canada phone number format
const phoneRegExUS = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g;

// * Nicaragua phone number format
const phoneRegExNI = /^[0-9]{4}[\s.-][0-9]{4}$/g;

const contactSchema = Yup.object().shape({
  title: Yup.string().required('Please select a title').oneOf(titleOptions),
  firstName: Yup.string()
    .required('Enter your first name')
    .matches(nameRegEx, 'Name format not supported')
    .min(2, 'First name is too short')
    .max(50, 'First name is too long'),
  lastName: Yup.string()
    .required('Enter your last name')
    .matches(nameRegEx, 'Name format not supported')
    .min(2, 'Last name is too short')
    .max(50, 'Last name is too long'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phone: Yup.string().when('country', {
    is: (country) => country !== ('Nicaragua' || null),
    then: Yup.string()
      .required('Phone number is required')
      .matches(phoneRegExUS, 'Phone number must be like XXX-XXX-XXXX'),
    otherwise: Yup.string()
      .required('Phone number is required')
      .matches(phoneRegExNI, 'Phone number must be like XXXX-XXXX')
  }),
  country: Yup.string()
    .required('Please select a country')
    .oneOf(countryOptions),
  message: Yup.string()
    .required('Enter your message')
    .min(10, 'Message is too short')
    .max(250, 'Message is too long')
});

export default contactSchema;

// https://www.sanity.io/guides/form-validation-with-npm-yup

import * as yup from 'yup';

const validationSchema = yup.object({
  login: yup.string().required('Введите логин'),
  pass: yup.string().required('Введите пароль'),
});

export { validationSchema };

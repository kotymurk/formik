import * as Yup from 'yup';

const regx = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

const firstName = Yup.string()
  .matches(regx.name, 'Кириллица латиница от 2 до 20символов')
  .required('Введите имя');

const lastName = Yup.string()
  .matches(regx.name, 'Кириллица латиница от 2 до 20символов')
  .required('Введите фамилию');

const email = Yup.string()
  .required('Введите email')
  .matches(regx.email, 'Формат example@mail.com');

export const schemas = {
  custom: Yup.object().shape({ firstName, lastName, email }),
};
export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

import './Form.css';
import { Formik, Form } from 'formik';
import { initialValues, schemas } from './helper';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const CustomForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={(values) => console.log('Success', values)}
    >
      {() => (
        <Form className='form'>
          <Input
            label='Имя'
            name='firstName'
            id='firstName'
            placeholder='Введите имя'
          />
          <Input
            label='Фамилия'
            name='lastName'
            id='lastName'
            placeholder='Введите фамилию'
          />
          <Input
            label='Email'
            name='email'
            id='email'
            placeholder='Введите email'
          />
          <Button>Отправить</Button>
        </Form>
      )}
    </Formik>
  );
};

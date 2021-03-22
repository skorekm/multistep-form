import { Formik } from 'formik';
import { FormWrapper } from './Form.styles';

export const Form = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={
          {
            title: ''
          }
        }
        onSubmit={(values) => console.log(values)}
      >
        
      </Formik>
    </FormWrapper>
  )
};
import { Field, Formik } from 'formik';
import { FormikTextField } from '../shared/FormikTextField';
import { FormWrapper } from './Form.styles';
import { Stepper } from '../components/Stepper';
import { Container } from '@material-ui/core';

export const Form = () => {
  return (
    <Container>
      <Stepper
        current={0}
        steps={['Step 1']}
      />
      <FormWrapper
        boxShadow={2}
      >
        <Formik
          initialValues={{ title: '' }}
          onSubmit={(values) => console.log(values)}
        >
          <Field
            name="title"
            variant="outlined"
            fullWidth
            component={FormikTextField}
          />
        </Formik>
      </FormWrapper>
    </Container>
  )
};
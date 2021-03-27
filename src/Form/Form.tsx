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
        
      >
        <Formik
          initialValues={{ title: '' }}
          onSubmit={(values) => console.log(values)}
        >
          <Field
            name="title"
            variant="outlined"
            label="Text label"
            placeholder="Sample placeholder"
            fullWidth
            component={FormikTextField}
          />
        </Formik>
      </FormWrapper>
    </Container>
  )
};
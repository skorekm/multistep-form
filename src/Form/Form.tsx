import { Container, Button } from '@material-ui/core';
import { Field, Formik } from 'formik';
import { FormikTextField } from '../shared/FormikTextField';
import { Stepper } from '../components/Stepper';
import { useStepper } from '../components/Stepper/useStepper';
import { FormWrapper, FormNavigation } from './Form.styles';
import { FormikSwitchField } from '../shared/FormikSwitchField';
import { FormikCheckboxField } from '../shared/FormikCheckboxField';

export const Form = () => {
  const formSteps = ['Step 1', 'Step 2', 'Step 3'];
  const { handleNext, handleBack, activeStep } = useStepper();
  return (
    <Container>
      <FormWrapper>
        <Stepper
          current={activeStep}
          steps={formSteps}
        />
        <Formik
          initialValues={{ title: '', description: '', switch: true }}
          onSubmit={(values) => console.log(values)}
        >
          <>
            <Field
              name="title"
              variant="outlined"
              label="Text label"
              placeholder="Sample placeholder"
              fullWidth
              component={FormikTextField}
            />
            <Field
              name="description"
              variant="outlined"
              label="Description"
              placeholder="Sample placeholder"
              fullWidth
              multiline
              rows={4}
              component={FormikTextField}
            />
            <Field
              name="switch"
              label="Switch field"
              color="primary"
              component={FormikSwitchField}
            />
            <Field
              name="remember"
              label="Keep me logged in"
              component={FormikCheckboxField}
            />
          </>
        </Formik>
        <FormNavigation>
          <Button
            variant="contained"
            onClick={() => handleBack()}
          >Back</Button>
          <Button
            onClick={() => handleNext()}
            variant="contained"
            color="primary"
          >Next</Button>
        </FormNavigation>
      </FormWrapper>
    </Container>
  )
};
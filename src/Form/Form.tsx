import { Field, Formik } from 'formik';
import React from 'react';
import { FormikTextField } from '../shared/FormikTextField';
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
        <Field
          name="title"
          variant="outlined"
          fullWidth
          component={FormikTextField}
        />
      </Formik>
    </FormWrapper>
  )
};
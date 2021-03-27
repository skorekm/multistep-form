// import get from 'lodash/get';
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';

// TODO: figure out generics, in formik files it's any as well
interface FormikTextFieldProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  meta: FieldMetaProps<any>;
  type: TextFieldProps;
}

export const FormikTextField = ({
  field,
  meta,
  form,
  type,
  // decoratorStart,
  // decoratorEnd,
  // precision,
  ...otherProps
}: FormikTextFieldProps) => {
  // const isInvalid = get(form.errors, field.name) && (get(form.touched, field.name) || form.submitCount > 0);
  // const handleKeyPress = (evt:any) => {
  //   if (
  //     otherProps.type === "number" &&
  //     ["e", "E", "+", "-"].includes(evt.key)
  //   ) {
  //     evt.preventDefault();
  //   }
  // };

  return (
    <>
      <TextField
        {...field}
        {...otherProps}
        name={field.name}
        id={field.name}
        margin="dense"
        value={field.value}
        onChange={form.handleChange}
        // error={isInvalid}
        // type={type}
        autoComplete="off"
        // helperText={isInvalid && get(form.errors, field.name)}
        // InputProps={{
        //   onKeyPress: handleKeyPress,
        //   startAdornment: decoratorStart && (
        //     <InputAdornment position="start">{decoratorStart}</InputAdornment>
        //   ),
        //   endAdornment: decoratorEnd && (
        //     <InputAdornment position="end">{decoratorEnd}</InputAdornment>
        //   )
        // }}
      />
    </>
  );
};

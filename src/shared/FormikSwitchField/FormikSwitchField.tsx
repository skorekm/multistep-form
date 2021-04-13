// @ts-nocheck
import React from "react";
import { FormHelperText, Switch } from "@material-ui/core";
import styled from "styled-components";

const StyledSwitch = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: row-reverse;
`;

const StyledLabel = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 38px;
  font-size: 12px;
`;

export const FormikSwitchField = ({
  field,
  form,
  ...otherProps
}): React.ReactElement => {
  const isInvalid = form.errors[field.name] && form.touched[field.name];
  return (
    <>
      <StyledSwitch
        onClick={e => {
          form.handleChange({
            target: { name: field.name, value: !field.value }
          });
        }}
      >
        <Switch {...otherProps} checked={field.value} />
        <StyledLabel>{otherProps.label}</StyledLabel>
      </StyledSwitch>
      {isInvalid &&
        form.errors[field.name] && (
          <FormHelperText error>{form.errors[field.name]}</FormHelperText>
        )}
    </>
  );
};

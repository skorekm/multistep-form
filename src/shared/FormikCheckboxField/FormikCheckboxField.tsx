// @ts-nocheck
import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

export const FormikCheckboxField = ({
    field,
    form,
    ...otherProps
}): React.ReactElement => {
    return (
        <>
            <FormControlLabel
                {...otherProps} 
                control={
                    <Checkbox 
                        checked={field.value}
                        onClick={e => {
                            form.handleChange({
                                target: {
                                    name: field.name,
                                    value: !field.value
                                }
                            })
                        }}
                        name="rememberMe"
                    />
                }
                label={otherProps.label}
                labelPlacement="end"
            /> 
        </>
    );
};

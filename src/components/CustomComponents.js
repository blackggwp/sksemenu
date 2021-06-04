import { Typography } from "@material-ui/core";
import React from "react";
import { StyledTextBox } from "./StyledComponents";

export const CustomTextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  helperText,
  label,
  ...props
}) => (
  <div>
    <Typography variant="inherit" component="h3">
      {helperText}
    </Typography>
    <StyledTextBox
      type="text"
      placeholder={label}
      errors={touched[field.name] && errors[field.name]}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="error" style={{ color: "red" }}>
        {errors[field.name]}
      </div>
    )}
  </div>
);

export const CustomRadio = ({
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors },
  ...props
}) => {
  return (
    <label>
      <input type="radio" name={name} value={value} />
      {label}
    </label>
  );
};

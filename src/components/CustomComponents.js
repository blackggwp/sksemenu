import React from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { StyledTextBox } from "./StyledComponents";

export const CustomTextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  helperText,
  enText,
  label,
  required,
  ...props
}) => (
  <div>
    <Typography variant="caption" component="span">
      {helperText}
    </Typography>{" "}
    <Typography variant="subtitle1" component="span">
      {enText}
    </Typography>
    <Typography component="span">{`${required ? "*" : ""}`}</Typography>
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
      <Typography variant="caption">{label}</Typography>
    </label>
  );
};

export const CustomUpload = ({
  field,
  label,
  enText,
  name,
  id,
  value,
  form: { touched, errors },
  setFieldValue,
  setImg,
  disabled,
  ...props
}) => {
  return (
    <Box p={2}>
      <Button variant="contained" component="label" disabled={disabled}>
        {label}
        <input
          id="file"
          type="file"
          accept="image/*"
          hidden
          onChange={(event) => {
            setFieldValue("invoiceImg", event.currentTarget.files[0]);
            setImg(URL.createObjectURL(event.target.files[0]));
          }}
        />
      </Button>
      <span>&nbsp; </span>
      <Typography variant="subtitle1" component="span">
        {enText}
      </Typography>
    </Box>
  );
};

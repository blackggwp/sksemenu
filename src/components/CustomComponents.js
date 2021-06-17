import React from "react";
import { Button, Typography } from "@material-ui/core";
import { StyledTextBox } from "./StyledComponents";

export const CustomTextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  helperText,
  label,
  required,
  ...props
}) => (
  <div>
    <Typography variant="inherit" component="h3">
      {helperText}{" "}
      <span style={{ color: "red" }}>{`${required ? "*" : ""}`}</span>
    </Typography>
    <StyledTextBox
      type="text"
      placeholder={label}
      // placeholder={`${label} ${
      //   require && <span style={{ color: "red" }}>*</span>
      // }`}
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

export const CustomUpload = ({
  field,
  label,
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
    <Button variant="contained" component="label" disabled={disabled}>
      Upload INVOICE
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
  );
};

import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  FormLabel,
  Container,
  Collapse,
  Typography,
  RadioGroup,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { DateTimePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Box from "@material-ui/core/Box";
import DateFnsUtils from "@date-io/date-fns";
import { issueType } from "../../assets/issueType";
import axios from "axios";
import { CustomTextInput } from "../../components/CustomComponents";
import HeaderInfo from "../../components/HeaderInfo";
import * as Yup from "yup";
import "yup-phone";
import { Alert, AlertTitle } from "@material-ui/lab";
import "../../assets/css/feedback.css";
import { GLOBAL } from "../../config";

interface OutletOptions {
  outletCode: string;
  outletName: string;
}

const styles = {
  radio: {
    width: 25,
    height: 25,
    cursor: "pointer",
    verticalAlign: "middle",
    margin: 5,
  },
  radioLabel: {
    cursor: "pointer",
    verticalAlign: "inherit",
  },
};

const Feedback = () => {
  const [outlets, setOutlets] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(`${GLOBAL.API_URL}feedback/outlets`);
        // console.log(response.data);
        setOutlets(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const initialValues = {
    feedbackType: "ติ",
    issueType: "",
    firstName: "",
    lastName: "",
    tel: "",
    systemDate: new Date(),
    outletCode: "",
    feedbackMessage: "",
  };
  const FeedbackSchema = Yup.object().shape({
    feedbackType: Yup.string().required(),
    issueType: Yup.string().required(),
    firstName: Yup.string().max(50, "Too Long!").required("Required"),
    lastName: Yup.string().max(50, "Too Long!").required("Required"),
    systemDate: Yup.date().required("Required"),
    tel: Yup.string().phone("TH").required(),
    outletCode: Yup.string().required(),
    feedbackMessage: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        // console.log(values);
        (async () => {
          try {
            const response = await axios.post(`${GLOBAL.API_URL}feedback`, {
              values,
            });
            // console.log(response);
            if (response.status === 200) {
              setSuccess(true);
              setSubmitting(false);
            }
          } catch (error) {
            console.error(error);
          }
        })();
        // setTimeout(async () => {
        //   alert(JSON.stringify(values, null, 2));
        // }, 500);
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Container maxWidth="md" className="feedbackPage">
          <HeaderInfo />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
              <Box margin={2}>
                <FormControl
                  style={{ display: "inline-block" }}
                  component="fieldset"
                  required
                >
                  <Box margin={1}>
                    <FormLabel component="legend" filled required>
                      หัวข้อที่ต้องการติดต่อ
                    </FormLabel>
                  </Box>
                  <RadioGroup>
                    <label style={styles.radioLabel}>
                      <Field
                        style={styles.radio}
                        type="radio"
                        name="feedbackType"
                        value="ติ"
                      />
                      ติ
                    </label>
                    <label style={styles.radioLabel}>
                      <Field
                        style={styles.radio}
                        type="radio"
                        name="feedbackType"
                        value="ชม"
                      />
                      ชม
                    </label>
                    <label style={styles.radioLabel}>
                      <Field
                        style={styles.radio}
                        type="radio"
                        name="feedbackType"
                        value="แนะนำ"
                      />
                      แนะนำ
                    </label>
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={TextField}
                  defaultValue=""
                  type="text"
                  name="issueType"
                  label="เรื่องที่ต้องการติดต่อ"
                  select
                  fullWidth
                  variant="outlined"
                  helperText="Please select Issues"
                  margin="normal"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                >
                  {issueType.map((option) => (
                    <MenuItem
                      key={option.id}
                      // value={option.title}>
                      value={option.title ? option.title : ""}
                    >
                      {option.title}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={CustomTextInput}
                  name="firstName"
                  type="text"
                  label="กรอกชื่อ"
                  helperText="ชื่อ"
                />
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={CustomTextInput}
                  type="text"
                  label="กรอกนามสกุล"
                  name="lastName"
                  helperText="นามสกุล"
                />
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={CustomTextInput}
                  type="number"
                  label="กรอกเบอร์โทรติดต่อ"
                  name="tel"
                  helperText="เบอร์โทรติดต่อ"
                />
              </Box>
              <Box margin={2}>
                <Typography component="h4">วัน / เวลาที่ใช้บริการ</Typography>
                <Field
                  required
                  disableFuture
                  size="medium"
                  inputVariant="outlined"
                  component={DateTimePicker}
                  fullWidth
                  name="systemDate"
                  label="Please select datetime"
                  ampm={false}
                  format="dd/M/Y HH:MM"
                />
                {errors.systemDate && touched.systemDate ? (
                  <div>{errors.systemDate}</div>
                ) : null}
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={TextField}
                  defaultValue=""
                  type="text"
                  name="outletCode"
                  label="สาขาที่ใช้บริการ"
                  select
                  variant="outlined"
                  fullWidth
                  helperText="Please select Outlet"
                  margin="normal"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                >
                  {outlets.map((option: OutletOptions) => (
                    <MenuItem
                      key={option.outletCode}
                      // value={option.title}>
                      value={option.outletCode ? option.outletCode : ""}
                    >
                      {option.outletName}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={TextField}
                  multiline
                  rows={4}
                  variant="outlined"
                  type="text"
                  fullWidth
                  label="ข้อความและคำแนะนำ"
                  name="feedbackMessage"
                  helperText="Please Enter feedback message"
                />
              </Box>
              <Box
                margin={1}
                style={{
                  textAlign: "center",
                  paddingBottom: 50,
                }}
              >
                {isSubmitting && <LinearProgress />}
                {success ? (
                  <Collapse in={success}>
                    <Alert severity="success">
                      <AlertTitle>Submit form Success</AlertTitle>
                      {/* This is a success alert — <strong>check it out!</strong> */}
                    </Alert>
                  </Collapse>
                ) : (
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </Form>
          </MuiPickersUtilsProvider>
        </Container>
      )}
    </Formik>
  );
};

export default Feedback;

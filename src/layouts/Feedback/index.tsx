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
  withStyles,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { DateTimePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Box from "@material-ui/core/Box";
import DateFnsUtils from "@date-io/date-fns";
// import { issueType } from "../../assets/issueType";
import axios from "axios";
import {
  CustomTextInput,
  CustomUpload,
} from "../../components/CustomComponents";
import HeaderInfo from "../../components/HeaderInfo";
import * as Yup from "yup";
import "yup-phone";
import { Alert, AlertTitle } from "@material-ui/lab";
import "../../assets/css/feedback.css";
import { GLOBAL } from "../../config";

interface OutletOptions {
  outletId: number;
  store: string;
  brand: string;
}

interface IssueOptions {
  id: number;
  issueType: string;
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

const CssTextField = withStyles({
  root: {
    "& .MuiFormHelperText-contained": {
      fontSize: "0.8rem",
    },
  },
})(TextField);

const Feedback = () => {
  const [outlets, setOutlets] = useState([]);
  const [issues, setIssues] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<any | undefined>(undefined);
  const [img, setImg] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const allOutlets = await axios(`${GLOBAL.API_URL}feedback/outlets`);
        const allIssues = await axios(`${GLOBAL.API_URL}feedback/issues`);
        setOutlets(allOutlets.data);
        setIssues(allIssues.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const initialValues = {
    feedbackType: "ชม",
    issueTypeId: "",
    firstName: "",
    lastName: "",
    tel: "",
    systemDate: new Date(),
    outletId: "",
    serviceType: "",
    tableCode: "",
    invoiceImg: "",
    feedbackMessage: "",
  };
  const FeedbackSchema = Yup.object().shape({
    feedbackType: Yup.string().required(),
    issueTypeId: Yup.string().required(),
    firstName: Yup.string().max(50, "Too Long!").required("Required"),
    lastName: Yup.string().max(50, "Too Long!").required("Required"),
    systemDate: Yup.date().required("Required"),
    tel: Yup.string().phone("TH").required(),
    outletId: Yup.string().required(),
    serviceType: Yup.string().required(),
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
          let payload = new FormData();
          payload.append("privateKey", GLOBAL.PRIVATE_KEY);
          payload.append("invoiceImg", values.invoiceImg);

          for (const [key, value] of Object.entries(values)) {
            payload.append(key, String(value));
          }
          try {
            const response = await axios.post(
              `${GLOBAL.API_URL}feedback`,
              payload
            );
            console.log(response);
            if (response.status === 200) {
              setSuccess(true);
            }
            setSubmitting(false);
          } catch (error) {
            setError(error);
            setSubmitting(false);
            console.error(error);
          }
        })();
      }}
    >
      {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
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
                      <Typography variant="caption" component="span">
                        หัวข้อที่ต้องการติดต่อ
                      </Typography>{" "}
                      <Typography variant="subtitle1" component="span">
                        Please select topic
                      </Typography>
                    </FormLabel>
                  </Box>
                  <RadioGroup>
                    <label style={styles.radioLabel}>
                      <Field
                        style={styles.radio}
                        type="radio"
                        name="feedbackType"
                        value="ชม"
                      />
                      <Typography variant="caption" component="span">
                        ชม
                      </Typography>{" "}
                      <Typography variant="subtitle1" component="span">
                        Compliment
                      </Typography>
                    </label>
                    <label style={styles.radioLabel}>
                      <Field
                        style={styles.radio}
                        type="radio"
                        name="feedbackType"
                        value="แนะนำ"
                      />
                      <Typography variant="caption" component="span">
                        แนะนำ
                      </Typography>{" "}
                      <Typography variant="subtitle1" component="span">
                        Recomendation
                      </Typography>
                    </label>
                    <label style={styles.radioLabel}>
                      <Field
                        style={styles.radio}
                        type="radio"
                        name="feedbackType"
                        value="ติ"
                      />
                      <Typography variant="caption" component="span">
                        ติ
                      </Typography>{" "}
                      <Typography variant="subtitle1" component="span">
                        Complaint
                      </Typography>
                    </label>
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={CssTextField}
                  defaultValue=""
                  type="text"
                  name="issueTypeId"
                  label="เรื่องที่ต้องการติดต่อ"
                  select
                  fullWidth
                  variant="outlined"
                  helperText="Please select Issue"
                  margin="normal"
                >
                  {issues.map((option: IssueOptions) => (
                    <MenuItem
                      key={option.id}
                      value={option.id ? option.id : ""}
                    >
                      {option.issueType}
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
                  enText="Name"
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
                  enText="Surname"
                />
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={CustomTextInput}
                  type="text"
                  pattern="[0-9]*"
                  label="กรอกเบอร์โทรติดต่อ"
                  name="tel"
                  helperText="เบอร์โทรติดต่อ"
                  enText="Phone No."
                />
              </Box>
              <Box margin={2}>
                <Typography variant="caption" component="span">
                  วัน / เวลาที่ใช้บริการ
                </Typography>{" "}
                <Typography variant="subtitle1" component="span">
                  Date/Time of issue *
                </Typography>
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
                  component={CssTextField}
                  defaultValue=""
                  type="text"
                  name="outletId"
                  label="สาขาที่ใช้บริการ"
                  select
                  variant="outlined"
                  fullWidth
                  helperText="Please select branch *"
                  margin="normal"
                >
                  {outlets.map((option: OutletOptions, idx: number) => (
                    <MenuItem
                      key={idx}
                      value={option.outletId ? option.outletId : ""}
                    >
                      {`${option.brand} ${option.store}`}
                    </MenuItem>
                  ))}
                </Field>
              </Box>

              <Box margin={1}>
                <Field
                  required
                  component={CssTextField}
                  defaultValue=""
                  type="text"
                  name="serviceType"
                  label="รูปแบบการใช้บริการ"
                  select
                  variant="outlined"
                  fullWidth
                  helperText="Please select service format *"
                  margin="normal"
                >
                  {["ทานที่ร้าน", "ซื้อกลับบ้าน", "สั่งแบบส่งถึงบ้าน"].map(
                    (option, idx: number) => (
                      <MenuItem key={idx} value={option ? option : ""}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </Field>
              </Box>
              <Box margin={1}>
                <Field
                  component={CssTextField}
                  name="tableCode"
                  type="text"
                  label="กรอกเบอร์โต๊ะ Table No."
                  enText="Table No."
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={CustomUpload}
                  setFieldValue={setFieldValue}
                  setImg={setImg}
                  name="invoiceImg"
                  disabled={success}
                  label="แนบรูปใบเสร็จ"
                  enText="Attach invoice"
                />
                {img && <img src={img} alt="" width="100" />}
              </Box>
              <Box margin={1}>
                <Field
                  required
                  component={CssTextField}
                  multiline
                  rows={4}
                  variant="outlined"
                  type="text"
                  fullWidth
                  label="ข้อความและคำแนะนำ feedback message"
                  name="feedbackMessage"
                  helperText="ข้อความและคำแนะนำ"
                  enText="Please enter feedback message *"
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
                      <AlertTitle>
                        ขอบคุณสำหรับข้อเสนอแนะ ติ ชม
                        ได้จัดส่งข้อมูลของท่านเรียบร้อยแล้ว
                      </AlertTitle>
                    </Alert>
                  </Collapse>
                ) : error ? (
                  <Alert severity="error">
                    <AlertTitle>
                      มีข้อผิดพลาดเกิดขึ้น กรุณาติดต่อแอดมิน
                    </AlertTitle>
                    Something went wrong! Please contact admin.
                  </Alert>
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

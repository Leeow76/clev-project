import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  textField: {
    "&:first-child": {
      marginTop: 0,
    },
  },
  formBox: {
    marginTop: theme.spacing(8),
  },
  submitButton: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
}));

const inputFieldValues = [
  {
    name: "name",
    required: true,
    label: "Name",
    id: "name",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    id: "age",
  },
  {
    name: "email",
    required: true,
    label: "E-mail",
    type: "e-mail",
    id: "email",
  },
  {
    name: "message",
    label: "Message",
    id: "message",
    multiline: true,
    rows: 10,
  },
];

const CustomerForm = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <Paper className={classes.formBox}>
        <Formik
          initialValues={{ name: "", age: "", email: "", message: "" }}
          onSubmit={(values) => {
            let resultString = "";
            for (const [key, value] of Object.entries(values)) {
              resultString += `${key}: ${value}\n`;
            }
            alert(resultString);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),
            age: Yup.number(),
            email: Yup.string().email().required("Required"),
            comment: Yup.string(),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form
                onSubmit={handleSubmit}
                className={classes.root}
                autoComplete="off"
              >
                {inputFieldValues.map((inputFieldValue, index) => {
                  return (
                    <TextField
                      key={index}
                      name={inputFieldValue.name}
                      value={values[inputFieldValue.name]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label={inputFieldValue.label}
                      multiline={inputFieldValue.multiline ?? false}
                      required={inputFieldValue.required ?? false}
                      type={inputFieldValue.type ?? "text"}
                      rows={inputFieldValue.rows ?? 1}
                      autoComplete="none"
                      fullWidth
                      className={classes.textField}
                      margin="normal"
                      helperText={
                        errors[inputFieldValue.name] &&
                        touched[inputFieldValue.name] &&
                        errors[inputFieldValue.name]
                      }
                      error={
                        errors[inputFieldValue.name] &&
                        touched[inputFieldValue.name]
                      }
                    />
                  );
                })}
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  className={classes.submitButton}
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </form>
            );
          }}
        </Formik>
      </Paper>
    </Container>
  );
};

export default CustomerForm;

import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(3),
    "&:last-of-type": {
      marginBottom: 0,
    },
    "& p.Mui-error": {
      position: "absolute",
      top: "100%",
    },
  },
  formBox: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  submitButton: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
}));

const inputFieldValues = [
  {
    name: "Name",
    required: true,
    label: "Name",
    id: "name",
  },
  {
    name: "Age",
    label: "Age",
    type: "number",
    id: "age",
  },
  {
    name: "E-mail",
    required: true,
    label: "E-mail",
    type: "e-mail",
    id: "email",
  },
  {
    name: "Message",
    label: "Message",
    id: "message",
    multiline: true,
    rows: 10,
  },
];

const CustomerForm = () => {
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Required"),
    Age: Yup.number().integer().min(1),
    "E-mail": Yup.string().email().required("Required"),
    Message: Yup.string(),
  });

  return (
    <Container maxWidth="xs">
      <Paper className={classes.formBox}>
        <Formik
          initialValues={{ Name: "", Age: "", "E-mail": "", Message: "" }}
          onSubmit={(values) => {
            let resultString = "";
            for (const [key, value] of Object.entries(values)) {
              resultString += `${key}: ${value}\n`;
            }
            alert(resultString);
          }}
          validationSchema={validationSchema}
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
              <form onSubmit={handleSubmit} className={classes.form}>
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
                      margin="dense"
                      helperText={
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
                  Submit
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

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Formik, Field, Form } from "formik";
import { registerSchema } from "./validate";

export default function Register(props) {
  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      
      props.handleRegister(values);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Register
      </Typography>

      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
        enableReinitialize
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form>
              <Field
                as={TextField}
                label="Email"
                type="email"
                name="email"
                fullWidth
                variant="outlined"
                margin="dense"
                error={errors.email && touched.email ? true : false}
              />
              <Field
                as={TextField}
                label="Password"
                type="password"
                name="password"
                fullWidth
                variant="outlined"
                margin="dense"
                error={errors.password && touched.password ? true : false}
              />
              <Field
                as={TextField}
                label=" Confirm Password"
                type="password"
                name="confirmPassword"
                fullWidth
                variant="outlined"
                margin="dense"
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? true
                    : false
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Button
                type="button"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => props.handlePage("loginPage")}
              >
                Sign In
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}

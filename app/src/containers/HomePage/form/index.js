import React, { useState } from "react";

import { Formik, Field, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addPlayers, editPlayers } from "../../../redux/actions/player";
import { playerSchema } from "./validate";

export default function Index(props) {
  const initialValue = props.formValues;
  const page = props.page;
  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log(values);
      if (values._id) {
        props.dispatch(editPlayers(values));
      } else {
        props.dispatch(addPlayers(values));
      }

      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={playerSchema}
      enableReinitialize
    >
      {({ errors, touched, isSubmitting }) => {
        return (
          <Form>
            <Field
              as={TextField}
              label="Name"
              type="text"
              name="firstName"
              fullWidth
              variant="outlined"
              margin="dense"
              disabled={page === "View"}
              error={errors.firstName && touched.firstName ? true : false}
            />
            {console.log(errors)}
            <Field
              as={TextField}
              label="Last Name"
              type="text"
              name="lastName"
              fullWidth
              variant="outlined"
              margin="dense"
              disabled={page === "View"}
            />
            <Field
              as={TextField}
              label="Contact"
              type="number"
              name="contact"
              fullWidth
              variant="outlined"
              margin="dense"
              disabled={page === "View"}
              InputProps={{ inputProps: { max: 9999999999 } }}
              error={errors.contact && touched.contact ? true : false}
            />
            <Field
              as={TextField}
              label="Game Session"
              type="text"
              name="gameSession"
              fullWidth
              variant="outlined"
              margin="dense"
              disabled={page === "View"}
            />
            {page !== "View" && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                {props.page}
              </Button>
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

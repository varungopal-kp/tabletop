import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().trim().required("Required"),
  password: yup.string().trim().required("Required"),
});
export const registerSchema = yup.object().shape({
  email: yup.string().trim().required("Required"),
  password: yup.string().trim().required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

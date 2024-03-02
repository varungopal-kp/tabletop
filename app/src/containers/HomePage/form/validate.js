import * as yup from "yup";

export const playerSchema = yup.object().shape({
  firstName: yup.string().trim().required("Required"),
  contact: yup.number().test(
    'len',
    'Contact number must be at least 10 digits',
    val => val.toString().length >= 10
  ).required("Required"),
});

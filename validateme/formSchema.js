import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be 2 chars or longer"),
  // we are done with checkboxes
  pepperoni: yup.boolean(),
  tomatoes: yup.boolean(),
  olives: yup.boolean(),
  spinach: yup.boolean(),
});
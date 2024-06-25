import * as yup from "yup";

const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*.?&]).{6,}$";

export const schema = yup.object().shape({
  email: yup.string().email().required(),

  age: yup.number().min(18).max(100).integer().required(),

  password: yup
    .string()
    .min(6)
    .matches(regex, "Password is not strong")
    .required(),

  passwordConfirm: yup.string().oneOf([yup.ref("password")],"Password does not match").required(),

  terms: yup.boolean().required()
});

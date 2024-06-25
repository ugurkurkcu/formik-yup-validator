import { useFormik } from "formik";
import React from "react";
import { schema } from "./schema";
import InputFiled from "./components/InputFiled";
import { inputs } from "./constants";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
      terms: false,
    },

    validationSchema: schema,

    onSubmit: (values, actions) => {
      alert("Form has been sent");
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <div className=" vh-100 vw-100 bg-dark">
      <div className=" container py-5 text-white">
        <h2 className=" text-center">Coin Market</h2>
        <form
          onSubmit={formik.handleSubmit}
          className=" d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data, index) => (
            <InputFiled key={index} formik={formik} data={data} />
          ))}

          <button type="submit" className=" btn btn-primary mt-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

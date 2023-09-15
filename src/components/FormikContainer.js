import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
    const dropDown=[
        {key:'select an options',value:''},
        {key:' option 1',value:'option1'},
        {key:' option 2',value:'option2'},
        {key:'option 3',value:'option3'},
    ]
    const radioOption=[
        
        {key:' option 1',value:'option1'},
        {key:' option 2',value:'option2'},
        {key:'option 3',value:'option3'},
    ]
    const checkButton=[
        
        {key:' option 1',value:'option1'},
        {key:' option 2',value:'option2'},
        {key:'option 3',value:'option3'},
    ]
  const initialValues = {
    email: "",
    description: "",
    selectOption:'',
    radioButton:'',
    checkoptions:[],
    birthDate:null
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioButton: Yup.string().required("Required"),
    checkoptions:Yup.array().required('Required'),
    birthDate:Yup.date().required('Required').nullable()
  });
  const onSubmit = (values) => console.log("form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            type='text'
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            type='text'
            label="SELECT AN OPTION"
            name="selectOption"
            options={dropDown}
          />
          <FormikControl
            control="radio"
            
            label="Radio Topic"
            name="radioButton"
            options={radioOption}
          />
          <FormikControl
            control="checkbox"
            label="checkbox"
            name="checkoptions"
            options={checkButton}
          />
          <FormikControl
            control='date'
            label='Pick a date'
            name='birthDate'
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;

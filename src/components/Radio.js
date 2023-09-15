import React from 'react'
import { Field,ErrorMessage } from 'formik'
import TextError from './TextError'
function Radio(props) {
    const {name,label,options,...rest}=props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field   name={name} {...rest}>
      {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Radio

import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { onSignUpReqActionCreator } from '../../store/actions';
import { State } from '../../types';

function SignUpForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const signUpError = useSelector((state: State) => state.user.signUpError);
  return (
    <Form
      onSubmit={(formObj: {
        phone: string;
        password: string;
        first_name: string;
        last_name: string;
      }) => {
        if (formObj.phone && formObj.password) {
          if (formObj.phone.trim() !== '' && formObj.password.trim() !== '') {
            dispatch(
              onSignUpReqActionCreator({
                phone: formObj.phone,
                password: formObj.password,
                firstName: formObj.first_name,
                lastName: formObj.last_name,
              }),
            );
            console.log('true');
          } else {
            setError('Заполните поля ввода');
          }
        } else {
          setError('Заполните поля ввода');
        }
      }}
      render={({ handleSubmit }) => (
        <div className="signupform__form">
          <Field name="phone">
            {({ input }) => (
              <input
                placeholder="Phone"
                type="text"
                className="signupform__input"
                {...input}
              />
            )}
          </Field>
          <Field name="password">
            {({ input }) => (
              <input
                placeholder="Password"
                className="signupform__input"
                type="password"
                {...input}
              />
            )}
          </Field>
          <Field name="first_name">
            {({ input }) => (
              <input
                placeholder="First name"
                className="signupform__input"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="last_name">
            {({ input }) => (
              <input
                placeholder="Last name"
                className="signupform__input"
                type="text"
                {...input}
              />
            )}
          </Field>
          <button className="signupform__button" onClick={handleSubmit}>
            Sign Up
          </button>
          {error == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{error}</div>
          )}
          {signUpError == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{signUpError}</div>
          )}
        </div>
      )}
    />
  );
}
export default SignUpForm;

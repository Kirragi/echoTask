import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { onSignInReqActionCreator } from '../../store/actions';
import { State } from '../../types';

function SignInForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const signInError = useSelector((state: State) => state.user.signInError);
  return (
    <Form
      onSubmit={(formObj: { phone: string; password: string }) => {
        if (formObj.phone && formObj.password) {
          if (formObj.phone.trim() !== '' && formObj.password.trim() !== '') {
            dispatch(
              onSignInReqActionCreator({
                phone: formObj.phone,
                password: formObj.password,
              }),
            );
          } else {
            setError('Заполните полe ввода');
          }
        } else {
          setError('Заполните полe ввода');
        }
      }}
      render={({ handleSubmit }) => (
        <div className="signinform__form">
          <Field name="phone">
            {({ input }) => (
              <input
                placeholder="Phone"
                type="text"
                className="signinform__input"
                {...input}
              />
            )}
          </Field>
          <Field name="password">
            {({ input }) => (
              <input
                placeholder="Password"
                className="signinform__input"
                type="password"
                {...input}
              />
            )}
          </Field>
          <button className="signinform__button" onClick={handleSubmit}>
            Sign In
          </button>
          {error == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{error}</div>
          )}
          {signInError == '' ? (
            <></>
          ) : (
            <div className="signinform__error">{signInError}</div>
          )}
        </div>
      )}
    />
  );
}

export default SignInForm;

import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../types';
import {
  resetPassStartReqActionCreator,
  resetPassEndReqActionCreator,
} from '../../store/actions';

function ResetPassForm() {
  const resetPass = useSelector((state: State) => state.user.resetPass);
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');
  const resetPassError = useSelector(
    (state: State) => state.user.resetPassError,
  );
  const dispatch = useDispatch();
  let resetPassForm: JSX.Element = <></>;
  if (!resetPass) {
    resetPassForm = (
      <Form
        onSubmit={(formObj: { phone: string }) => {
          if (formObj.phone) {
            if (formObj.phone.trim() !== '') {
              dispatch(
                resetPassStartReqActionCreator({
                  phone: formObj.phone,
                }),
              );
              setPhone(formObj.phone);
            } else {
              setError('Заполните поле ввода');
            }
          } else {
            setError('Заполните поле ввода');
          }
        }}
        render={({ handleSubmit }) => (
          <div className="resetpassform__form">
            <Field name="phone">
              {({ input }) => (
                <input
                  placeholder="Phone"
                  type="text"
                  className="resetpassform__input"
                  {...input}
                />
              )}
            </Field>
            <button className="resetpassform__button" onClick={handleSubmit}>
              Reset
            </button>
            {error == '' ? (
              <></>
            ) : (
              <div className="signinform__error">{error}</div>
            )}
            {resetPassError == '' ? (
              <></>
            ) : (
              <div className="signinform__error">{resetPassError}</div>
            )}
          </div>
        )}
      />
    );
  } else {
    resetPassForm = (
      <Form
        onSubmit={(formObj: {
          phone: string;
          code: string;
          password: string;
        }) => {
          if (formObj.phone && formObj.code && formObj.password) {
            if (
              formObj.phone.trim() !== '' &&
              formObj.code.trim() !== '' &&
              formObj.password.trim() !== ''
            ) {
              dispatch(
                resetPassEndReqActionCreator({
                  phone: formObj.phone,
                  resetPassCode: formObj.code,
                  password: formObj.password,
                }),
              );
            } else {
              setError('Заполните поле ввода');
            }
          } else {
            setError('Заполните поле ввода');
          }
        }}
        render={({ handleSubmit }) => (
          <div className="resetpassform__form">
            <Field name="phone">
              {({ input }) => (
                <input
                  placeholder="Phone"
                  type="text"
                  defaultValue={phone}
                  className="resetpassform__input"
                  {...input}
                />
              )}
            </Field>
            <Field name="code">
              {({ input }) => (
                <input
                  placeholder="Code"
                  className="resetpassform__input"
                  type="password"
                  {...input}
                />
              )}
            </Field>
            <Field name="password">
              {({ input }) => (
                <input
                  placeholder="Password"
                  className="resetpassform__input"
                  type="password"
                  {...input}
                />
              )}
            </Field>
            <button className="resetpassform__button" onClick={handleSubmit}>
              Reset
            </button>
            {error == '' ? (
              <></>
            ) : (
              <div className="signinform__error">{error}</div>
            )}
            {resetPassError == '' ? (
              <></>
            ) : (
              <div className="signinform__error">{resetPassError}</div>
            )}
          </div>
        )}
      />
    );
  }
  return resetPassForm;
}

export default ResetPassForm;

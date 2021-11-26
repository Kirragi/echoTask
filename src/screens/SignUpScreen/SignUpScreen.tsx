import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeScreenRoute,
  ResetPassScreenRoute,
  SignInRoute,
  SignUpRoute,
} from '../../constants';
import SignUpForm from '../../components/SignUpForm';
import { useSelector } from 'react-redux';
import { State } from '../../types';

function SignUpScreen() {
  const authorized = useSelector((state: State) => state.user.authorized);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorized) {
      navigate(SignInRoute);
    }
  });
  return (
    <div className="signupscreen__wrapper">
      <div className="signupscreen__form-wrapper">
        <div className="signupscreen__header-wrapper">
          <h1 className="signupscreen__header">Registration</h1>
        </div>
        <SignUpForm />
        <div className="signupscreen__links">
          <div
            className="signupscreen__link"
            onClick={() => {
              navigate(SignInRoute);
            }}>
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpScreen;

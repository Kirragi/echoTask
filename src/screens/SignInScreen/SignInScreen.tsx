import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeScreenRoute,
  ResetPassScreenRoute,
  SignInRoute,
  SignUpRoute,
} from '../../constants';
import SignInForm from '../../components/SignInForm';
import { useSelector } from 'react-redux';
import { State } from '../../types';

function SignInScreen() {
  const navigate = useNavigate();
  const authorized = useSelector((state: State) => state.user.authorized);
  useEffect(() => {
    if (authorized) {
      navigate(HomeScreenRoute);
    }
  });
  return (
    <div className="signinscreen__wrapper">
      <div className="signinscreen__form-wrapper">
        <div className="signinscreen__header-wrapper">
          <h1 className="signinscreen__header">Authorization</h1>
        </div>
        <SignInForm />
        <div className="signinscreen__links">
          <div
            className="signinscreen__link"
            onClick={() => {
              navigate(SignUpRoute);
            }}>
            Sign Up
          </div>
          <div
            className="signinscreen__link"
            onClick={() => {
              navigate(ResetPassScreenRoute);
            }}>
            Forgot your password?
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;

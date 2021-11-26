import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeScreenRoute, SignInRoute } from '../../constants';
import ResetPassForm from '../../components/ResetPassForm';
import { useSelector } from 'react-redux';
import { State } from '../../types';

function ResetPassScreen() {
  const authorized = useSelector((state: State) => state.user.authorized);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorized) {
      navigate(HomeScreenRoute);
    }
  });
  return (
    <div className="resetsassscreen__wrapper">
      <div className="resetsassscreen__form-wrapper">
        <div className="resetsassscreen__header-wrapper">
          <h1 className="resetsassscreen__header">Reset Password</h1>
        </div>
        <ResetPassForm />
        <div className="resetsassscreen__links">
          <div
            className="resetsassscreen__link"
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

export default ResetPassScreen;

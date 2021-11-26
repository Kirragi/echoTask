import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  HomeScreenRoute,
  ResetPassScreenRoute,
  SignInRoute,
  SignUpRoute,
} from '../../constants';
import { State } from '../../types';

function HomeScreen() {
  const authorized = useSelector((state: State) => state.user.authorized);
  const firstName = useSelector((state: State) => state.user.firstName);
  const lastName = useSelector((state: State) => state.user.lastName);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigate(SignInRoute);
    }
  });

  return (
    <div>
      <h1>Добро пожаловать</h1>
      <div>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <button
        onClick={() => {
          navigate(SignInRoute);
        }}>
        Sign out
      </button>
    </div>
  );
}

export default HomeScreen;

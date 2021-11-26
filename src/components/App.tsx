import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import ResetPassScreen from '../screens/ResetPassScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PageNotFoundScreen from '../screens/PageNotFoundScreen';
import {
  HomeScreenRoute,
  ResetPassScreenRoute,
  SignInRoute,
  SignUpRoute,
} from '../constants';
import '../index.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={HomeScreenRoute} element={<HomeScreen />} />
        <Route path={ResetPassScreenRoute} element={<ResetPassScreen />} />
        <Route path={SignInRoute} element={<SignInScreen />} />
        <Route path={SignUpRoute} element={<SignUpScreen />} />
        <Route path="*" element={<PageNotFoundScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

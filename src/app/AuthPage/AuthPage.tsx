'use client'; 

import { useStore } from '@nanostores/react';
import { isAuthenticated } from '../store/store';
import LoginPage from '../components/Login/Login';
import Profile from '../components/Profile/Profile';




const AuthPage = () => {
  const auth = useStore(isAuthenticated);

 return (
    <>
    {auth ? <Profile/> : <LoginPage/>}
    </>
 )

};

export default AuthPage;

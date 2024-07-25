'use client';

import React from 'react';
import { useStore } from '@nanostores/react';
import { isAuthenticated, user, logout } from '../../store/store';

const Profile = () => {
  const auth = useStore(isAuthenticated);
  const currentUser = useStore(user);

  if (!auth) {
    return null;
  }

  return (
    <div>
      <h2>Профиль</h2>
      <p>Имя пользователя: {currentUser?.username}</p>
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default Profile;

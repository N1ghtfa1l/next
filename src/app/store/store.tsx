
import { atom } from 'nanostores';

const fakeUsers = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

export const isAuthenticated = atom(false);
export const user = atom<{ username: string } | null>(null);

export const login = (username: string, password: string) => {
  const validUser = fakeUsers.find(u => u.username === username && u.password === password);

  if (validUser) {
    isAuthenticated.set(true);
    user.set({ username });
  } else {
    alert('Ошибка в логине или пароле');
  }
};

export const logout = () => {
  isAuthenticated.set(false);
  user.set(null);
};

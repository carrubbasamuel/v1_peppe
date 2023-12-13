import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';

const userCookie = Cookies.get('user');

const initialState = {
  user: userCookie ? JSON.parse(userCookie) : null,
  coockieAccepted: Cookies.get('cookieAccepted') ? true : false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      Cookies.set('user', JSON.stringify(action.payload), { expires: 1 / 30 }); 
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove('user');
    },
    setCookieConsent: (state) => {
      state.coockieAccepted = true;
      Cookies.set('cookieAccepted', true, { expires: 1 }); 
    },
  },
});

export const { login, logout, setCookieConsent } = userSlice.actions;
export default userSlice.reducer;


import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';

const userCookie = Cookies.get('user');

const initialState = {
    user: userCookie ? JSON.parse(userCookie) : null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Metodo login
    login: (state, action) => {
      state.user = action.payload;

      // Salva le informazioni dell'utente nei cookie
      Cookies.set('user', JSON.stringify(action.payload));
    },

    // Metodo logout
    logout: (state) => {
      state.user = null;

      // Rimuovi le informazioni dell'utente dai cookie
      Cookies.remove('user');
    },
    
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

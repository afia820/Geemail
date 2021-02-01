import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../redux/mailSlice';
import userReducer from '../redux/userSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});

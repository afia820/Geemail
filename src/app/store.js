import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../redux/mailSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
});

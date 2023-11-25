import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './redux/transactionsSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer
  }
})

export default store;

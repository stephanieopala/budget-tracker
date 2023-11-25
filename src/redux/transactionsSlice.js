import { createSlice } from "@reduxjs/toolkit";

const localData = localStorage.getItem('transactions');

const initialState = {
  transactions: localData ? JSON.parse(localData) : []
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload)
      localStorage.setItem('transactions', JSON.stringify(state.transactions));
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter((transaction) => transaction.id !== action.payload);
      localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }
  }
})

export const {addTransaction, deleteTransaction} = transactionsSlice.actions;

export default transactionsSlice.reducer;
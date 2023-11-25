import { useState } from "react";
import styles from './Form.module.css';
import { useDispatch } from "react-redux";
import { addTransaction } from "../../redux/transactionsSlice";

const Form = () => {
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('Expense');
  const [amountError, setAmountError] = useState(null);

  const dispatch = useDispatch();
  const numberRegex = /^\d+$/;

  const handleAmount = (e) => {
    setAmount(e.target.value);
    if (numberRegex.test(e.target.value)) {
      setAmountError(null);
    } else {
      setAmountError('Amount must be a number');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberRegex.test(amount)) {
      setAmountError(null);
      const newTransaction = {
        id: Date.now(),
        name: transactionName,
        amount: transactionType.toLowerCase() === 'Expense'.toLowerCase() ? amount * -1 : Number(amount),
        type: transactionType
      };
      dispatch(addTransaction(newTransaction));
      setTransactionName('');
      setAmount(0);
      setTransactionType('Expense');
    } else {
      setAmountError('Amount must be a number');
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formcontrol}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={transactionName} onChange={(e) => setTransactionName(e.target.value)} required />
      </div>
      <div className={styles.formcontrol}>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" value={amount} onChange={handleAmount} required />
      </div>
      {amountError && <div className={styles.error}>{amountError}</div>}
      <div className={styles.formcontrol}>
        <label htmlFor="type">Type</label>
        <select id="type" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  )
}

export default Form
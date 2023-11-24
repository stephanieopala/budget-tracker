import { useState } from "react";

const Form = () => {
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('Expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transactionName, amount, transactionType);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Transaction Name</label>
        <input type="text" id="name" value={transactionName} onChange={(e) => setTransactionName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <select id="type" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>
      <button>Add</button>
    </form>
  )
}

export default Form

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expenses = [
    {title:"Car insurance",price:300,date:new Date(24,3,1998)},
    {title:"Car insurance",price:300,date:new Date(24,3,1998)},
    {title:"Car insurance",price:300,date:new Date(24,3,1998)},
    {title:"Car insurance",price:300,date:new Date(24,3,1998)},
  ];


  const addExpenseHandler = (expense) =>{
    console.log("In app .js");
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      
      <Expenses data={expenses}/>
    </div>
      
  );
}

export default App;

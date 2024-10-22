import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcomepage from "./pages/Welcomepage";
import LoadingScreen from "./component/LoadingScreen";
import Signup from "./pages/Signup";
import { PostProviders, useProvider } from "./component/PostProviders"; 
import { useEffect } from "react";
import OverallTransactions from './component/OverallTransactions'
import Dashboard from "./pages/Dashboard";
import IncomeTransactions from "./component/IncomeTransactions";
import ExpenseTransactions from "./component/ExpenseTransactions";

function ProviderChild() {
  const { dispatch, welcomeScreen } = useProvider();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'WELCOMEPAGE', payload: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <BrowserRouter>
      {!welcomeScreen ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate replace to='overall'/>} />
          <Route path='overall' element={<OverallTransactions />} />
          <Route path='income' element={<IncomeTransactions />} />
          <Route path='expense' element={<ExpenseTransactions />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

function App() {
  return (
    <PostProviders>
      <ProviderChild />
    </PostProviders>
  );
}

export default App;

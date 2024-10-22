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
  const { dispatch, welcomeScreen, isRegistered } = useProvider();

  // Simulate the loading screen for 3 seconds, then show welcomeScreen
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'WELCOMEPAGE', payload: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  // Check localStorage for the userId and set isRegistered accordingly
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      dispatch({ type: 'REGISTEREDUSER', payload: true });
    } else {
      dispatch({ type: 'REGISTEREDUSER', payload: false });
      alert('No user found')
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      {!welcomeScreen ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route
            index
            path="/"
            element={isRegistered ? <Navigate to="/dashboard" /> : <Navigate to="/welcomepage" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcomepage" element={<Welcomepage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate replace to="overall" />} />
            <Route path="overall" element={<OverallTransactions />} />
            <Route path="income" element={<IncomeTransactions />} />
            <Route path="expense" element={<ExpenseTransactions />} />
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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcomepage from "./pages/Welcomepage";
import LoadingScreen from "./component/LoadingScreen";
import Signup from "./pages/Signup";
import { PostProviders, useProvider } from "./component/PostProviders"; // Import the provider
import { useEffect } from "react";

function ProviderChild() {
  const { dispatch, welcomeScreen } = useProvider(); // Now inside the component that PostProviders wraps

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

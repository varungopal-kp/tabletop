import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "react-notifications/lib/notifications.css";
import { PrivateRoute } from "./hoc/PrivateRoute";
import { NotificationContainer } from "react-notifications";
import AuthPage from "./containers/AuthPage";
import HomePage from "./containers/HomePage";



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/"
          name="Home"
          element={<PrivateRoute Component={HomePage} />}
        />
      
        
      </Routes>
      <NotificationContainer />
    </Router>
  );
}

export default App;

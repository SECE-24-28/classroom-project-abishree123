import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img 
          src="https://tse4.mm.bing.net/th/id/OIP.VQTyZLbjkVGEWKihzEHcZQHaE8?pid=Api&P=0&h=180" 
          alt="logo"
        />

        <div className="links">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/managehabits">Managehabits</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/progress">Progress</NavLink>
          <NavLink to="/reminder">Reminder</NavLink>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default App;

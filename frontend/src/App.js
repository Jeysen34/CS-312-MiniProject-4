import React from "react";
import Header from "./components/header";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Footer from "./components/footer";
import Home from "./components/home";
import "./styles.css";

// main component
function App() {
  // switch case to render different components
  let Component;
  switch (window.location.pathname) {
    case "/UserLogin":
      Component = UserLogin;
      break;
    case "/UserRegister":
      Component = UserRegister;
      break;
    default:
      Component = Home;
      break;
  }
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
}
export default App;

// source; https://www.youtube.com/watch?v=SLfhMt5OUPI

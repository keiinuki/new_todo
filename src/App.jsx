import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";


export default function App ({ Component }) {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    );
};

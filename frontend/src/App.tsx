import { Routes, Route } from "react-router-dom";
import './App.css'
import Register from "./assets/CreateAccount.tsx";
import Login from "./assets/Login.tsx";
import Kurse from "./assets/kurse.tsx";

function App() {

  return (
    <>

        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/kurse" element={<Kurse />}/>
        </Routes>

    </>
  )
}

export default App

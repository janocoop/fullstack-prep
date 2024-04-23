import { Routes, Route } from "react-router-dom";
import './App.css'
import Register from "./assets/CreateAccount.tsx";
import Login from "./assets/Login.tsx";

function App() {

  return (
    <>

        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>

    </>
  )
}

export default App

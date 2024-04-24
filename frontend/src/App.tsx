import { Routes, Route } from "react-router-dom";
import './App.css'
import RegisterView from "./pages/registerView.tsx";
import LoginView from "./pages/loginView.tsx";
import CourseCreateView from "./pages/courseCreateView.tsx";
import CourseView from "./pages/courseView.tsx";

function App() {

  return (
        <Routes>
            <Route path="/" element={<RegisterView />}/>
            <Route path="/login" element={<LoginView />}/>
            <Route path="/kurse" element={<CourseView />}/>
            <Route path="/kurse/erstellen" element={<CourseCreateView />}/>
        </Routes>
  )
}

export default App

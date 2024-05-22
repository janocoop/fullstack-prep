import { Routes, Route } from "react-router-dom";
import './App.css'
import RegisterView from "./pages/registerView.tsx";
import LoginView from "./pages/loginView.tsx";
import CourseCreateView from "./pages/courseCreateView.tsx";
import CourseView from "./pages/courseView.tsx";
import CourseDayView from "./pages/courseDayView.tsx";
import CourseDetailView from "./pages/courseDetailView.tsx";
import CoursePartView from "./pages/coursePartView.tsx";
import CourseTaskView from "./pages/courseTaskView.tsx";
import CourseThemeCreate from "./pages/courseThemeCreate.tsx";
import CourseAufgabenLektionen from "./components/courseAufgabenLektionen.tsx";
import CourseTaskCreateView from "./pages/courseTaskCreateView.tsx";
import CourseLektionCreateView from "./pages/courseLektionCreateView.tsx";


function App() {

  return (
        <Routes>
            <Route path="/" element={<RegisterView />}/>
            <Route path="/login" element={<LoginView />}/>
            <Route path="/kurse" element={<CourseView />}/>
            <Route path="/kurse/erstellen" element={<CourseCreateView />}/>
            <Route path="/kurse/:kursid" element={<CourseDetailView />}/>
            <Route path="/kurse/:kursid/days/:dayid" element={<CourseDayView />}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/erstellen" element={<CourseThemeCreate/>}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/:themeid" element={<CourseAufgabenLektionen/>}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/:themeid/task/create" element={<CourseTaskCreateView/>}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/:themeid/lektion/create" element={<CourseLektionCreateView/>}/>
            <Route path="/kurse/:kursid/days/:dayid/parts/:partid" element={<CoursePartView />}/>
            <Route path="/kurse/:kursid/days/:dayid/parts/:partid/tasks/:taskid" element={<CourseTaskView />}/>
        </Routes>
  )

}

export default App

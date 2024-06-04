import {Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import RegisterView from "./pages/registerView.tsx";
import LoginView from "./pages/loginView.tsx";
import CourseCreateView from "./pages/courseCreateView.tsx";
import CourseView from "./pages/courseView.tsx";
import CourseDayView from "./pages/courseDayView.tsx";
import CoursePartView from "./pages/coursePartView.tsx";
import CourseTaskView from "./pages/courseTaskView.tsx";
import CourseThemeCreate from "./pages/courseThemeCreate.tsx";
import CourseAufgabenLektionen from "./components/courseAufgabenLektionen.tsx";
import CourseLektionCreatePage from "./pages/courseLektionCreatePage.tsx";
import CourseTaskCreatePage from "./pages/coursetaskCreatePage.tsx";
import CourseDetailPage from "./pages/courseDetailPage.tsx";


function App() {

  return (
        <Routes>
            <Route path="/" element={<Navigate to={"/login"}/>}></Route>
            <Route path="/register" element={<RegisterView />}/>
            <Route path="/login" element={<LoginView />}/>
            <Route path="/kurse" element={<CourseView />}/>
            <Route path="/kurse/erstellen" element={<CourseCreateView />}/>
            <Route path="/kurse/:kursid" element={<CourseDetailPage />}/>
            <Route path="/kurse/:kursid/days/:dayid" element={<CourseDayView />}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/erstellen" element={<CourseThemeCreate/>}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/:themeid" element={<CourseAufgabenLektionen/>}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/:themeid/task/create" element={<CourseTaskCreatePage/>}/>
            <Route path="/kurse/:kursid/days/:dayid/themen/:themeid/lektion/create" element={<CourseLektionCreatePage/>}/>
            <Route path="/kurse/:kursid/days/:dayid/parts/:partid" element={<CoursePartView />}/>
            <Route path="/kurse/:kursid/days/:dayid/parts/:partid/tasks/:taskid" element={<CourseTaskView />}/>
        </Routes>
  )

}

export default App

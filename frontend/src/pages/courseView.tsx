import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseList from "../components/courseList.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function CourseView() {


    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('/api/kurse')
            .then(response => {
                console.log('Erfolgreich gesendet:', response.data);
                setCourses(response.data);
            })
            .catch(error => {
                console.error('Fehler beim Senden:', error);
            })

    },[])
    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseList data={courses}/>}/>
            <FooterSection/>
        </>
    )
}
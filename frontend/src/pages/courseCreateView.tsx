import {useState} from "react";
import axios from "axios";
import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import LoginForm from "../components/loginForm.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseCreateForm from "../components/courseCreateForm.tsx";

export default function CourseCreateView() {

    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseCreateForm/>}/>
            <FooterSection/>
        </>
    );
}
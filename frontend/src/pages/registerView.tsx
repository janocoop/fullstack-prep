
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import LoginForm from "../components/loginForm.tsx";
import FooterSection from "../sections/footerSection.tsx";
import RegisterForm from "../components/registerForm.tsx";

export default function RegisterView() {


    return (
        <>
            <HeaderSection />
            <ContentSection content={<RegisterForm />}/>
            <FooterSection />
        </>
    );
}

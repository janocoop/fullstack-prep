import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseDayDetailView from "./courseDayDetailView.tsx";
import {useEffect} from "react";
import axios from "axios";

export default function CourseDayView() {
    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseDayDetailView/>}/>
            <FooterSection/>
        </>
    );
}
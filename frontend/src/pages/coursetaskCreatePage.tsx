import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import CourseLektionCreateView from "./courseLektionCreateView.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseTaskCreateView from "./courseTaskCreateView.tsx";

export default function CourseTaskCreatePage() {
    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseTaskCreateView/>}/>
            <FooterSection/>
        </>
    );
}
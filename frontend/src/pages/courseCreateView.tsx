import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
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
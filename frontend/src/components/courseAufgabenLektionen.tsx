import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseThemeCreateForm from "./courseThemeCreateForm.tsx";
import CourseAufgabenLektionenPage from "../pages/courseAufgabenLektionenPage.tsx";



export default function CourseAufgabenLektionen() {

    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseAufgabenLektionenPage/>}/>
            <FooterSection/>
        </>
    );

}
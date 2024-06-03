import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseThemeCreateForm from "../components/courseThemeCreateForm.tsx";


export default function CourseThemeCreate() {

    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseThemeCreateForm/>}/>
            <FooterSection/>
        </>
    );

}
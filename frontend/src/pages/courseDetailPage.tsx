import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseDetailView from "./courseDetailView.tsx";

export default function CourseDetailPage() {
    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseDetailView/>}/>
            <FooterSection/>
        </>
    );
}
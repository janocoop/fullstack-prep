import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import FooterSection from "../sections/footerSection.tsx";
import CourseLektionCreateView from "./courseLektionCreateView.tsx";

export default function CourseLektionCreatePage() {
    return (
        <>
            <HeaderSection/>
            <ContentSection content={<CourseLektionCreateView/>}/>
            <FooterSection/>
        </>
    );
}
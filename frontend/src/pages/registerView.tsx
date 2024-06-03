
import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
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

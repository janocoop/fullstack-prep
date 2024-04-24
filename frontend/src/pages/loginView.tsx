import HeaderSection from "../sections/headerSection.tsx";
import ContentSection from "../sections/contentSection.tsx";
import FooterSection from "../sections/footerSection.tsx";
import LoginForm from "../components/loginForm.tsx";

export default function LoginView() {
    return (
        <>
            <HeaderSection />
            <ContentSection content={<LoginForm />}/>
            <FooterSection />
        </>
    );
}

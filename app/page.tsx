import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Projects from "@/components/Projects";
import WorkList from "@/components/WorkList";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
    return (
        <>
            <IntroLoader />
        <Container>
            <Hero />
            <Values />
        </Container>
            <Projects />
        <Container>
            <WorkList />
            <Testimonials />
            <Footer />
        </Container>
        </>
    );
}

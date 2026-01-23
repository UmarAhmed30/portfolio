import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Background from "@/components/Background";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
    return (
        <>
            <IntroLoader />
        <Container>
            <Hero />
            <Values />
            <Background />
            <Education />
            <Experience />
        </Container>
            <Projects />
        <Container>
            <Footer />
        </Container>
        </>
    );
}

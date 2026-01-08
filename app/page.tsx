import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import WorkList from "@/components/WorkList";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
    return (
        <>
            <IntroLoader />
        <Container>
            <Hero />
            <Values />
            <WorkList />
            <Testimonials />
                <About />
            <Footer />
        </Container>
        </>
    );
}

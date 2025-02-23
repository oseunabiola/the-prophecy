import { About } from "../components/home/about";
import { Benefit } from "../components/home/benefit";
import { Discover } from "../components/home/Discover";
import { Hero } from "../components/home/hero";
import { Header } from "../components/home/nav";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Benefit />
                <About />
                <Discover />
            </main>
        </>
    );
};

export { Home };

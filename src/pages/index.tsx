import { About } from "../components/home/about";
import { Benefit } from "../components/home/benefit";
import { CommunityInvitation } from "../components/home/community-invitation";
import { Discover } from "../components/home/Discover";
import { Hero } from "../components/home/hero";
import TheAuthor from "../components/home/the-author";
import Footer from "../components/shared/footer";
import { Header } from "../components/shared/nav";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Benefit />
                <About />
                <Discover />
                <TheAuthor />
                <CommunityInvitation />
                <Footer />
            </main>
        </>
    );
};

export { Home };

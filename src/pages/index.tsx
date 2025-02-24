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
        <div className="grid-rows-[auto_1fr_auto] pt-14">
            <Header />
            <main>
                <Hero />
                <Benefit />
                <About />
                <Discover />
                <TheAuthor />
                <CommunityInvitation />
            </main>
            <Footer />
        </div>
    );
};

export { Home };

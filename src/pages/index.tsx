import { Benefit } from "../components/home/benefit";
import { CommunityInvitation } from "../components/home/community-invitation";
import { CTA } from "../components/home/cta";
import { Discover } from "../components/home/Discover";
import { Hero } from "../components/home/hero";
import { TheAuthor } from "../components/home/the-author";
import { TheBook } from "../components/home/the-book";
import { WaitList } from "../components/home/wait-list";
import { Footer } from "../components/shared/footer";
import { Header } from "../components/shared/nav";

const Home = () => {
    return (
        <div className="grid-rows-[auto_1fr_auto] pt-7 xl:pt-14">
            <Header />
            <main>
                <Hero />
                <Benefit />
                <TheBook />
                <Discover />
                <TheAuthor />
                <CTA />
                <WaitList />
                <CommunityInvitation />
            </main>
            <Footer />
        </div>
    );
};

export { Home };

import { Benefit } from "../components/page-sections/home/benefit";
import { CommunityInvitation } from "../components/page-sections/home/community-invitation";
import { CTA } from "../components/page-sections/home/cta";
import { Discover } from "../components/page-sections/home/Discover";
import { Hero } from "../components/page-sections/home/hero";
import { TheAuthor } from "../components/page-sections/home/the-author";
import { TheBook } from "../components/page-sections/home/the-book";
import { WaitList } from "../components/page-sections/home/wait-list";

const Home = () => {
    return (
        <>
            <Hero />
            <Benefit />
            <TheBook />
            <Discover />
            <TheAuthor />
            <CTA />
            <WaitList />
            <CommunityInvitation />
        </>
    );
};

export { Home };

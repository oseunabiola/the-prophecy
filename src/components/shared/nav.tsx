import { Link } from "react-router-dom";
import { LinkButton } from "../ui/link-button";
import { PageContainer } from "./page-container";

const Header = () => {
    return (
        <header>
            <PageContainer>
                <div className="flex items-center justify-between bg-primary px-4 py-6 shadow-400 xl:px-5 xl:py-8">
                    <Link to="/" className="text-xl font-semibold">
                        That all may Prophesy
                    </Link>
                    <nav className="hidden xl:block">
                        <ul className="flex gap-x-6">
                            <li>
                                <Link to="/">The Book</Link>
                            </li>
                            <li>
                                <Link to="/">Enroll for Mentorship</Link>
                            </li>
                            <li>
                                <Link to="/">Join Community</Link>
                            </li>
                            <li>
                                <Link to="/">The Author</Link>
                            </li>
                            <div className="cta |">
                                <LinkButton to="/" className="px-8 py-4 text-alt" variant="primary">
                                    Order Now
                                </LinkButton>
                            </div>
                        </ul>
                    </nav>
                    <button role="menu" className="xl:hidden">
                        Menu
                    </button>
                </div>
            </PageContainer>
        </header>
    );
};

export { Header };

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, LinkButton } from "../ui/link-button";
import { PageContainer } from "./page-container";

const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const navNode = useRef<HTMLElement>(null);
    const linkListNode = useRef<HTMLUListElement>(null);

    const toggleNavView = () => {
        if (navIsOpen) {
            navNode.current?.classList.add("hidden");
            navNode.current?.classList.remove("absolute");
            linkListNode.current?.classList.remove("flex-col");
            linkListNode.current?.classList.remove("py-8");
            linkListNode.current?.classList.remove("pb-12");
            linkListNode.current?.classList.remove("text-center");
            setNavIsOpen(false);
        } else {
            navNode.current?.classList.remove("hidden");
            navNode.current?.classList.add("absolute");
            linkListNode.current?.classList.add("flex-col");
            linkListNode.current?.classList.add("py-8");
            linkListNode.current?.classList.add("pb-12");
            linkListNode.current?.classList.add("text-center");
            setNavIsOpen(true);
        }
    };

    return (
        <header>
            <PageContainer>
                <div className="relative flex items-center justify-between bg-primary px-4 py-6 shadow-400 xl:px-5 xl:py-8">
                    <Link to="/" className="text-xl font-semibold">
                        That all may Prophesy
                    </Link>
                    <nav className="inset-0 top-full hidden xl:block" ref={navNode}>
                        <ul
                            className="flex gap-6 bg-primary"
                            ref={linkListNode}
                            onClick={(e) => {
                                e.stopPropagation();
                                // console.log(e.target);
                            }}
                        >
                            <li>
                                <a href="#the-book">The Book</a>
                            </li>
                            <li>
                                <a href="#enrol">Enroll for Mentorship</a>
                            </li>
                            <li>
                                <a href="#join-community">Join Community</a>
                            </li>
                            <li>
                                <a href="#author">The Author</a>
                            </li>
                            <div className="cta |">
                                <LinkButton to="/" className="px-8 py-4 text-alt" variant="primary">
                                    Order Now
                                </LinkButton>
                            </div>
                        </ul>
                    </nav>
                    <Button onClick={toggleNavView} variant="outline-primary" role="menu" className="cursor-pointer px-6 py-2 xl:hidden">
                        Menu
                    </Button>
                </div>
            </PageContainer>
        </header>
    );
};

export { Header };

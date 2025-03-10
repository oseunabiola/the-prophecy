import { LinkButton } from "../ui/link-button";
import { PageContainer } from "./page-container";

const Footer = () => {
    return (
        <footer className="bg-radial-[50%_50%_at_50%_50%] from-[#010836] to-[#01020F] text-center text-body-bg">
            <PageContainer>
                <div className="grid gap-y-8 py-28">
                    <h2 className="text-[40px] xl:leading-[57px]">Are You Ready to Step Into Your Prophetic Destiny?</h2>
                    <p className="font-recoleta text-2xl xl:text-[28px] xl:leading-9">Order Now & Be Among the First to Receive Your Copy!</p>
                    <div className="grid md:mx-auto md:w-6/12 xl:w-max">
                        <LinkButton to="/order" variant="accent" className="px-8 py-3.5 text-[#1E1E1E]">
                            Order Now
                        </LinkButton>
                    </div>
                </div>
            </PageContainer>
        </footer>
    );
};

export { Footer };

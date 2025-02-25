import bookCoverIllustration from "../../assets/illustrations/book-cover-white-bg.png";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const CTA = () => {
    return (
        <div className="bg-radial-[50%_50%_at_50%_50%] from-[#010836] to-[#01020F] py-[86px] text-alt-2">
            <PageContainer>
                <div className="mx-auto grid items-start lg:w-11/12 lg:grid-cols-12">
                    <div className="order-now | order-1 col-span-6 grid gap-y-6 text-center text-lg lg:order-0">
                        <h2 className="font-glastone text-[40px]">Order Now and Get your Exclusive Copy</h2>
                        <div>
                            <p>
                                Limited-Time Offer! Secure your copy today before the price goes up! Paperback (Soft Cover): Launch copies available
                                during Church Conference
                            </p>
                            <p>E-Book: Coming soon</p>
                            <p>Get Both: Best Value!</p>
                        </div>
                        <div className="grid lg:w-max">
                            <LinkButton to="/" className="px-8 py-4 text-black" variant="accent">
                                Order Now
                            </LinkButton>
                        </div>
                    </div>
                    <div className="illustration | col-span-6 justify-self-end">
                        <div className="ms-auto lg:w-11/12">
                            <img src={bookCoverIllustration} alt="That all may Prophecy book cover" />
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export { CTA };

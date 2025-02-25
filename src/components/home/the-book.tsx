import AboutIllustration from "../../assets/illustrations/landing-about-illustration.png";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const TheBook = () => {
    return (
        <div id="the-book" className="py-32 xl:py-[121px]">
            <PageContainer>
                <div className="grid gap-y-8 xl:grid-cols-12">
                    <div className="illustration | mx-auto w-9/12 xl:col-span-6 xl:mx-0 xl:me-[71px]">
                        <img src={AboutIllustration} alt="That all may Prophecy front cover" />
                    </div>
                    <div className="about | text-[18px] xl:col-span-6">
                        <h2 className="mb-4 text-center font-glastone text-[40px] xl:mb-6 xl:text-left xl:xl:leading-[78px]">About the Book</h2>
                        <div className="grid gap-y-6 text-justify">
                            <p>
                                Prophecy is for everyone, not just a select few! In That All May Prophesy, Prophet Gbenga Shafe reveals that every
                                believer can hear, discern, and declare the voice of God with boldness and accuracy.
                            </p>
                            <p>
                                Drawing from Scripture and nearly two decades of experience in the office of the prophet, he provides deep insights
                                and practical steps to help you cultivate a prophetic lifestyle. Whether you're new to the prophetic or seeking to
                                sharpen your gift, this book will equip you with the knowledge and confidence to step into the prophetic dimension.
                            </p>
                            <div className="grid xl:w-max">
                                <LinkButton to="/" variant="primary" className="!px-8 !py-3.5">
                                    Order Now
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export { TheBook };

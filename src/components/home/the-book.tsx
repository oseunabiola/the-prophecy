import AboutIllustration from "../../assets/illustrations/landing-about-illustration.png";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const TheBook = () => {
    return (
        <PageContainer>
            <div className="grid py-[121px] lg:grid-cols-12">
                <div className="illustration | col-span-6 me-[71px]">
                    <img src={AboutIllustration} alt="That all may Prophecy front cover" />
                </div>
                <div className="about | col-span-6 text-[18px]">
                    <h2 className="mb-6 text-[40px] leading-[78px]">About the Book</h2>
                    <div className="grid gap-y-6 text-justify">
                        <p>
                            Prophecy is for everyone, not just a select few! In That All May Prophesy, Prophet Gbenga Shafe reveals that every
                            believer can hear, discern, and declare the voice of God with boldness and accuracy.
                        </p>
                        <p>
                            Drawing from Scripture and nearly two decades of experience in the office of the prophet, he provides deep insights and
                            practical steps to help you cultivate a prophetic lifestyle. Whether you're new to the prophetic or seeking to sharpen
                            your gift, this book will equip you with the knowledge and confidence to step into the prophetic dimension.
                        </p>
                        <div className="grid lg:w-max">
                            <LinkButton to="/" variant="primary" className="!px-8 !py-3.5">
                                Order Now
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export { TheBook };

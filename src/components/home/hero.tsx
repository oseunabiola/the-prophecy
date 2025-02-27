import heroIllustration from "../../assets/illustrations/hero-illustration.png";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const Hero = () => {
    return (
        <PageContainer>
            <div className="grid gap-y-12 py-32 xl:grid-cols-12 xl:py-40">
                <div className="headline-section | order-1 mx-auto grid gap-y-8 text-center md:w-9/12 xl:order-0 xl:col-span-7 xl:w-full xl:text-left">
                    <h1 className="headline | font-glastone text-4xl xl:w-[38ch] xl:text-[70px] xl:xl:leading-[74px]">
                        Unlock the <span className="italic">Prophetic</span>. Hear God Clearly. Fulfil Your Divine Destiny.
                    </h1>
                    <p className="text-xl xl:w-[36ch] xl:leading-8">
                        A Life-Changing Book by Prophet Gbenga Shafe, Senior Pastor, Harvest Word Assembly, Nigeria
                    </p>
                    {/* <div className="mx-auto grid w-10/12 xl:w-max xl:grid-flow-col xl:justify-items-start "> */}
                    <div className="grid gap-y-4 md:grid-flow-col md:gap-x-6 xl:w-max">
                        <LinkButton to="/" variant="primary" className="px-8 py-3.5">
                            Order Now
                        </LinkButton>
                        <LinkButton to="/" variant="outline-primary" className="px-8 py-3.5">
                            Learn More
                        </LinkButton>
                    </div>
                </div>
                <div className="illustration | mx-auto w-9/12 md:w-7/12 xl:col-span-5 xl:w-full">
                    <img src={heroIllustration} alt="That all may Prophecy book cover" />
                </div>
            </div>
        </PageContainer>
    );
};

export { Hero };

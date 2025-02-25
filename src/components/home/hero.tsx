import heroIllustration from "../../assets/illustrations/hero-illustration.png";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const Hero = () => {
    return (
        <PageContainer>
            <div className="flex flex-col py-40">
                <div className="headline-section | order-1 grid gap-y-8 xl:w-7/12">
                    <h1 className="headline | font-glastone leading-[74px] xl:w-[38ch] xl:text-[70px]">
                        Unlock the <span className="italic">Prophetic</span>. Hear God Clearly. Fulfil Your Divine Destiny.
                    </h1>
                    <p className="text-xl leading-8 lg:w-[36ch]">
                        A Life-Changing Book by Prophet Gbenga Shafe, Senior Pastor, Harvest Word Assembly, Nigeria
                    </p>
                    <div className="grid w-max grid-flow-col justify-items-start xl:gap-6">
                        <LinkButton to="/" variant="primary" className="px-8 py-3.5">
                            Order Now
                        </LinkButton>
                        <LinkButton to="/" variant="outline-primary" className="px-8 py-3.5">
                            Learn More
                        </LinkButton>
                    </div>
                </div>
                <div className="illustration |">
                    <img src={heroIllustration} alt="That all may Prophecy book cover" />
                </div>
            </div>
        </PageContainer>
    );
};

export { Hero };

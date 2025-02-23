import heroIllustration from "../../assets/illustrations/herro-illustration.png";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const Hero = () => {
    return (
        <PageContainer>
            <div className="flex py-40">
                <div className="headline-section | grid gap-y-8 xl:w-7/12">
                    <p className="headline | font-glastone leading-[74px] xl:w-[38ch] xl:text-[70px]">
                        Unlock the <span className="italic">Prophetic</span>. Hear God Clearly. Fulfil Your Divine Destiny.
                    </p>
                    <p className="w-[36ch] text-xl leading-8">
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

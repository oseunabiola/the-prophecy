import heroIllustration from "../../../assets/illustrations/hero-order-illustration.png";
import { PageContainer } from "../../shared/page-container";

const Hero = () => {
    return (
        <PageContainer>
            <div className="grid items-center gap-y-12 py-20 xl:grid-cols-12">
                <div className="headline-section | order-1 mx-auto grid gap-y-8 text-center md:w-9/12 xl:order-0 xl:col-span-7 xl:w-full xl:text-left">
                    <h1 className="headline | font-glastone text-4xl xl:w-[38ch] xl:text-[70px] xl:xl:leading-[74px]">
                        Get<span className="italic">“That All May Prophesy”</span> today and unlock the prophetic within you!
                    </h1>
                </div>
                <div className="illustration | mx-auto w-9/12 md:w-7/12 xl:col-span-5 xl:w-full">
                    <img src={heroIllustration} alt="That all may Prophecy book cover" />
                </div>
            </div>
        </PageContainer>
    );
};

export { Hero };

import { LuCircleCheckBig } from "react-icons/lu";
import { PageContainer } from "../../shared/page-container";
import { LinkButton } from "../../ui/link-button";

const Discover = () => {
    return (
        <div className="mx-auto bg-primary py-32 xl:py-36">
            <PageContainer>
                <div className="mx-auto grid gap-y-8 xl:w-[97%] xl:grid-cols-12">
                    <div className="mx-auto w-11/12 md:w-8/12 xl:col-span-5 xl:mx-0 xl:w-10/12">
                        <h2 className="mb-6 text-center font-glastone text-[40px] xl:text-left xl:text-5xl xl:leading-[70px]">
                            What You'll Discover in This Book:
                        </h2>
                        <div className="grid md:mx-auto md:w-8/12 xl:mx-0 xl:w-max">
                            <LinkButton to="/order" variant="primary" className="px-8 py-3.5">
                                Order Now
                            </LinkButton>
                        </div>
                    </div>
                    <ul className="mx-auto grid items-center gap-y-12 rounded-[8px] bg-body-bg px-6 py-20 text-xl xl:col-span-7 xl:mx-0 xl:ms-auto xl:w-11/12 xl:px-11">
                        <li className="flex items-center gap-x-4">
                            <LuCircleCheckBig className="text-accent" /> How to activate and develop your prophetic gift
                        </li>
                        <li className="flex items-center gap-x-4">
                            <LuCircleCheckBig className="text-accent" /> Keys to discerning God's voice in everyday life
                        </li>
                        <li className="flex items-center gap-x-4">
                            <LuCircleCheckBig className="text-accent" /> Common pitfalls in the prophetic and how to avoid them
                        </li>
                        <li className="flex items-center gap-x-4">
                            <LuCircleCheckBig className="text-accent" /> The role of prophecy in building faith and spiritual intimacy
                        </li>
                        <li className="flex items-center gap-x-4">
                            <LuCircleCheckBig className="text-accent" /> How to use prophecy for edification, encouragement, and transformation
                        </li>
                    </ul>
                </div>
            </PageContainer>
        </div>
    );
};

export { Discover };

import { LuCircleCheckBig } from "react-icons/lu";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const CommunityInvitation = () => {
    return (
        <div id="join-community" className="mx-auto bg-primary py-32 xl:py-36">
            <PageContainer>
                <div className="grid items-start justify-between gap-y-8 xl:grid-cols-12">
                    <div className="col-span-5 mx-auto grid gap-y-6 text-center xl:w-11/12 xl:text-left">
                        <h2 className="text-[40px] xl:text-5xl xl:leading-[70px]">Invitation to the Prophetic Company</h2>
                        <p className="w-[27ch] text-xl">Join now and grow in the prophetic with a supportive community!</p>
                        <div className="grid xl:w-max">
                            <LinkButton to="/" variant="primary" className="px-8 py-3.5">
                                Join Now
                            </LinkButton>
                        </div>
                    </div>
                    <ul className="list-image col-span-12 mx-auto grid items-center gap-y-10 rounded-[8px] bg-body-bg px-6 py-14 text-justify text-xl xl:col-span-7 xl:w-10/12 xl:gap-y-12 xl:px-11 xl:py-20">
                        <li className="flex gap-x-4 font-medium">
                            <LuCircleCheckBig className="text-accent" />
                            <div className="w-full">
                                <p className="font-medium">A Community for Those Hungry for the Prophetic!</p>
                                <p>
                                    Become a part of The Prophetic Company, a network of believers committed to growing in the prophetic, sharpening
                                    their gifts, and engaging in divine encounters.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-x-4 font-medium">
                            <LuCircleCheckBig className="text-accent" /> Exclusive Access to prophetic teachings and resources
                        </li>
                        <li className="flex items-center gap-x-4 font-medium">
                            <LuCircleCheckBig className="text-accent" /> Live Q&A Sessions with Prophet Gbenga Shafe
                        </li>
                        <li className="flex items-center gap-x-4 font-medium">
                            <LuCircleCheckBig className="text-accent" /> Prophetic Networking & Fellowship with like-minded believers
                        </li>
                        <li className="flex items-center gap-x-4 font-medium">
                            <LuCircleCheckBig className="text-accent" /> A Community of Prophetic Believers to sharpen your gift
                        </li>
                    </ul>
                </div>
            </PageContainer>
        </div>
    );
};

export { CommunityInvitation };

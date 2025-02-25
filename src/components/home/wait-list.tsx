import { ReactNode } from "react";
import DreamImage from "../../assets/images/dream-track.jpeg";
import PropheticOfficeImage from "../../assets/images/prophetic-office.jpeg";
import seekerImage from "../../assets/images/seekers.png";
import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const WaitList = () => {
    return (
        <div id="enrol" className="bg-radial-[50%_50%_at_50%_50%] from-[#010836] to-[#01020F] py-[102px] text-alt-2">
            <PageContainer>
                <div className="grid gap-y-[88px]">
                    <div className="mx-auto grid w-11/12 gap-y-8 text-center text-[28px]">
                        <h2 className="font-glastone text-[40px]">
                            Join the Waitlist for my <span className="italic">Prophetic Training and Mentorship Program</span>
                        </h2>
                        <div>
                            <p className="mb-6">Do you desire to grow deeper in the prophetic?</p>
                            <p>
                                Prophet Gbenga Shafe's specialized Prophetic Training & Mentorship Program offers structured guidance based on your
                                level of prophetic calling:
                            </p>
                        </div>
                    </div>
                    <div className="card-container | grid grid-cols-1 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
                        {WAIT_LIST_TRACKS.map((_track, index) => (
                            <WaitListCard key={index} track={_track} />
                        ))}
                    </div>
                    <p className="mx-auto text-center text-[28px] xl:w-[60ch]">
                        Choose your track and step into a new realm of prophetic clarity and confidence! Sign up now and take your prophetic journey
                        to the next level!
                    </p>
                    <div className="mx-auto grid w-max">
                        <LinkButton to="/" variant="accent" className="px-30 py-4 text-[20px] text-black">
                            Enrol Now
                        </LinkButton>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export { WaitList };

const WAIT_LIST_TRACKS = [
    {
        name: "The Prophetic Seeker Track",
        description: (
            <div className="grid gap-y-5">
                <p>For those who desire to hear God clearly and develop confidence in divine communication.</p>
                <p>Learn how to tune in to God's voice, recognize His leadings, and cultivate a prophetic lifestyle.</p>
            </div>
        ),
        decorColour: "#F7F4E8",
        image: seekerImage,
    },
    {
        name: "The Dream and Interpretation Track",
        description: (
            <div className="grid gap-y-5">
                <p>For those who want to understand dreams and their interpretations with biblical accuracy.</p>
                <p>Discover how God speaks through dreams, symbols, and visions and how to decode divine messages.</p>
            </div>
        ),
        decorColour: "#F4C006",
        image: DreamImage,
    },
    {
        name: "The Prophetic Office Track",
        description: (
            <div className="grid gap-y-5">
                <p>For those who feel called to the office of the prophet and want to sharpen their prophetic mantle.</p>
                <p>Receive mentorship on prophetic authority, deeper realms of revelation, and ministering as a prophet.</p>
            </div>
        ),
        decorColour: "#F7F4E8",
        image: PropheticOfficeImage,
    },
];

type TrackProp = {
    name: string;
    description: ReactNode;
    decorColour: string;
    image: string;
};

const WaitListCard = ({ track }: { track: TrackProp }) => {
    const { decorColour, name, description } = track;

    return (
        <div className="card | overflow-hidden rounded-sm border border-accent-3">
            <div className="track-img | relative max-h-60 overflow-hidden">
                <img src={track.image} className="scaleX-[-1]" />
                <div className="backdrop | absolute inset-0 bg-linear-180 from-transparent to-[#000]">
                    <p className="absolute bottom-6 px-9 text-[28px]">{name}</p>
                </div>
            </div>
            <div className="card__body | grid gap-y-11 px-9 py-7 font-glastone text-xl text-white">
                {description}
                <div className="h-3.5 w-full" style={{ backgroundColor: decorColour }}></div>
            </div>
        </div>
    );
};

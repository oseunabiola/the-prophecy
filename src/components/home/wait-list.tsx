import { PageContainer } from "../shared/page-container";
import { LinkButton } from "../ui/link-button";

const WaitList = () => {
    return (
        <div className="bg-radial-[50%_50%_at_50%_50%] from-[#010836] to-[#01020F] py-[102px] text-alt-2">
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
                    <div className="card-container">
                        {WAIT_LIST_TRACKS.map((_track, index) => (
                            <WaitListCard key={index} track={_track} />
                        ))}
                    </div>
                    <p className="mx-auto w-[60ch] text-center text-[28px]">
                        Choose your track and step into a new realm of prophetic clarity and confidence! Sign up now and take your prophetic journey
                        to the next level!
                    </p>
                    <div className="mx-auto grid w-max">
                        <LinkButton to="/" variant="accent" className="px-30 py-6 text-[20px] text-black">
                            Enrol Now
                        </LinkButton>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export { WaitList };

const WAIT_LIST_TRACKS = [{ name: "The Prophetic Seeker Track" }];

type TrackProp = {
    name: string;
};

const WaitListCard = ({ track }: { track: TrackProp }) => {
    return (
        <div className="card | border- rounded-sm border-accent-2" style={{ "--x-spacing": "36px" } as React.CSSProperties}>
            {track.name}
        </div>
    );
};

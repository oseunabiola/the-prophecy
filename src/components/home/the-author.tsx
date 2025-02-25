import AuthorImage from "../../assets/images/Dr-Prophet-Gbenga-Shafe.png";
import { PageContainer } from "../shared/page-container";

const TheAuthor = () => {
    return (
        <PageContainer>
            <div className="grid items-center py-36 lg:grid-cols-12">
                <div className="order-1 text-justify text-xl lg:col-span-7 lg:w-[97%] lg:pe-8 xl:order-0">
                    <h2 className="mb-10 text-center font-glastone text-[56px] leading-[70px] lg:text-left">About the Author</h2>
                    <div className="grid gap-y-8">
                        <p>
                            Prophet Gbenga Shafe is the Senior Pastor of Harvest Word Assembly, Nigeria, and a seasoned prophetic voice with almost
                            two decades of experience in the office of the prophet. A passionate teacher of God's Word, he carries a divine mandate to
                            equip believers with the ability to hear and declare God's voice with clarity and confidence.
                        </p>
                        <p>
                            Through his prophetic ministry, mentorship programs, and teachings, he has helped countless individuals activate and
                            sharpen their prophetic gifts, walk in divine purpose, and embrace their kingdom calling. Prophet Gbenga Shafe is a
                            devoted husband, father, and mentor with a heart for revival and kingdom advancement.
                        </p>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-5 lg:ms-auto">
                    <img src={AuthorImage} alt="The author - Dr Prophet Gbenga Shafe" />
                </div>
            </div>
        </PageContainer>
    );
};

export { TheAuthor };

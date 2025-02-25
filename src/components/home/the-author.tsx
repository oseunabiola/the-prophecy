import AuthorImage from "../../assets/images/Dr-Prophet-Gbenga-Shafe.png";
import { PageContainer } from "../shared/page-container";

const TheAuthor = () => {
    return (
        <div id="author">
            <PageContainer>
                <div className="grid items-center gap-y-8 py-32 xl:grid-cols-12 xl:py-36">
                    <div className="order-1 text-justify text-xl xl:order-0 xl:col-span-7 xl:w-[97%] xl:pe-8">
                        <h2 className="mb-4 text-center font-glastone text-[40px] xl:mb-10 xl:text-left xl:text-[56px] xl:leading-[70px]">
                            About the Author
                        </h2>
                        <div className="grid gap-y-8">
                            <p>
                                Prophet Gbenga Shafe is the Senior Pastor of Harvest Word Assembly, Nigeria, and a seasoned prophetic voice with
                                almost two decades of experience in the office of the prophet. A passionate teacher of God's Word, he carries a divine
                                mandate to equip believers with the ability to hear and declare God's voice with clarity and confidence.
                            </p>
                            <p>
                                Through his prophetic ministry, mentorship programs, and teachings, he has helped countless individuals activate and
                                sharpen their prophetic gifts, walk in divine purpose, and embrace their kingdom calling. Prophet Gbenga Shafe is a
                                devoted husband, father, and mentor with a heart for revival and kingdom advancement.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto w-9/12 xl:col-span-5 xl:ms-auto xl:me-0">
                        <img src={AuthorImage} alt="The author - Dr Prophet Gbenga Shafe" />
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export { TheAuthor };

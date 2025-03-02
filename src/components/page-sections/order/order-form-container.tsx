import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, UseModalProps } from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { ReactNode, useState } from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import { orderFormValidation } from "../../../utils/order-form-validation";
import { PageContainer } from "../../shared/page-container";
import { CustomInputField } from "../../ui/custom-input-field";
import { Button } from "../../ui/link-button";

const FORM_INIT_VALUES = { firstName: "", lastName: "", email: "", location: "", phoneNo: "" } as OrderFormType;
type OrderFormType = { firstName: string; lastName: string; email: string; location: string; phoneNo: string };

export type { OrderFormType };

const ORDER_ENDPOINT =
    process.env.NODE_ENV === "development" ? "http://localhost:3001/v1/order-the-prophetic" : "https://api.theharvestword.org/v1/order-the-prophetic";

const OrderFormContainer = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const orderSuccessModal = useDisclosure();

    const handleFormSubmit = async (values: OrderFormType, helper: FormikHelpers<OrderFormType>) => {
        try {
            const response = await axios.post(ORDER_ENDPOINT, values);
            console.log(response.data.data);
            setSuccessMessage(response.data.message);
            helper.resetForm();
            orderSuccessModal.onOpen();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-primary py-32 xl:py-40">
            {/* <OrderSuccessModal isOpen={orderSuccessModal.isOpen}  /> */}
            <OrderSuccessModal modal={orderSuccessModal} successMessage={successMessage} onCloseCallback={() => setSuccessMessage("")} />
            <PageContainer>
                <div className="mx-auto grid gap-y-12 md:w-9/12 xl:w-10/12">
                    <header className="text-center xl:text-left">
                        <h2 className="mb-3 font-glastone text-[40px] xl:mb-4 xl:text-5xl xl:leading-[70px]">Order Information</h2>
                        <p className="text-xl">Ensure you fill in the correct details as required</p>
                    </header>
                    <Formik initialValues={FORM_INIT_VALUES} validationSchema={orderFormValidation} onSubmit={handleFormSubmit}>
                        {({ isSubmitting }) => (
                            <Form className="form |">
                                <div className="grid gap-y-8 bg-alt-2 px-6 py-10 xl:gap-y-12 xl:px-12 xl:py-20">
                                    <div className="grid gap-y-6 xl:gap-y-12">
                                        <TwoColumnFields>
                                            <CustomInputField name="firstName" label="First Name*" placeholder="Enter your first name" />
                                            <CustomInputField name="lastName" label="Last Name*" placeholder="Enter your last name" />
                                        </TwoColumnFields>
                                        <TwoColumnFields>
                                            <CustomInputField name="email" type="email" label="Email*" placeholder="Enter your email address" />
                                            <CustomInputField name="location" label="City, Country" placeholder="Lagos,Nigeria" />
                                        </TwoColumnFields>
                                        <CustomInputField name="phoneNo" type="tel" label="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <Button variant="primary" type="submit" className="px-6 py-4 disabled:bg-gray-100" disabled={isSubmitting}>
                                        Confirm Order
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </PageContainer>
        </div>
    );
};

export { OrderFormContainer };

const TwoColumnFields = ({ children }: { children: ReactNode }) => {
    return <div className="grid items-start gap-x-[34px] gap-y-6 md:grid-cols-2 xl:gap-y-8">{children}</div>;
};

const OrderSuccessModal = ({
    modal,
    successMessage,
    onCloseCallback,
}: {
    modal: UseModalProps;
    successMessage: string;
    onCloseCallback: () => void;
}) => {
    const MODAL_MESSAGE = "Thanks you for registering your intention. Your request is being processed.";
    return (
        <Modal
            isOpen={modal.isOpen}
            onClose={() => {
                onCloseCallback();
                modal.onClose();
            }}
            closeOnEsc
            isCentered
        >
            <ModalOverlay />
            <ModalContent className="mx-4 !rounded-2xl p-4">
                <ModalHeader>Order Request Submitted</ModalHeader>
                <ModalBody className="my-8 grid gap-y-2 text-center">
                    <LiaCartPlusSolid className="mx-auto text-7xl text-green-800" />

                    <p className="text-xl font-bold">{successMessage}</p>
                    <p>{MODAL_MESSAGE}</p>
                </ModalBody>

                <ModalFooter>
                    <div className="flex justify-center gap-2">
                        <Button variant="primary" onClick={modal.onClose} className="cursor-pointer px-10 py-3">
                            Ok
                        </Button>
                    </div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

import { useDisclosure } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { ReactNode, useState } from "react";
import { orderFormValidation } from "../../../utils/order-form-validation";
import { PageContainer } from "../../shared/page-container";
import { CustomInputField } from "../../ui/custom-input-field";
import { Button } from "../../ui/link-button";
import { OrderSuccessModal } from "./success-modal";

const FORM_INIT_VALUES = { firstName: "", lastName: "", email: "", city: "", country: "", phoneNo: "" } as OrderFormType;
type OrderFormType = { firstName: string; lastName: string; email: string; city: string; country: string; phoneNo: string };

export type { OrderFormType };

const ORDER_ENDPOINT =
    process.env.NODE_ENV === "development" ? "http://localhost:3001/v1/order-the-prophetic" : "https://api.theharvestword.org/v1/order-the-prophetic";

const OrderFormContainer = () => {
    const [successMessage, setSuccessMessage] = useState("Successful");
    const [submitError, setSubmitError] = useState("");
    const [orderId, setOrderId] = useState("");

    const orderSuccessModal = useDisclosure();

    const handleFormSubmit = async (values: OrderFormType, helper: FormikHelpers<OrderFormType>) => {
        try {
            setSubmitError("");
            const response = await axios.post(ORDER_ENDPOINT, values, { headers: { "Content-Type": "application/json" } });
            console.log(response.data.data);
            setSuccessMessage(response.data.message);
            helper.resetForm();
            setOrderId(response.data.data.orderId);
            orderSuccessModal.onOpen();
        } catch (error) {
            setSubmitError(error instanceof AxiosError ? error.response?.data.message : "Oops! Something went wrong");
        }
    };

    return (
        <div className="bg-primary py-32 xl:py-40">
            <OrderSuccessModal
                modal={orderSuccessModal}
                successMessage={successMessage}
                onCloseCallback={() => setSuccessMessage("")}
                orderId={orderId}
            />
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
                                    <p className="bg-primary p-3 px-5 text-center text-xl md:text-right">
                                        <span className="font-semibold">NGN 15,000</span>
                                        /Copy
                                    </p>
                                    <div className="grid gap-y-6 xl:gap-y-12">
                                        <TwoColumnFields>
                                            <CustomInputField name="firstName" label="First Name*" placeholder="Enter your first name" />
                                            <CustomInputField name="lastName" label="Last Name*" placeholder="Enter your last name" />
                                        </TwoColumnFields>
                                        <TwoColumnFields>
                                            <CustomInputField name="email" type="email" label="Email*" placeholder="Enter your email address" />
                                            <CustomInputField name="city" label="City" placeholder="Lagos" />
                                        </TwoColumnFields>
                                        <TwoColumnFields>
                                            <CustomInputField name="country" label="Country" placeholder="Nigeria" />
                                            <CustomInputField name="phoneNo" type="tel" label="phone" placeholder="Enter your phone number" />
                                        </TwoColumnFields>
                                    </div>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="cursor-pointer px-6 py-4 disabled:bg-gray-100"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? <span className="text-4xl leading-0">...</span> : "Register Order"}
                                    </Button>
                                    {submitError ? (
                                        <p className="rounded border-[0.1px] bg-red-50 px-2 py-1 text-center text-lg text-red-500">{submitError}</p>
                                    ) : null}
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

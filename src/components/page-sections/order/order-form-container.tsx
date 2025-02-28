import { Form, Formik, FormikHelpers, useField } from "formik";
import { ReactNode } from "react";
import { PageContainer } from "../../shared/page-container";
import { Button } from "../../ui/link-button";

const FORM_INIT_VALUES: FormValuesType = { firstName: "", lastName: "", email: "", location: "", phone: "" };
type FormValuesType = { firstName: ""; lastName: ""; email: ""; location: ""; phone: "" };

const OrderFormContainer = () => {
    const handleFormSubmit = async (values: FormValuesType, helper: FormikHelpers<FormValuesType>) => {
        try {
            console.log(values);
            helper.setSubmitting(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-primary py-32 xl:py-40">
            <PageContainer>
                <div className="mx-auto grid gap-y-12 md:w-9/12 xl:w-10/12">
                    <header className="text-center xl:text-left">
                        <h2 className="mb-3 font-glastone text-[40px] xl:mb-4 xl:text-5xl xl:leading-[70px]">Order Information</h2>
                        <p className="text-xl">Ensure you fill in the correct details as required</p>
                    </header>
                    <Formik initialValues={FORM_INIT_VALUES} onSubmit={handleFormSubmit}>
                        {({ isSubmitting }) => (
                            <Form className="form |">
                                <div className="grid gap-y-8 bg-alt-2 px-6 py-10 xl:gap-y-12 xl:px-12 xl:py-20">
                                    <div className="grid gap-y-6 xl:gap-y-8">
                                        <TwoColumnFields>
                                            <CustomInputField
                                                name="firstName"
                                                label={
                                                    <span>
                                                        First Name<span className="align-super">*</span>
                                                    </span>
                                                }
                                                placeholder="Enter your first name"
                                            />
                                            <CustomInputField
                                                name="lastName"
                                                label={
                                                    <span>
                                                        Last Name<span className="align-super">*</span>
                                                    </span>
                                                }
                                                placeholder="Enter your last name"
                                            />
                                        </TwoColumnFields>
                                        <TwoColumnFields>
                                            <CustomInputField
                                                name="email"
                                                type="email"
                                                label={
                                                    <span>
                                                        Email<span className="align-super">*</span>
                                                    </span>
                                                }
                                                placeholder="Enter your email address"
                                            />
                                            <CustomInputField name="location" label="Location" placeholder="Enter your location" />
                                        </TwoColumnFields>
                                        <CustomInputField name="phone" type="tel" label="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <Button variant="primary" className="px-6 py-4" disabled={isSubmitting}>
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

type CustomInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: ReactNode;
};

const CustomInputField = ({ label, ...props }: CustomInputProps) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group | grid gap-y-2">
            <label htmlFor={field.name} className="form-label | mb-1 block text-[17px] font-medium text-gray-600">
                {label}
            </label>
            <input
                className="form-control | w-full overflow-hidden rounded-[4.25px] border border-[#ced4da] px-4 py-[0.8rem] text-[0.93rem] leading-5"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? <span className="form-error | inline-block text-sm text-red-500">{meta.error}</span> : null}
        </div>
    );
};

const TwoColumnFields = ({ children }: { children: ReactNode }) => {
    return <div className="grid gap-x-[34px] gap-y-6 md:grid-flow-col xl:gap-y-8">{children}</div>;
};

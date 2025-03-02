import * as Yup from "yup";

const errorMessages = {
    firstNameRequired: "First name is required.",
    firstNameLength: "First name provided is not allowed. Only 2-20 characters are allowed for first name.",
    firstNameAlphabets: "The first name provided contains characters that are now allowed. Only alphabets, space and hyphen are allowed",
    lastNameRequired: "Last name is required.",
    lastNameLength: "Last name provided is not allowed. Only 2-20 characters are allowed for last name.",
    lastNameAlphabets: "The last name provided contains characters that are now allowed. Only alphabets, space and hyphen are allowed",
    emailAddressRequired: "Email address is required.",
    emailAddress: "The email address provided is invalid. Kindly provide a valid email address.",
    location: "The location provided is not allowed. Location should be your state and country, separated by a comma.",
    phoneNumber: "Invalid phone number provided.",
};

const orderFormValidation = Yup.object().shape({
    firstName: Yup.string()
        .trim()
        .min(2, errorMessages.firstNameLength)
        .max(50, errorMessages.firstNameLength)
        .matches(/^[a-zA-Z\s-]+$/, errorMessages.firstNameAlphabets)
        .required("Required"),
    lastName: Yup.string()
        .trim()
        .min(2, errorMessages.lastNameLength)
        .max(50, errorMessages.lastNameLength)
        .matches(/^[a-zA-Z\s-]+$/, errorMessages.lastNameAlphabets)
        .required(errorMessages.lastNameRequired),
    email: Yup.string().trim().email(errorMessages.emailAddress).required(errorMessages.emailAddressRequired),
    location: Yup.string()
        .trim()
        .matches(/^[a-zA-Z]+,[a-zA-Z]+$/, errorMessages.location),
    phoneNo: Yup.string()
        .trim()
        .matches(/^\d{5,}$/, errorMessages.phoneNumber),
});

export { orderFormValidation };

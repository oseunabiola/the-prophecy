import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, UseModalProps } from "@chakra-ui/react";
import { IoCheckmarkCircleSharp, IoCopyOutline } from "react-icons/io5";
import { Button } from "../../ui/link-button";

const PAYMENT_DETAILS = {
    "Account Number:": "6500484241",
    "Account Name:": "Shafe Gbenga Solomon",
    "Bank Name:": "Providus Bank",
    "Payment Description:": "TAMP Book",
};

type ModalProps = {
    modal: UseModalProps;
    successMessage: string;
    onCloseCallback: () => void;
    orderId: string;
};

const OrderSuccessModal = ({ modal, successMessage, onCloseCallback }: ModalProps) => {
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
                <ModalBody className="my-8 grid gap-y-5 text-center">
                    <IoCheckmarkCircleSharp className="mx-auto text-7xl text-green-600" />

                    <p className="text-3xl font-medium">{successMessage}</p>
                    <div className="grid gap-y-6">
                        <p>Thanks you for registering your intention. To confirm your order, kindly make payment into the account below:</p>
                        <div className="text-left">
                            {(Object.keys(PAYMENT_DETAILS) as (keyof typeof PAYMENT_DETAILS)[]).map((_paymentField) => {
                                // if (_paymentField === "Payment Description:" && orderId)
                                //     PAYMENT_DETAILS[_paymentField] = PAYMENT_DETAILS[_paymentField].concat("-", orderId);

                                return (
                                    <p key={_paymentField}>
                                        <span className="me-2 inline-block w-6/12 bg-gray-200 py-1 pe-2 text-right font-medium">{_paymentField}</span>
                                        <span>{PAYMENT_DETAILS[_paymentField]}</span>

                                        {["Account Number:", "Payment Description:"].includes(_paymentField) ? (
                                            <button
                                                className="ms-2 cursor-pointer text-gray-400"
                                                onClick={() => navigator.clipboard.writeText(PAYMENT_DETAILS[_paymentField])}
                                            >
                                                <IoCopyOutline />
                                            </button>
                                        ) : null}
                                        <span></span>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </ModalBody>

                <div className="m-5 grid">
                    <Button variant="primary" onClick={modal.onClose} className="cursor-pointer px-10 py-3">
                        Go Home
                    </Button>
                </div>
            </ModalContent>
        </Modal>
    );
};

export { OrderSuccessModal };

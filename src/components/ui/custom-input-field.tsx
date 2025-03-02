import { useField } from "formik";
import { ReactNode } from "react";

type CustomInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: ReactNode;
};

const CustomInputField = ({ label, ...props }: CustomInputProps) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group | relative grid gap-y-2">
            <label htmlFor={field.name} className="form-label | mb-1 block text-[17px] font-medium text-gray-600">
                {label}
            </label>
            <input
                className="form-control | w-full overflow-hidden rounded-[4.25px] border border-[#ced4da] px-4 py-[0.8rem] text-[0.93rem] leading-5"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <span className="form-error | absolute top-[100%] mt-2 inline-block text-xs text-red-500">{meta.error}</span>
            ) : null}
        </div>
    );
};

export { CustomInputField };

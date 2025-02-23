import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LinkButtonProps = {
    children: ReactNode;
    isExternal?: boolean;
    to: string;
    className?: string;
    variant?: "primary" | "outline-primary" | "accent";
};

const LinkButton = ({ children, isExternal = false, to, className = "", variant }: LinkButtonProps) => {
    let internalClassNames;

    const DEFAULT_CLASS_NAMES = "rounded-md text-center font-semibold";

    switch (variant) {
        case "primary":
            internalClassNames = "bg-radial-[50%_50%_at_50%_50%] from-[#010836] to-[#01020F] text-alt";
            break;
        case "outline-primary":
            internalClassNames = "border-[1px]";
            break;
        case "accent":
            internalClassNames = "bg-accent";

            break;

        default:
            internalClassNames = "px-6 py-2";
            break;
    }

    if (isExternal) {
        return (
            <a href={to} className={`${DEFAULT_CLASS_NAMES} ${className} ${internalClassNames}`}>
                {children}
            </a>
        );
    }

    return (
        <Link to={to} className={`${DEFAULT_CLASS_NAMES} ${className} ${internalClassNames}`}>
            {children}
        </Link>
    );
};

export { LinkButton };

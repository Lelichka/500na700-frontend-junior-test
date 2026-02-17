import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>

export const CloseIcon = ({ className, ...props }: IconProps) => (
    <svg
        viewBox="0 0 20 20"
        fill="none"
        className={className} // подключаем класс для стилизации через SCSS
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.25 19.1666L0 1.91666L1.91667 0L19.1667 17.2499L17.25 19.1666Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.25 0.000103723L0 17.25L1.91667 19.1667L19.1667 1.91676L17.25 0.000103723Z"
            fill="currentColor"
        />
    </svg>
);
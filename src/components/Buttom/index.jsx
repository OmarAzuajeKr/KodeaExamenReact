import React from 'react';
import { classnames } from '../../utils/classnames';

const styles = {
    primary: 'bg-[#DDF0F2] text-robinEggBlue',
    primaryAlt: 'text-robinEggBlue border border-robinEggBlue',
    secondary: 'bg-[#DDE8E9] text-[#027079]',
    secondaryAlt: 'text-[#027079] border border-[#027079]',
    
};

const Button = ({
    children,
    onClick,
    disabled,
    className,
    variant = 'primary',
    ...props
}) => {
    const baseClass = 'w-[180px] h-11 rounded-lg px-[58px] py-[10px] text-[20px] leading-6 font-medium font-sans shadow-auxo';
    const variantClass = styles[variant] || styles.primary;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={
                classnames(
                    baseClass,
                    variantClass,
                    className
                )
            }
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

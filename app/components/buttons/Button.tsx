'use client'

export interface ButtonProps {
    id?: string
    label: string
    link: string
    rounded: false,
    outline: false,
    small: false,
    icon: string
    labelColor: string
    backgroundColor: string
    borderColor: string
}

const Button: React.FC<ButtonProps> = ({
    id,
    label,
    link,
    rounded,
    outline,
    small,
    icon,
    labelColor,
    backgroundColor,
    borderColor
}) => {
    return (
        <button
        
            style={{ 
                color: labelColor, 
                background: backgroundColor,
                borderColor: borderColor,
            }}

            className={`
                block
                w-full 
                px-12
                py-3 
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                transition
                ${rounded ? 'rounded-full' : 'rounded-lg'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
                border-2 
                `}
        >
            {label}
        </button>
    )
}

export default Button;
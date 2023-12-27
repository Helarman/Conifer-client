'use client'

export interface ButtonProps {
    id?: string
    label: string
    link: string
    rounded: false,
    outline: false,
    small: false,
    icon: string
    color: string
    backgroundColor: string
}

const Button: React.FC<ButtonProps> = ({
    id,
    label,
    link,
    rounded,
    outline,
    small,
    icon,
    color,
    backgroundColor,
}) => {

    return (
        <button

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
                ${outline ? 'bg-blue-500' : ''}
                ${outline ? 'border-gray-500' : 'bg-blue-500'}
                ${outline ? 'text-gray-500' : 'text-white'}
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
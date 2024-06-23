import React, { ButtonHTMLAttributes, useMemo } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

type ButtonProps = {
  children: React.ReactNode | string
  className?: string
  fullWidth?: boolean
  outlined?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  variant?: 'primary' | 'google' | 'facebook'
  onClick?: () => void
}

function Button({
  children,
  className,
  fullWidth,
  outlined,
  type,
  variant = 'primary',
  onClick,
}: ButtonProps) {

  const styles = useMemo(() => {
    let styles = {
      button: 'text-white p-3 h-[45px] text-heading-5 font-label font-bold rounded-md flex justify-center items-center',
      fullWidth: 'w-full',
      outlined: 'border border-white',
    }

    if (variant === 'primary') {
      styles = {
        ...styles,
        button: `${styles.button} bg-primary`,
      }
    }

    if (variant === 'google') {
      styles = {
        ...styles,
        button: `${styles.button} bg-red-100`,
      }
    }

    if (variant === 'facebook') {
      styles = {
        ...styles,
        button: `${styles.button} bg-facebook`,
      }
    }


    return styles
  }, [variant])


  return (
    <button type={type}
      className={`${styles.button} 
      ${fullWidth && styles.fullWidth}
      ${outlined && styles.outlined}
      ${className}`}

      onClick={onClick}
    >
      {variant === 'google' && (
        <FaGoogle className='w-6 h-6 mr-2 text-white' />
      )}

      {variant === 'facebook' && (
        <FaFacebook className='w-6 h-6 mr-2 text-white' />
      )}
      {children}</button>
  )
}

export default Button
import {InputHTMLAttributes} from 'react';
import {twMerge} from "tailwind-merge";

export default function Checkbox({className = '', ...props}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="checkbox"
      className={twMerge('rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary-600 shadow-sm focus:ring-primary-500 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800 accent-primary-500 focus:accent-primary-500', className)}
    />
  );
}

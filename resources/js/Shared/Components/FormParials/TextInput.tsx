import {forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef} from 'react';
import {twMerge} from "tailwind-merge";

export default forwardRef(function TextInput(
  {type = 'text', className = '', isFocused = false, ...props}: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
  ref
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={twMerge('border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm' +
        ' accent-primary-500 focus:accent-primary-500', className)
      }
      ref={localRef}
    />
  );
});

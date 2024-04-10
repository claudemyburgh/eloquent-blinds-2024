import {forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef,} from "react";
import {twMerge} from "tailwind-merge";

export default forwardRef(function Textarea(
  {
    type = "text",
    className = "",
    isFocused = false,
    maxChar = 1000,
    ...props
  }: InputHTMLAttributes<HTMLTextAreaElement> & {
    isFocused?: boolean;
    maxChar?: number;
  },
  ref
) {
  const localRef = useRef<HTMLTextAreaElement>(null);
  const resize = () => {
    if (localRef.current) {
      localRef.current.style.height = "auto";

      localRef.current.style.height =
        localRef.current?.scrollHeight + 15 + "px";
    }
  };

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    resize();
  }, [localRef.current?.scrollHeight]);

  return (
    <>
            <textarea
              {...props}
              className={twMerge(`border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-600 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm `, className)
              }
              ref={localRef}
            />
    </>
  );
});

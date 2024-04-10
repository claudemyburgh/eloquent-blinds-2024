import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface PanelProps {
  children?: ReactNode
  className?: string
}

interface PanelHeaderProps extends PanelProps {
  heading: string
  paragraph?: string
}

const Panel = ({children, className}: PanelProps) => {
  return (
    <div className={twMerge(`bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 p-4 rounded space-y-4`, className)}>
      {children}
    </div>
  )
}

Panel.Header = ({heading, paragraph, className, children}: PanelHeaderProps) => (
  <header>
    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">{heading}</h2>
    {paragraph && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{paragraph}</p>}
    {children}
  </header>
)
export default Panel

import {ComponentType, useEffect, useState} from "react"
import {Listbox} from "@headlessui/react"
import {twJoin, twMerge} from "tailwind-merge"

interface ThemeProps {
  name: string
  value: string
  icon: ComponentType<any>
}

const themes: ThemeProps[] = [
  {name: "Light", value: "light", icon: LightIcon},
  {name: "Dark", value: "dark", icon: DarkIcon},
  {name: "System", value: "system", icon: SystemIcon},
]

function LightIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
      />
    </svg>
  )
}

function DarkIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

function SystemIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  )
}

export function ThemeSelector(props: any) {
  let [selectedTheme, setSelectedTheme] = useState<ThemeProps | null>(null)

  useEffect(() => {
    try {
      if (selectedTheme) {
        document.documentElement.setAttribute("data-theme", selectedTheme.value)
      } else {
        const currentTheme = document.documentElement.getAttribute("data-theme")
        // @ts-expect-error
        setSelectedTheme(themes.find((theme: ThemeProps) => theme.value === currentTheme))
      }
    } catch (error) {
      console.error("Error setting theme:", error)
    }
  }, [selectedTheme, themes, setSelectedTheme])

  return (
    <Listbox as="div" value={selectedTheme} onChange={setSelectedTheme} {...props}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button
        className="h-8 w-8 md:h-9 md:w-9 rounded-lg border border-gray-500 hover:scale-105 text-gray-600 dark:text-gray-200 dark:bg-gray-900/20 flex justify-center items-center"
        aria-label={selectedTheme?.name}
      >
        <LightIcon className="hidden h-4 w-4 fill-primary-400 [[data-theme=light]_&]:block"/>
        <DarkIcon className="hidden h-4 w-4 fill-primary-400 [[data-theme=dark]_&]:block"/>
        <LightIcon className="hidden h-4 w-4 fill-gray-400 [:not(.dark)[data-theme=system]_&]:block"/>
        <DarkIcon className="hidden h-4 w-4 fill-gray-400 [.dark[data-theme=system]_&]:block"/>
      </Listbox.Button>
      <Listbox.Options
        className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-lg  p-3 text-sm font-medium shadow-md backdrop-blur-lg shadow-black/5 ring-1 ring-black/5 dark:bg-gray-900/95 bg-gray-200/95 dark:ring-white/5">
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme}
            className={({active, selected}) =>
              twJoin("flex cursor-pointer select-none items-center rounded-sm p-1", {
                // @ts-expect-error
                "text-primary-500": selected,
                "text-gray-900 dark:text-white": active && !selected,
                "text-gray-700 dark:text-gray-400": !active && !selected,
                "bg-gray-100 dark:bg-gray-900/40": active,
              })
            }
          >
            {({selected}) => (
              <>
                <div className="rounded-md bg-white hover:bg-gray-50 p-1 shadow ring-1 ring-gray-900/5 dark:bg-gray-700 hover:dark:bg-gray-800 dark:ring-inset dark:ring-white/5">
                  <theme.icon className={twMerge("h-4 w-4", selected ? "fill-primary-400 dark:fill-primary-400" : "fill-gray-400")}/>
                </div>
                <div className="ml-3 hover:text-primary-400">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

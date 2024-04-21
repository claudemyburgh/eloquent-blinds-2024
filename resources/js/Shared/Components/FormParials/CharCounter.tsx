import {FC} from "react";

interface CharProp {
  count: number;
  max?: number;
}

const CharCounter: FC<CharProp> = ({count, max = 255}) => {
  return (
    <div className="-mt-8 text-right pointer-events-none">
            <span
              className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 ${
                max > count
                  ? " text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"
                  : " text-red-800 dark:text-red-300  bg-red-100 dark:bg-red-700"
              }`}
            >
                {count} / {max}
            </span>
    </div>
  );
};

export default CharCounter;

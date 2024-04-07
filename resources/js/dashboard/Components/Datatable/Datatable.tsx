import React, {FC} from "react"
import {ChildrenProps} from "@/types"

const Datatable: FC<ChildrenProps> = ({children}) => {
    return (
        <div className={`bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 rounded`}>
            <table className={`table w-full text-left overflow-hidden rounded`}>{children}</table>
        </div>
    )
}


export default Datatable

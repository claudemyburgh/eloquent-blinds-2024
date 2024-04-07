import React, {FC} from "react";
import {ChildrenProps} from "@/types";

const DatatableDeleteConfirm: FC<ChildrenProps> = ({children}) => {
  return <div className={`flex space-x-4`}>{children}</div>;
};

export default DatatableDeleteConfirm;

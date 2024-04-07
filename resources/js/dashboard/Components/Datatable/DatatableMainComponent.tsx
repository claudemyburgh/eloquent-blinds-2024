import {UsePageDatatableProps} from "@/types/datatable";
import React, {FC, useEffect, useState} from "react";
import {Datatable, DatatableBody, DatatableCreateActionBar, DatatableHead, DatatablePagination, useDatatable} from "@/dashboard/Components/Datatable";
import {DangerButton, PrimaryButton, SecondaryButton} from "@/dashboard/Components/Buttons";
import {router, usePage} from "@inertiajs/react";
import {orderBy} from "lodash";
import {DatatableDeleteConfirm} from "./Partial";
import {ToastItem} from "@/dashboard/Components/Alerts";
import toast from "react-hot-toast";
import {cleanUrl} from "@/lib/helpers";
import {DatatableFilter} from "./FilterDatatable";

const DatatableMainComponent: FC<UsePageDatatableProps<any> & any> = ({data, categories_all}) => {
  const {url} = usePage();

  const [confirm, setConfirm] = useState<boolean>(false);

  const {
    quickSearch,
    setQuickSearch,
    order,
    setOrder,
    setFilteredData,
    filteredData,
    selected,
    setSelected,
  } = useDatatable();

  const filterRecordData = () => {
    let dataSet: any[];
    dataSet = data.records.data;
    dataSet = dataSet.filter((row: any) => {
      return Object.keys(row).some((key: any) => {
        return (
          String(row[key])
            .toLowerCase()
            .indexOf(quickSearch.toLowerCase()) > -1
        );
      });
    });
    dataSet = orderBy(
      dataSet,
      (i: any) => {
        let value = i[order.key];
        if (!isNaN(parseFloat(value))) {
          return parseFloat(value);
        }
        return String(value).toLowerCase();
      },
      order.order
    );
    return dataSet;
  };

  useEffect(() => {
    setFilteredData(filterRecordData());
  }, [order, quickSearch]);

  const handleMassDelete = () => {
    setConfirm(false);

    router.delete(`${cleanUrl(url)}/${selected}`, {
      preserveState: false,
      onSuccess: () => {
        setSelected([]);
        toast.custom((t) => (
          <ToastItem
            t={t}
            type={`success`}
            title={`Success`}
            message={`Deleted successfully`}
            icon={`check`}
          />
        ));
      },
    });
  };

  return (
    <div>
      <DatatableCreateActionBar categories={categories_all}/>
      {data.meta.allow.searching && <DatatableFilter/>}
      {selected.length > 0 && (
        <div className="flex mb-4 space-x-8">
          <DatatableDeleteConfirm>
            {!confirm ? (
              <DangerButton onClick={() => setConfirm(true)}>
                Delete
              </DangerButton>
            ) : (
              <>
                <span>
                    Are you sure you want to delete{" "}
                  {selected.length}{" "}
                  {selected.length > 1
                    ? data.meta.name
                    : data.meta.name_singular}{" "}
                  ?
                </span>
                <PrimaryButton onClick={handleMassDelete}>
                  Yes
                </PrimaryButton>
                <SecondaryButton
                  onClick={() => setConfirm(false)}
                >
                  Cancel
                </SecondaryButton>
              </>
            )}
          </DatatableDeleteConfirm>
        </div>
      )}

      <Datatable>
        <DatatableHead/>
        <DatatableBody/>
      </Datatable>
      <DatatablePagination/>
      {JSON.stringify(categories_all)}
    </div>
  )
}


export default DatatableMainComponent

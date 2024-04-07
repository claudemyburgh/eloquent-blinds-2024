import {useRecoilState} from "recoil";
import $map from "lodash/map";
import {DatatableFilteredData, DatatableLimit, DatatableOrderColumn, DatatableQuickSearch, DatatableSelected} from "@/dashboard/recoil/datatable";

const useDatatable = () => {
    const [order, setOrder] = useRecoilState(DatatableOrderColumn);
    const [quickSearch, setQuickSearch] = useRecoilState(DatatableQuickSearch);
    const [limit, setLimit] = useRecoilState(DatatableLimit);
    const [filteredData, setFilteredData] = useRecoilState(DatatableFilteredData);
    const [selected, setSelected] = useRecoilState(DatatableSelected);

    /**
     * A function that handles the column order by updating the state with the new order.
     *
     * @param {any} column - the column to set the order for
     * @return {void}
     */
    const handleColumnOrder = (column: any): void => {
        setOrder({
            ...order,
            key: column,
            order:
                order.order === "asc" && order.key === column ? "desc" : "asc",
        });
    };

    /**
     * Handles the selection of an item.
     *
     * @param {any} e - the event object
     * @return {void}
     */
    const handleSelected = (e: any): void => {
        if (e.target.checked) {
            setSelected([...selected, parseInt(e.target.value)]);
        } else {
            setSelected(selected.filter((item: any) => item != e.target.value));
        }
    };

    /**
     * A function that handles toggling the selection of all items.
     *
     * @param {any} item - the item that triggered the toggle event
     * @param {any} data - the data containing the items to toggle
     * @return {void} no return value
     */
    const handleToggleSelectedAll = (item: any, data: any): void => {
        if (item.target.checked) {
            setSelected([...selected, ...$map(data, "id")]);
        } else {
            setSelected([]);
        }
    };

    return {
        order,
        setOrder,
        filteredData,
        setFilteredData,
        quickSearch,
        setQuickSearch,
        handleColumnOrder,
        limit,
        setLimit,
        selected,
        setSelected,
        handleSelected,
        handleToggleSelectedAll,
    }
}

export default useDatatable

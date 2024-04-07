import {atom} from "recoil";

export const DatatableOrderColumn = atom({
    key: "datatable_order_column", // unique ID (with respect to other atoms/selectors)
    default: {
        key: "id",
        order: "desc",
    } as { key: string; order: "asc" | "desc" },
});

export const DatatableQuickSearch = atom({
    key: "datatable_quick_search",
    default: "" as string,
});

export const DatatableFilteredData = atom({
    key: "datatable_filtered_data",
    default: [] as any[],
});

export const DatatableLimit = atom({
    key: "datatable_limit",
    default: 25 as any,
});

export const DatatableSelected = atom({
    key: "datatable_selected",
    default: [] as any[],
});

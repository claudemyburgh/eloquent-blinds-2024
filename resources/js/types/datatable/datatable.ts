import {PageProps} from "@/types";

export interface Link {
  url?: string;
  label: string;
  active?: boolean;
}

export interface DatatableProps<T> {
  data: {
    meta: {
      name: string;
      name_singular: string;
      allow: {
        editing: boolean;
        deletions: boolean;
        creation: boolean;
        searching: boolean;
        create_with_dialog: boolean;
      };
      pagination_limit: number;
    };
    database: {
      typings?: {
        [key: string]: string | number;
      };
      input_types?: Record<string, any>;
    };
    columns: {
      updatable: string[];
      creatable: string[];
      displayable: string[];
      quick_create: string[];
    };
    records: RecordsProps<T[]>;
  };
}

export interface RecordsProps<T> {
  data: T[];
  links: Link[];
  current_page: number;
}

export interface UsePageDatatableProps<T> extends DatatableProps<T> {
  [key: string]: any;
}

export type FullProps = UsePageDatatableProps<any> | PageProps | null;

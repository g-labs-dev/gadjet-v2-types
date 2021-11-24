import { Expenditures } from '../../model';
import { Pagination, ExpenditureSummary, ExpenditureType } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
    expenditureTypes: ExpenditureType[];
    date: [string, string];
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    expenditure: Expenditures[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    expenditureId: number;
};
export declare type GET_DETAIL_RESPONSE = Expenditures;
export declare type GET_SUMMARY_PARAMS = PARAMS;
export declare type GET_SUMMARY_QUERY = {
    query: string;
    expenditureTypes: ExpenditureType[];
    date: [string, string];
};
export declare type GET_SUMMARY_RESPONSE = ExpenditureSummary;
export declare type EXPORT_PARAMS = PARAMS;
export declare type EXPORT_QUERY = {
    date: [string, string];
};
export declare type EXPORT_RESPONSE = any;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    expenditure: Partial<Expenditures>;
};
export declare type ADD_RESPONSE = Expenditures;
export declare type UPDATE_PARAMS = PARAMS & {
    expenditureId: number;
};
export declare type UPDATE_BODY = {
    expenditure: Partial<Expenditures>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    expenditureId: number;
};
export declare type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=expenditure.d.ts.map
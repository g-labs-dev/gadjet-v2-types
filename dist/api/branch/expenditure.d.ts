/// <reference types="node" />
import { Expenditures } from '../../model';
import { Pagination, ExpenditureSummary, ExpenditureType } from '../../type';
import { ExpenditureSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & ExpenditureSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    expenditure: Expenditures[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    expenditureId: number;
};
export type GET_DETAIL_RESPONSE = Expenditures;
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = {
    query: string;
    expenditureTypes: ExpenditureType[];
    date: [string, string];
};
export type GET_SUMMARY_RESPONSE = ExpenditureSummary;
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = {
    date: [string, string];
};
export type EXPORT_RESPONSE = Buffer;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    expenditure: Partial<Expenditures>;
};
export type ADD_RESPONSE = Expenditures;
export type UPDATE_PARAMS = PARAMS & {
    expenditureId: number;
};
export type UPDATE_BODY = {
    expenditure: Partial<Expenditures>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    expenditureId: number;
};
export type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=expenditure.d.ts.map
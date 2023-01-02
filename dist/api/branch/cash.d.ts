/// <reference types="node" />
import { Cash } from '../../model';
import { Pagination, CashSummary } from '../../type';
import { CashSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & CashSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    cash: Cash[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    cashId: number;
};
export type GET_DETAIL_RESPONSE = Cash;
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = {};
export type GET_SUMMARY_RESPONSE = CashSummary;
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = {
    date: [string, string];
};
export type EXPORT_RESPONSE = Buffer;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    cash: Partial<Cash>;
};
export type ADD_RESPONSE = Cash;
export type UPDATE_PARAMS = PARAMS & {
    cashId: number;
};
export type UPDATE_BODY = {
    cash: Partial<Cash>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    cashId: number;
};
export type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=cash.d.ts.map
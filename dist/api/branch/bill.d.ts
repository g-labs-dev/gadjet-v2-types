/// <reference types="node" />
import { Bills } from '../../model';
import { BillSummary, ContractReceiver, Pagination, PaymentType, Result } from '../../type';
import { BillSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & BillSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    bills: Bills[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    billId: number;
};
export type GET_DETAIL_RESPONSE = Bills;
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = {
    query: string;
    startDate: [string, string];
    spaceTypes: number[];
};
export type GET_SUMMARY_RESPONSE = BillSummary;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    bill: Partial<Bills>;
};
export type ADD_RESPONSE = Bills;
export type UPDATE_PARAMS = PARAMS & {
    billId: number;
};
export type UPDATE_BODY = {
    bill: Partial<Bills>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    billId: number;
};
export type DELETE_RESPONSE = [number];
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = {
    startDate: [string, string];
};
export type EXPORT_RESPONSE = Buffer;
export type SEND_PARAMS = PARAMS & {
    billId: number;
};
export type SEND_BODY = {
    receivers: ContractReceiver['bill'];
};
export type SEND_RESPONSE = any;
export type RETURN_DEPOSIT_PARAMS = PARAMS & {
    billId: number;
};
export type RETURN_DEPOSIT_BODY = {
    price: number;
    type: PaymentType;
};
export type RETURN_DEPOSIT_RESPONSE = Result;
export {};
//# sourceMappingURL=bill.d.ts.map
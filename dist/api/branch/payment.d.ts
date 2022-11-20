/// <reference types="node" />
import { Payments } from '../../model';
import { Pagination, PaymentSummary, PaymentType, Result } from '../../type';
import { PaymentSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & PaymentSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    payments: Payments[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    paymentId: number;
};
export type GET_DETAIL_RESPONSE = Payments;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    payment: Partial<Payments>;
};
export type ADD_RESPONSE = Payments;
export type UPDATE_PARAMS = PARAMS & {
    paymentId: number;
};
export type UPDATE_BODY = {
    payment: Partial<Payments>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    paymentId: number;
};
export type DELETE_RESPONSE = [number];
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = {
    query: string;
    paymentType: PaymentType[];
    date: [string, string];
};
export type GET_SUMMARY_RESPONSE = PaymentSummary;
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = PaymentSearch;
export type EXPORT_RESPONSE = Buffer;
export type CONFIRM_PARAMS = PARAMS & {
    paymentId: number;
};
export type CONFIRM_RESPONSE = [number];
export type REFUND_PARAMS = PARAMS & {
    paymentId: number;
};
export type REFUND_BODY = {
    account?: {
        number: string;
        bankCode: string;
        holder: string;
    };
};
export type REFUND_RESPONSE = Result;
export type EXPORT_DEPOSIT_PAYMENTS_PARAMS = PARAMS;
export type EXPORT_DEPOSIT_PAYMENTS_QUERY = {
    contractRange: [string, string];
};
export type EXPORT_DEPOSIT_PAYMENTS_RESPONSE = Buffer;
export {};
//# sourceMappingURL=payment.d.ts.map
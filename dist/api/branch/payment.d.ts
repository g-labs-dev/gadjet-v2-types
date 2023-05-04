/// <reference types="node" />
import { Payments } from '../../model';
import { Pagination, PaymentSummary, PaymentType, Result } from '../../type';
import { PaymentSearch } from '../../type/search';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & PaymentSearch;
export declare type GET_LIST_RESPONSE = {
    total: number;
    payments: Payments[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    paymentId: number;
};
export declare type GET_DETAIL_RESPONSE = Payments;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    payment: Partial<Payments>;
};
export declare type ADD_RESPONSE = Payments;
export declare type UPDATE_PARAMS = PARAMS & {
    paymentId: number;
};
export declare type UPDATE_BODY = {
    payment: Partial<Payments>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    paymentId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_SUMMARY_PARAMS = PARAMS;
export declare type GET_SUMMARY_QUERY = {
    query: string;
    paymentType: PaymentType[];
    date: [string, string];
};
export declare type GET_SUMMARY_RESPONSE = PaymentSummary;
export declare type EXPORT_PARAMS = PARAMS;
export declare type EXPORT_QUERY = PaymentSearch;
export declare type EXPORT_RESPONSE = {
    fileName: string;
    data: Buffer;
};
export declare type CONFIRM_PARAMS = PARAMS & {
    paymentId: number;
};
export declare type CONFIRM_RESPONSE = [number];
export declare type REFUND_PARAMS = PARAMS & {
    paymentId: number;
};
export declare type REFUND_BODY = {
    account?: {
        number: string;
        bankCode: string;
        holder: string;
    };
};
export declare type REFUND_RESPONSE = Result;
export declare type EXPORT_DEPOSIT_PAYMENTS_PARAMS = PARAMS;
export declare type EXPORT_DEPOSIT_PAYMENTS_QUERY = {
    contractRange: [string, string];
};
export declare type EXPORT_DEPOSIT_PAYMENTS_RESPONSE = Buffer;
export {};
//# sourceMappingURL=payment.d.ts.map
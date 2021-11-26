import { Receipts } from '../../model';
import { Cashbill } from '../../popbill/cashbill';
import { Taxinvoice } from '../../popbill/taxinvoice';
import { Pagination, ReceiptSummary, Result } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
    requestDatetime: [string, string];
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    receipts: Receipts[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    receiptId: number;
};
export declare type GET_DETAIL_RESPONSE = Receipts;
export declare type GET_SUMMARY_PARAMS = PARAMS;
export declare type GET_SUMMARY_QUERY = {
    query: string;
    requestDatetime: [string, string];
};
export declare type GET_SUMMARY_RESPONSE = ReceiptSummary;
export declare type ADD_TAX_INVOICE_PARAMS = PARAMS;
export declare type ADD_TAX_INVOICE_BODY = {
    billId: number;
    taxInvoice: Taxinvoice;
};
export declare type ADD_TAX_INVOICE_RESPONSE = Result;
export declare type UPDATE_TAX_INVOICE_PARAMS = PARAMS & {
    receiptId: number;
};
export declare type UPDATE_TAX_INOVICE_BODY = {
    billId: number;
    taxInvoice: Taxinvoice;
};
export declare type UPDATE_TAX_INVOICE_RESPONSE = Result;
export declare type ADD_CASH_RECEIPT_PARAMS = PARAMS;
export declare type ADD_CASH_RECEIPT_BODY = {
    billId: number;
    cashReceipt: Cashbill;
};
export declare type ADD_CASH_RECEIPT_RESPONSE = Result;
export declare type CANCEL_CASH_RECEIPT_PARAMS = PARAMS & {
    receiptId: number;
};
export declare type CANCEL_CASH_RECEIPT_BODY = {
    billId: number;
    cashReceipt: {
        cancelType: 1 | 2 | 3;
        isPartCancel: boolean;
        supplyCost?: string;
        tax?: string;
        serviceFee?: string;
        totalAmount?: string;
    };
};
export declare type CANCEL_CASH_RECEIPT_RESPONSE = Result;
export {};
//# sourceMappingURL=receipt.d.ts.map
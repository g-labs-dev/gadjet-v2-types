/// <reference types="node" />
import { Receipts } from '../../model';
import { Cashbill } from '../../popbill/cash-bill';
import { TaxInvoiceBasic, TaxInvoiceInvoicee, TaxInvoiceInvoicer } from '../../popbill/tax-invoice';
import { Pagination, ReceiptSummary, Result } from '../../type';
import { ReceiptSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & ReceiptSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    receipts: Receipts[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    receiptId: number;
};
export type GET_DETAIL_RESPONSE = Receipts;
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = {
    query: string;
    requestDatetime: [string, string];
};
export type GET_SUMMARY_RESPONSE = ReceiptSummary;
export type EXPORT_RESPONSE = {
    data: Buffer;
    fileName: string;
};
export type ADD_TAX_INVOICE_PARAMS = PARAMS;
export type RESEND_TAX_INVOICE_BODY = {
    email: string;
};
export type ADD_TAX_INVOICE_BODY = {
    billId: number;
    taxInvoice: TaxInvoiceBasic & TaxInvoiceInvoicee & TaxInvoiceInvoicer;
};
export type ADD_TAX_INVOICE_RESPONSE = Result;
export type UPDATE_TAX_INVOICE_PARAMS = PARAMS & {
    receiptId: number;
};
export type UPDATE_TAX_INOVICE_BODY = {
    billId: number;
    taxInvoice: TaxInvoiceBasic & TaxInvoiceInvoicee & TaxInvoiceInvoicer;
};
export type UPDATE_TAX_INVOICE_RESPONSE = Result;
export type ADD_CASH_RECEIPT_PARAMS = PARAMS;
export type ADD_CASH_RECEIPT_BODY = {
    billId: number;
    cashReceipt: Cashbill;
};
export type ADD_CASH_RECEIPT_RESPONSE = Result;
export type CANCEL_CASH_RECEIPT_PARAMS = PARAMS & {
    receiptId: number;
};
export type CANCEL_CASH_RECEIPT_BODY = {
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
export type CANCEL_CASH_RECEIPT_RESPONSE = Result;
export type RESEND_RECEIPT_PARAMS = PARAMS & {
    receiptId: number;
};
export type RESEND_RECEIPT_BODY = {
    email: string;
};
export type RESEND_RECEIPT_RESPONSE = Result;
export type GET_POPUP_VIEW_PARAMS = PARAMS & {
    receiptId: number;
};
export type GET_POPUP_VIEW_RESPONSE = {
    url: string;
};
export {};
//# sourceMappingURL=receipt.d.ts.map
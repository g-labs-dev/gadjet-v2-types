import { Receipts } from '../../model';
import { Cashbill } from '../../popbill/cashbill';
import { Taxinvoice, TaxinvoiceModify } from '../../popbill/taxinvoice';
import { Pagination, ReceiptSummary } from '../../type';
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
    taxInvoice: Pick<Taxinvoice, 'writeDate' | 'taxType' | 'purposeType' | 'supplyCostTotal' | 'taxTotal' | 'totalAmount' | 'remark1' | 'invoicerMgtKey' | 'invoicerCorpNum' | 'invoicerTaxRegID' | 'invoicerCorpName' | 'invoicerCEOName' | 'invoicerAddr' | 'invoicerBizType' | 'invoicerBizClass' | 'invoicerContactName1' | 'invoicerDeptName1' | 'invoicerTEL1' | 'invoicerHP1' | 'invoicerEmail1' | 'invoicerContactName2' | 'invoicerDeptName2' | 'invoicerTEL2' | 'invoicerHP2' | 'invoicerEmail2' | 'invoiceeType' | 'invoiceeCorpNum' | 'invoiceeTaxRegID' | 'invoiceeCorpName' | 'invoiceeCEOName' | 'invoiceeAddr' | 'invoiceeBizType' | 'invoiceeBizClass' | 'invoiceeContactName1' | 'invoiceeDeptName1' | 'invoiceeTEL1' | 'invoiceeHP1' | 'invoiceeEmail1' | 'invoiceeContactName2' | 'invoiceeDeptName2' | 'invoiceeTEL2' | 'invoiceeHP2' | 'invoiceeEmail2' | 'detailList'>;
};
export declare type ADD_TAX_INVOICE_RESPONSE = Receipts;
export declare type UPDATE_TAX_INVOICE_PARAMS = PARAMS & {
    receiptId: number;
};
export declare type UPDATE_TAX_INOVICE_BODY = {
    billId: number;
    taxInvoice: Pick<TaxinvoiceModify, 'writeDate' | 'taxType' | 'purposeType' | 'supplyCostTotal' | 'taxTotal' | 'totalAmount' | 'remark1' | 'invoicerMgtKey' | 'invoicerCorpNum' | 'invoicerTaxRegID' | 'invoicerCorpName' | 'invoicerCEOName' | 'invoicerAddr' | 'invoicerBizType' | 'invoicerBizClass' | 'invoicerContactName1' | 'invoicerDeptName1' | 'invoicerTEL1' | 'invoicerHP1' | 'invoicerEmail1' | 'invoicerContactName2' | 'invoicerDeptName2' | 'invoicerTEL2' | 'invoicerHP2' | 'invoicerEmail2' | 'invoiceeType' | 'invoiceeCorpNum' | 'invoiceeTaxRegID' | 'invoiceeCorpName' | 'invoiceeCEOName' | 'invoiceeAddr' | 'invoiceeBizType' | 'invoiceeBizClass' | 'invoiceeContactName1' | 'invoiceeDeptName1' | 'invoiceeTEL1' | 'invoiceeHP1' | 'invoiceeEmail1' | 'invoiceeContactName2' | 'invoiceeDeptName2' | 'invoiceeTEL2' | 'invoiceeHP2' | 'invoiceeEmail2' | 'detailList' | 'modifyCode' | 'orgNTSConfirmNum'>;
};
export declare type UPDATE_TAX_INVOICE_RESPONSE = Receipts;
export declare type ADD_CASH_RECEIPT_PARAMS = PARAMS;
export declare type ADD_CASH_RECEIPT_BODY = {
    billId: number;
    cashReceipt: Pick<Cashbill, 'tradeType' | 'taxationType' | 'tradeUsage' | 'identityNum' | 'totalAmount' | 'supplyCost' | 'tax' | 'serviceFee' | 'franchiseCorpNum' | 'franchiseCorpName' | 'franchiseCEOName' | 'franchiseAddr' | 'franchiseTEL' | 'customerName' | 'itemName' | 'orderNumber' | 'email' | 'hp'>;
};
export declare type ADD_CASH_RECEIPT_RESPONSE = Receipts;
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
export declare type CANCEL_CASH_RECEIPT_RESPONSE = [number];
export {};
//# sourceMappingURL=receipt.d.ts.map
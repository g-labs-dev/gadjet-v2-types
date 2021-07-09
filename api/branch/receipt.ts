import { Receipts } from "../../model";
import { Pagination, ReceiptSummary } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 증빙 조회
// GET /hqs/0/branches/0/receipts
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; requestDatetime: [string, string] }; // requestDatetime 조회 시 시간 처리 필요 (requestDatetime 포맷은 YYYY-MM-DD HH:mm:ss / query는 YYYY-MM-DD 로)
export type GET_LIST_RESPONSE = Receipts[];
// ===========================

// 증빙 요약
// GET /hqs/0/branches/0/receipts/summary
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = { query: string; requestDatetime: [string, string] }; // requestDatetime 조회 시 시간 처리 필요 (requestDatetime 포맷은 YYYY-MM-DD HH:mm:ss / query는 YYYY-MM-DD 로)}
export type GET_SUMMARY_RESPONSE = ReceiptSummary;
// ===========================

// 세금계산서 발행
// POST /hqs/0/branches/0/receipts/tax-invoice
export type ADD_TAX_INVOICE_PARAMS = PARAMS;
export type ADD_TAX_INVOICE_BODY = {
  taxInvoice: {}; // @@@@ 팝빌 데이터 연동 필요
};
export type ADD_TAX_INVOICE_RESPONSE = Receipts;
// ===========================

// 세금계산서 수정발행
// PUT /hqs/0/branches/0/receipts/0/tax-invoice
export type UPDATE_TAX_INVOICE_PARAMS = PARAMS & { receiptId: number };
export type UPDATE_TAX_INOVICE_BODY = {
  taxInvoice: {}; // @@@@ 팝빌 데이터 연동 필요
};
export type UPDATE_TAX_INVOICE_RESPONSE = Receipts;
// ===========================

// 현금영수증 발행
// POST /hqs/0/branches/0/receipts/cash-receipt
export type ADD_CASH_RECEIPT_PARAMS = PARAMS;
export type ADD_CASH_RECEIPT_BODY = {
  cashReceipt: {}; // @@@@ 팝빌 데이터 연동 필요
};
export type ADD_CASH_RECEIPT_RESPONSE = Receipts;
// ===========================

// 현금영수증 취소
// DEL /hqs/0/branches/0/receipts/0/cash-receipt
export type DELETE_CASH_RECEIPT_PARAMS = PARAMS & { receiptId: number };
export type DELETE_CASH_RECEIPT_RESPONSE = [number];
// ===========================
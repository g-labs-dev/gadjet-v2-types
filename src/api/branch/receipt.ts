import { Receipts } from '../../model'
import { Cashbill } from '../../popbill/cash-bill'
import { TaxInvoiceBasic, TaxInvoiceInvoicee, TaxInvoiceInvoicer } from '../../popbill/tax-invoice'
import { Pagination, ReceiptSummary, Result } from '../../type'
import { ReceiptSearch } from '../../type/search'

type PARAMS = { hqId: number; branchId: number }

// 증빙 조회
// GET /hqs/0/branches/0/receipts
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & ReceiptSearch
export type GET_LIST_RESPONSE = { total: number; receipts: Receipts[] }
// ===========================

// 증빙 상세조회
// GET /hqs/0/branches/0/receipts/0
export type GET_DETAIL_PARAMS = PARAMS & { receiptId: number }
export type GET_DETAIL_RESPONSE = Receipts
// ===========================

// 증빙 요약
// GET /hqs/0/branches/0/receipts/summary
export type GET_SUMMARY_PARAMS = PARAMS
export type GET_SUMMARY_QUERY = { query: string; requestDatetime: [string, string] } // requestDatetime 조회 시 시간 처리 필요 (requestDatetime 포맷은 YYYY-MM-DD HH:mm:ss / query는 YYYY-MM-DD 로)}
export type GET_SUMMARY_RESPONSE = ReceiptSummary
// ===========================

// 증빙 내보내기
// GET /hqs/0/branches/0/receipts/export
export type EXPORT_RESPONSE = { data: Buffer; fileName: string }

// 세금계산서 발행
// POST /hqs/0/branches/0/receipts/tax-invoice
export type ADD_TAX_INVOICE_PARAMS = PARAMS
export type RESEND_TAX_INVOICE_BODY = { email: string }
export type ADD_TAX_INVOICE_BODY = {
  billId: number
  taxInvoice: TaxInvoiceBasic & TaxInvoiceInvoicee & TaxInvoiceInvoicer
}
export type ADD_TAX_INVOICE_RESPONSE = Result
// ===========================

// 세금계산서 수정발행
// PUT /hqs/0/branches/0/receipts/0/tax-invoice
export type UPDATE_TAX_INVOICE_PARAMS = PARAMS & { receiptId: number }
export type UPDATE_TAX_INOVICE_BODY = {
  billId: number
  taxInvoice: TaxInvoiceBasic & TaxInvoiceInvoicee & TaxInvoiceInvoicer
}
export type UPDATE_TAX_INVOICE_RESPONSE = Result
// ===========================

// 현금영수증 발행
// POST /hqs/0/branches/0/receipts/cash-receipt
export type ADD_CASH_RECEIPT_PARAMS = PARAMS
export type ADD_CASH_RECEIPT_BODY = {
  billId: number
  cashReceipt: Cashbill
}
export type ADD_CASH_RECEIPT_RESPONSE = Result
// ===========================

// 현금영수증 취소
// PUT /hqs/0/branches/0/receipts/0/cash-receipt
export type CANCEL_CASH_RECEIPT_PARAMS = PARAMS & { receiptId: number }
export type CANCEL_CASH_RECEIPT_BODY = {
  billId: number
  cashReceipt: {
    cancelType: 1 | 2 | 3
    isPartCancel: boolean
    supplyCost?: string
    tax?: string
    serviceFee?: string
    totalAmount?: string
  }
}
export type CANCEL_CASH_RECEIPT_RESPONSE = Result
// ===========================

// 세금계산서/현금영수증 이메일 재전송
// POST /hqs/0/branches/0/receipts/0/resend
export type RESEND_RECEIPT_PARAMS = PARAMS & { receiptId: number }
export type RESEND_RECEIPT_BODY = { email: string }
export type RESEND_RECEIPT_RESPONSE = Result
// ===========================

// 세금계산서/현금영수증 팝업뷰 조회
// GET /hqs/0/branches/0/receipts/0/popup
export type GET_POPUP_VIEW_PARAMS = PARAMS & { receiptId: number }
export type GET_POPUP_VIEW_RESPONSE = { url: string }

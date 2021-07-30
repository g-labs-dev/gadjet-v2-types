import { Payments } from "../../model";
import { Pagination, PaymentStatus, PaymentSummary, PaymentType } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 결제내역 조회
// GET /hqs/0/branches/0/payments
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; paymentType: PaymentType[]; paymentStatus: PaymentStatus[] };
export type GET_LIST_RESPONSE = { total: number; payments: Payments[] };
// ===========================

// 결제내역 요약
// GET /hqs/0/branches/0/payments
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = { query: string; paymentType: PaymentType[]; };
export type GET_SUMMARY_RESPONSE = PaymentSummary;
// ===========================

// 결제내역 내보내기
// GET /hqs/0/branches/0/payments
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = { query: string; paymentType: PaymentType[]; paymentStatus: PaymentStatus[] };
export type EXPORT_RESPONSE = any; // @@@@ xlsx
// ===========================

// 결제내역 매출확정
// PUT /hqs/0/branches/0/payments/0/confirm
export type CONFIRM_PARAMS = PARAMS & { paymentId: number };
export type CONFIRM_RESPONSE = [number];
// ===========================

// 결제내역 환불
// PUT /hqs/0/branches/0/payments/0/refund
export type REFUND_PARAMS = PARAMS & { paymentId: number };
export type REFUND_RESPONSE = [number];
// ===========================

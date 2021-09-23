import { Bills } from "../../model";
import {} from "../../type";

type PARAMS = { billId: number };

// 청구서 상세조회
// GET /bills/0
export type GET_BILL_DETAIL_PARAMS = PARAMS;
export type GET_BILL_DETAIL_RESPONSE = { bill: Bills };
// ===========================

// 결제관련 추가 필요
// GET /bills/0/payments
// ===========================

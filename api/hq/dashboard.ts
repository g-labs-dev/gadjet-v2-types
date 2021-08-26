import { Bills, Contracts, Spaces } from "../../model";
import { Pagination } from "../../type";

type PARAMS = { hqId: number };

// 최근 추가된 계약 조회 (20개)
// GET /hqs/0/dashboard/contracts/recent
export type DASHBOARD_CONTRACT_RECENT_PARAMS = PARAMS;
export type DASHBOARD_CONTRACT_RECENT_QUERY = { pageSize: number };
export type DASHBOARD_CONTRACT_RECENT_RESPONSE = Contracts[];
/**
 * order by startDate desc
 */
// ===========================

// 전 지점 계약 검색
// GET /hqs/0/dashboard/contracts/search
export type DASHBOARD_CONTRACT_SEARCH_PARAMS = PARAMS;
export type DASHBOARD_CONTRACT_SEARCH_QUERY = Pagination & { query: string };
export type DASHBOARD_CONTRACT_SEARCH_RESPONSE = { total: number; contracts: Contracts[] };
// ===========================

// 시작계약
// GET /hqs/0/dashboard/contracts/start
export type DASHBOARD_CONTRACT_START_PARAMS = PARAMS;
export type DASHBOARD_CONTRACT_START_QUERY = { date: string };
export type DASHBOARD_CONTRACT_START_RESPONSE = Contracts[];
// ===========================

// 종료계약
// GET /hqs/0/dashboard/contracts/end
export type DASHBOARD_CONTRACT_END_PARAMS = PARAMS;
export type DASHBOARD_CONTRACT_END_QUERY = { date: string };
export type DASHBOARD_CONTRACT_END_RESPONSE = Contracts[];
// ===========================

// 미납 청구서
// GET /hqs/0/dashboard/bills/unpaid
export type DASHBOARD_BILL_UNPAID_PARAMS = PARAMS;
export type DASHBOARD_BILL_UNPAID_QUERY = { date: string };
export type DASHBOARD_BILL_UNPAID_RESPONSE = Bills[];
/**
 * Bills.paymentEndDate < date && Bills.unpaid > 0
 */
// ===========================

// 전 지점 공간 조회
// GET /hqs/0/dashboard/spaces
export type DASHBOARD_SPACE_PARAMS = PARAMS;
export type DASHBOARD_SPACE_QUERY = { date: string };
export type DASHBOARD_SPACE_RESPONSE = Spaces[];
/**
 * Bills.contracts = Contracts.suspendDate > date
 */
// ===========================

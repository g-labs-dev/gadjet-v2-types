import { Bills, Contracts, Spaces } from '../../model'
import { Pagination } from '../../type'

type PARAMS = { hqId: number }

// 전 지점 계약 검색
// GET /hqs/0/dashboard/contracts/search
export type SEARCH_CONTRACT_PARAMS = PARAMS
export type SEARCH_CONTRACT_QUERY = Pagination & { query: string }
export type SEARCH_CONTRACT_RESPONSE = { total: number; contracts: Contracts[] }
// ===========================

// 시작 전 계약 조회
// GET /hqs/0/dashboard/contracts/before-start
export type GET_BEFORE_START_CONTRACT_PARAMS = PARAMS
export type GET_BEFORE_START_CONTRACT_QUERY = { date: string }
export type GET_BEFORE_START_CONTRACT_RESPONSE = Contracts[]
// ===========================

// 시작계약
// GET /hqs/0/dashboard/contracts/start
export type GET_START_CONTRACT_PARAMS = PARAMS
export type GET_START_CONTRACT_QUERY = { date: string }
export type GET_START_CONTRACT_RESPONSE = Contracts[]
// ===========================

// 종료계약
// GET /hqs/0/dashboard/contracts/end
export type GET_END_CONTRACT_PARAMS = PARAMS
export type GET_END_CONTRACT_QUERY = { date: string }
export type GET_END_CONTRACT_RESPONSE = Contracts[]
// ===========================

// 미납 청구서
// GET /hqs/0/dashboard/bills/unpaid
export type GET_UNPAID_BILL_PARAMS = PARAMS
export type GET_UNPAID_BILL_QUERY = { date: string }
export type GET_UNPAID_BILL_RESPONSE = Bills[]
/**
 * Bills.paymentEndDate < date && Bills.unpaid > 0
 */
// ===========================

// 전 지점 공간 조회
// GET /hqs/0/dashboard/spaces
export type GET_SPACE_PARAMS = PARAMS
export type GET_SPACE_QUERY = { date: string }
export type GET_SPACE_RESPONSE = Spaces[]
/**
 * Bills.contracts = Contracts.suspendDate > date
 */
// ===========================

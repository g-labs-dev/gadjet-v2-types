import { BranchCards, BranchGadjetService, BranchGadjetServiceLog } from '../../model'
import { BillingApproveResponseData, BillingCard, Result } from '../../type'

type PARAMS = { hqId: number; branchId: number }

// 이용중인 가젯 서비스 조회
// GET /hqs/0/branches/0/gadjetService
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = {}
export type GET_LIST_RESPONSE = { total: number; branchGadjetService: BranchGadjetService[] }
// ===========================

// 가젯서비스로그 리스트 조회
// GET /hqs/0/branches/0/gadjetService/0/logs
export type GET_LOG_LIST_PARAMS = PARAMS
export type GET_LOG_LIST_QUERY = {}
export type GET_LOG_LIST_RESPONSE = { total: number; branchGadjetServiceLog: BranchGadjetServiceLog[] }
// ===========================

// 가젯서비스로그 상세 조회
// DELETE /hqs/0/branches/0/gadjetService/0/log/0
export type DELETE_PARAMS = PARAMS & { branchGadjetServiceLogId: number }
export type DELETE_RESPONSE = BranchGadjetServiceLog
// ===========================

// 가젯서비스 이용하기
// GET /hqs/0/branches/0/gadjetService/
export type ADD_PARAMS = PARAMS
export type ADD_BODY = { branchGadjetService: Partial<BranchGadjetService> } & Result
export type ADD_RESPONSE = BranchGadjetService
// ===========================

// 가젯 서비스 해지하기.
// PUT /hqs/0/branches/0/gadjetService/0
export type TERMINATE_PARAMS = PARAMS & { branchGadjetServiceId: number }
export type TERMINATE_BODY = { branchGadjetService: Partial<BranchGadjetService> }
export type TERMINATE_RESPONSE = Result
// ===========================

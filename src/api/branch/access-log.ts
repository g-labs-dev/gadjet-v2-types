import { AccessLogs } from '../../model'
import { Pagination } from '../../type'
import { AccessLogSearch } from '../../type/search'

type PARAMS = { hqId: number; branchId: number }

// 접근기록 조회
// GET /hqs/0/branches/0/access-logs
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & AccessLogSearch
export type GET_LIST_RESPONSE = { total: number; accessLogs: AccessLogs[] }
// ===========================

// 접근기록 추가
// POST /hqs/0/branches/0/access-logs
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  accessLog: Partial<AccessLogs>
}
export type ADD_RESPONSE = AccessLogs
// ===========================

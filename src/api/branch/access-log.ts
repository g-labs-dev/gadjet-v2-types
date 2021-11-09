import { AccessLogs } from '../../model'
import { Pagination } from '../../type'

type PARAMS = { hqId: number; branchId: number }

// 접근기록 조회
// GET /hqs/0/branches/0/access-logs
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & { datetime: [string, string] }
export type GET_LIST_RESPONSE = { total: number; accessLogs: AccessLogs[] }
// ===========================

// 접근기록 추가
// POST /hqs/0/branches/0/access-logs
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  accessLog: Pick<AccessLogs, 'managerId' | 'managerName' | 'title' | 'url' | 'successFlag'>
}
export type ADD_RESPONSE = AccessLogs
// ===========================

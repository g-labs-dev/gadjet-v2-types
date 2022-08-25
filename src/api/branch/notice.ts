import { Notices } from '../../model'
import { Pagination } from '../../type'
import { NoticeSearch } from '../../type/search'

type PARAMS = { hqId: number; branchId: number }

// 공지사항 조회
// GET /hqs/0/branches/0/notices
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & NoticeSearch
export type GET_LIST_RESPONSE = { total: number; notices: Notices[] } // content 제외
// ===========================

// 공지사항 상세 조회
// GET /hqs/0/branches/0/notices/0
export type GET_DETAIL_PARAMS = PARAMS & { noticeId: number }
export type GET_DETAIL_RESPONSE = Notices
// ===========================

// 공지사항 추가
// POST /hqs/0/branches/0/notices
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  notice: Partial<Notices>
}
export type ADD_RESPONSE = Notices
// ===========================

// 공지사항 수정
// PUT /hqs/0/branches/0/notices/0
export type UPDATE_PARAMS = PARAMS & { noticeId: number }
export type UPDATE_BODY = {
  notice: Partial<Notices>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 공지사항 제거
// GET /hqs/0/branches/0/notices/0
export type DELETE_PARAMS = PARAMS & { noticeId: number }
export type DELETE_RESPONSE = [number]
// ===========================

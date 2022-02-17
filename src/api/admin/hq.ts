import { Hqs } from '../../model'
import {} from '../../type'

type PARAMS = { hqId: number }

// 운영사 전체 리스트 조회
// GET /hqs
export type GET_LIST_PARAMS = {}
export type GET_LIST_RESPONSE = Hqs[]
// ===========================

// 운영사 조회
// GET /hqs/0
export type GET_DETAIL_PARAMS = PARAMS
export type GET_DETAIL_RESPONSE = Hqs
// ===========================

// 운영사 추가
// POST /hqs
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  hq: Partial<Hqs>
}
export type ADD_RESPONSE = Hqs
// ===========================

// 운영사 수정
// POST /hqs/0
export type UPDATE_PARAMS = PARAMS
export type UPDATE_BODY = {
  hq: Partial<Hqs>
}
export type UPDATE_RESPONSE = Hqs
// ===========================

// 운영사 삭제
// DELETE/hqs/0
export type DELETE_PARAMS = PARAMS
export type DELETE_RESPONSE = [number]
// ===========================

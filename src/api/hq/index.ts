import { Hqs } from '../../model'
import {} from '../../type'

type PARAMS = { hqId: number }

// 운영사 조회
// /hqs/0
export type GET_DETAIL_PARAMS = PARAMS
export type GET_DETAIL_RESPONSE = Hqs
// ===========================

// 운영사 수정
// /hqs/0
export type UPDATE_PARAMS = PARAMS
export type UPDATE_BODY = {
  hq: Partial<Hqs>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 운영사 추가
// /hqs/
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  hq: Partial<Hqs>
}
export type ADD_RESPONSE = Hqs
// ===========================

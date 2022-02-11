import { Hqs } from '../../model'
import {} from '../../type'

type PARAMS = { hqId: number }

// 운영사 조회
// /hqs/0
export type GET_PARAMS = { name: string }
export type GET_RESPONSE = Hqs[]
// ===========================

export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  hq: Partial<Hqs>
}
export type ADD_RESPONSE = Hqs

// 운영사 수정
// /hqs/0
export type UPDATE_PARAMS = PARAMS
export type UPDATE_BODY = {
  hq: Partial<Hqs>
}
export type UPDATE_RESPONSE = [number]

export type DELETE_PARAMS = PARAMS
export type DELETE_RESPONSE = [number]
// ===========================

import { Floors } from '../../model'

type PARAMS = { hqId: number; branchId: number }

// 층 조회
// GET /hqs/0/branches/0/floors
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_RESPONSE = Floors[]
// ===========================

// 층 추가
// POST /hqs/0/branches/0/floors
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  floor: Partial<Floors>
}
export type ADD_RESPONSE = Floors
// ===========================

// 층 수정
// PUT /hqs/0/branches/0/floors/0
export type UPDATE_PARAMS = PARAMS & { floorId: number }
export type UPDATE_BODY = {
  floor: Partial<Floors>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 층 제거
// DEL /hqs/0/branches/0/floors/0
export type DELETE_PARAMS = PARAMS & { floorId: number }
export type DELETE_RESPONSE = [number]
// ===========================

import { SpaceTypes } from '../../model'

type PARAMS = { hqId: number; branchId: number }

// 공간타입 조회
// GET /hqs/0/branches/0/space-types
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_RESPONSE = SpaceTypes[]
// ===========================

// 공간타입 추가
// POST /hqs/0/branches/0/space-types
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  spaceType: Partial<SpaceTypes>
}
export type ADD_RESPONSE = SpaceTypes
// ===========================

// 공간타입 수정
// PUT /hqs/0/branches/0/space-types/0
export type UPDATE_PARAMS = PARAMS & { spaceTypeId: number }
export type UPDATE_BODY = {
  spaceType: Partial<SpaceTypes>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 공간타입 제거
// DEL /hqs/0/branches/0/space-types/0
export type DELETE_PARAMS = PARAMS & { spaceTypeId: number }
export type DELETE_RESPONSE = [number]
// ===========================

// 공간타입 공간 계약 상태
// GET /hqs/0/branches/0/space-types/spaces/contracts
export type GET_SPACES_CONTRACTS_PARAMS = PARAMS
export type GET_SPACES_CONTRACTS_QUERY = { date: string }
export type GET_SPACES_CONTRACTS_RESPONSE = SpaceTypes[]
/**
 * 공간타입 + 공간 + 계약
 * 공간타입 별 공간 계약 상태확인 목적
 * date < contractEnd 인 계약 조회
 */
// ===========================

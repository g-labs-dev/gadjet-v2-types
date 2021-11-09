import { Branches } from '../../model'
import {} from '../../type'

type PARAMS = { hqId: number }

// 운영사 지점 목록 조회
// GET /hqs/0/branches
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = {}
export type GET_LIST_RESPONSE = Branches[]
// ===========================

// 운영사 지점 추가
// POST /hqs/0/branches
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  branch: Pick<Branches, 'name' | 'contact' | 'email' | 'zipcode' | 'address' | 'addressDetail'>
}
export type ADD_RESPONSE = Branches
// ===========================

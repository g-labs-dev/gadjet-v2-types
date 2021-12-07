import { Rentals } from '../../model'
import { Pagination } from '../../type'

type PARAMS = { hqId: number }

// 운영사 대관/대여 목록 조회
// GET /hqs/0/rentals
export type GET_RENTALS_PARAMS = PARAMS
export type GET_RENTALS_QUERY = Pagination & {}
export type GET_RENTALS_RESPONSE = { total: number; rentals: Rentals[] }
// ===========================

import { Branches, Contracts, EventAttendees, Events, Hqs, TenantRoles, Tenants, Users } from '../../model'
import { Pagination, Result, UsedCreditAmount } from '../../type'

type PARAMS = { userId: number }

// 비밀번호 변경
// PUT /users/0/password
export type UPDATE_PASSWORD_PARAMS = PARAMS
export type UPDATE_PASSWORD_BODY = { user: { password: string } }
export type UPDATE_PASSWORD_RESPONSE = [number]
// ===========================

// 회원정보 수정
// PUT /users/0
export type UPDATE_PARAMS = PARAMS
export type UPDATE_BODY = { user: Partial<Users> }
export type UPDATE_RESPONSE = [number]
// ===========================

// 권한 조회
// GET /users/0/roles
export type GET_ROLE_PARAMS = PARAMS
export type GET_ROLE_RESPONSE = { roles: TenantRoles[] }
// ===========================

// 참가한 이벤트 조회
// GET /users/0/events
export type GET_EVENTS_PARAMS = PARAMS
export type GET_EVENTS_QUERY = Pagination
export type GET_EVENTS_RESPONSE = { total: number; events: Events[] }

// 이벤트 참가
// POST /users/0/events/0/attend
export type ATTEND_EVENT_PARAMS = PARAMS & { eventId: number }
export type ATTEND_EVENT_BODY = { tenantId: number; usedCreditAmount: UsedCreditAmount } // TODO 일단 진행 / 크레딧-이벤트-입주사-유저 관계 명확하게 할 필요가 있음.
export type ATTEND_EVENT_RESPONSE = { eventAttendee: EventAttendees }
// ===========================

// 이벤트 참가 취소
// DELETE /users/0/events/0/attendee/0
export type CANCEL_ATTEND_EVENT_PARAMS = PARAMS & { eventId: number; eventAttendeeId: number }
export type CANCEL_ATTEND_EVENT_RESPONSE = [number]
// ===========================

// 입주사 목록
// GET /users/0/tenants
export type GET_TENANTS_PARAMS = PARAMS
export type GET_TENANTS_QUERY = Pagination
export type GET_TENANTS_RESPONSE = { total: number; tenants: Tenants[] }
// ===========================

// 내 생태 조회
// GET /users/0/state
export type GET_STATE_PARAMS = PARAMS
export type GET_STATE_RESPONSE = {
  state: { contracts: Contracts[]; tenants: Tenants[]; branches: Branches[]; hqs: Hqs[] }
}
// ===========================

// 초대수락 (초대코드 입력)
// POST /users/0/invite-code/receive
export type RECEIVE_INVITE_PARAMS = PARAMS
export type RECEIVE_INVITE_BODY = { code: string }
export type RECEIVE_INVITE_RESPONSE = { tenantRole: TenantRoles } & Result
// ===========================

// 푸시토큰 업데이트
// PUT /users/0/push-tokens
export type UPDATE_PUSH_TOKEN_PARAMS = PARAMS
export type UPDATE_PUSH_TOKEN_BODY = { pushToken: string }
export type UPDATE_PUSH_TOKEN_RESPONSE = [number]
// ===========================

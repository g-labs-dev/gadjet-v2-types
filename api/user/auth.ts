import { Users } from "../../model";
import {} from "../../type";

/**
 * 이용자 로그인 아이디는 전화번호, 이메일 둘다 사용 가능
 */

type PARAMS = {};

// 인증정보 조회 (토큰으로 조회)
// GET /users/auth
export type GET_PARAMS = PARAMS;
export type GET_RESPONSE = Users | null;
// ===========================

// 로그인
// POST /users/login
export type LOGIN_PARAMS = PARAMS;
export type LOGIN_BODY = { user: { id: string; password: string } };
export type LOGIN_RESPONSE = { token: string; user: Users | null };
/**
 * id = contact or email
 */
// ===========================

// 회원가입
// POST /users/join
export type JOIN_PARAMS = PARAMS;
export type JOIN_BODY = {
  user: { type: "email" | "contact"; id: string; password: string; name: string };
};
export type JOIN_RESPONSE = { token: string; user: Users | null };
// ===========================

// 유저 인증코드 발송
// POST /users/code
export type SEND_AUTH_CODE_PARAMS = PARAMS;
export type SEND_AUTH_CODE_BODY = { id: string };
export type SEND_AUTH_CODE_RESPONSE = { code: string };
/**
 * Users.findOne({ where: { email }}) 또는 Users.findOne({ where: { contact }})
 * 없으면 에러
 */
// ===========================

// 인증 코드로 비밀번호 수정
// PUT /users/code/0/password
export type RESET_PASSWORD_PARAMS = PARAMS & { code: string };
export type RESET_PASSWORD_BODY = { password: string };
export type RESET_PASSWORD_RESPONSE = [number];
/**
 * Users.update({ password },{ where: { code } })
 */
// ===========================

// 회원 이전 => 방식 고민 중
export type MIGRATE_PARAMS = PARAMS;
export type MIGRATE_BODY = {};
export type MIGRATE_RESPONSE = [number];
// ===========================

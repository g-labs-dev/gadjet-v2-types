import { Managers } from "../../model";
import {} from "../../type";

type PARAMS = {};

// 인증정보 조회 (토큰으로 조회)
// GET /managers/auth
export type GET_PARAMS = PARAMS;
export type GET_RESPONSE = Managers | null;
// ===========================

// 회원가입
// POST /managers/join
export type JOIN_PARAMS = PARAMS;
export type JOIN_BODY = {
  manager: Pick<Managers, "email" | "password" | "name" | "joinType" | "socialId" | "profileImageId">;
};
export type JOIN_RESPONSE = { token: string; manager: Managers | null };
// ===========================

// 로그인
// POST /managers/login
export type LOGIN_PARAMS = PARAMS;
export type LOGIN_BODY = {
  manager: Pick<Managers, "email" | "password">;
};
export type LOGIN_RESPONSE = { token: string; manager: Managers | null };
// ===========================

// 소셜 로그인
// POST /managers/social-login
export type SOCIAL_LOGIN_PARAMS = PARAMS;
export type SOCIAL_LOGIN_BODY = {
  manager: Pick<Managers, "socialId">;
};
export type SOCIAL_LOGIN_RESPONSE = { token: string; manager: Managers | null };
// ===========================

// 회정정보수정
// PUT /managers/0
export type UPDATE_PARAMS = PARAMS & { managerId: number };
export type UPDATE_BODY = {
  manager: Pick<Managers, "name" | "profileImageId">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 비밀번호 수정
// PUT /managers/0/password
export type UPDATE_PASSWORD_PARAMS = PARAMS & { managerId: number };
export type UPDATE_PASSWORD_BODY = {
  manager: Pick<Managers, "password">;
};
export type UPDATE_PASSWORD_RESPONSE = [number];
// ===========================

// 소셜계정 연동 수정
// PUT /managers/0/social
export type UPDATE_SOCIAL_PARAMS = PARAMS & { managerId: number };
export type UPDATE_SOCIAL_BODY = {
  manager: Pick<Managers, "socialId">;
};
export type UPDATE_SOCIAL_RESPONSE = [number];
// ===========================

// 푸시토큰 수정
// PUT /managers/0/push-token
export type UPDATE_PUSH_TOKEN_PARAMS = PARAMS & { managerId: number };
export type UPDATE_PUSH_TOKEN_BODY = { pushToken: string };
export type UPDATE_PUSH_TOKEN_RESPONSE = [number];
// ===========================

// 이메일 사용가능 확인
// GET /email/verify
export type EMAIL_VERIFY_PARAMS = {};
export type EMAIL_VERIFY_QUERY = { email: string };
export type EMAIL_VERIFY_RESPONSE = boolean; // true 사용 가능
// ===========================

// 이메일 코드검증
// POST /email/code
export type EMAIL_CODE_PARAMS = {};
export type EMAIL_CODE_BODY = { email: string };
export type EMAIL_CODE_RESPONSE = string; // 이메일에 발송 된 코드
// ===========================

// 비밀번호 재설정 링크 발송
// POST /email/password
export type RESET_PASSWORD_LINK_PARAMS = {};
export type RESET_PASSWORD_LINK_BODY = { email: string };
export type RESET_PASSWORD_LINK_RESPONSE = boolean;
/* 
  - Managers.joinType === 'local' 이면 재설정 가능
  - body의 이메일로 링크포함 전달
  - 링크샘플 https://console.gadjet.io/reset-password?key=$$$$
  - 비밀번호 수정 api 요청 시 $$$$과 수정 할 비밀번호 전달
  - 서버에서 $$$$로 매니저를 찾아야함 (AES ??)
*/
// ===========================

// 비밀번호 재설정
// PUT /password
export type RESET_PASSWORD_PARAMS = {};
export type RESET_PASSWORD_BODY = {
  key: string;
  password: string;
};
export type RESET_PASSWORD_RESPONSE = boolean;
/*
  - 비밀번호 재설정 링크 발송 참고
*/
// ===========================

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
export type JOIN_RESPONSE = Managers;
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

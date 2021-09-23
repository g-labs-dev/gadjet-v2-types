import { TenantRoles, Users } from "../../model";
import {} from "../../type";

type PARAMS = { userId: number };

// 비밀번호 변경
// PUT /users/0/password
export type UPDATE_PASSWORD_PARAMS = PARAMS;
export type UPDATE_PASSWORD_BODY = { user: { password: string } };
export type UPDATE_PASSWORD_RESPONSE = [number];
// ===========================

// 회원정보 수정
// PUT /users/0
export type UPDATE_PARAMS = PARAMS;
export type UPDATE_BODY = { user: Partial<Users> };
export type UPDATE_RESPONSE = [number];
// ===========================

// 권한 조회
// GET /users/0/roles
export type GET_ROLE_PARAMS = PARAMS;
export type GET_ROLE_RESPONSE = { roles: TenantRoles[] };
// ===========================

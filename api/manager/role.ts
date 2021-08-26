import { Branches, Hqs } from "../../model";
import {} from "../../type";

type PARAMS = { managerId: number };

// 권한 조회
// GET /managers/0/roles
export type GET_PARAMS = PARAMS;
export type GET_RESPONSE = { hqs: Hqs[]; branches: Branches[] };
// ===========================

// 권한 초대 수락
// POST /managers/0/roles/accept
export type INVITE_ACCEPT_PARAMS = PARAMS;
export type INVITE_ACCEPT_BODY = { code: string };
export type INVITE_ACCEPT_RESPONSE = boolean;
/**
 * ManagerInviteCodes.managerInviteCode ==== code
 * 권한 추가
 */
// ===========================

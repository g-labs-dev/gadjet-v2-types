import { Branches, Hqs } from '../../model';
type PARAMS = {
    managerId: number;
};
export type GET_PARAMS = PARAMS;
export type GET_RESPONSE = {
    hqs: Hqs[];
    branches: Branches[];
};
export type INVITE_ACCEPT_PARAMS = PARAMS;
export type INVITE_ACCEPT_BODY = {
    code: string;
};
export type INVITE_ACCEPT_RESPONSE = boolean;
export {};
/**
 * ManagerInviteCodes.managerInviteCode ==== code
 * 권한 추가
 */
//# sourceMappingURL=role.d.ts.map
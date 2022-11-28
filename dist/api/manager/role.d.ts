import { Branches, Hqs } from '../../model';
declare type PARAMS = {
    managerId: number;
};
export declare type GET_PARAMS = PARAMS;
export declare type GET_RESPONSE = {
    hqs: Hqs[];
    branches: Branches[];
};
export declare type INVITE_ACCEPT_PARAMS = PARAMS;
export declare type INVITE_ACCEPT_BODY = {
    code: string;
};
export declare type INVITE_ACCEPT_RESPONSE = boolean;
export {};
/**
 * ManagerInviteCodes.managerInviteCode ==== code
 * 권한 추가
 */
//# sourceMappingURL=role.d.ts.map
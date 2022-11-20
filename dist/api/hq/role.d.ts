import { HqRoles } from '../../model';
type PARAMS = {
    hqId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_RESPONSE = HqRoles[];
export type GET_DETAIL_PARAMS = PARAMS & {
    hqRoleId: number;
};
export type GET_DETAIL_RESPONSE = HqRoles;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    role: Partial<HqRoles>;
};
export type ADD_RESPONSE = HqRoles;
export type UPDATE_PARAMS = PARAMS & {
    hqRoleId: number;
};
export type UPDATE_BODY = {
    role: Partial<HqRoles>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    hqRoleId: number;
};
export type DELETE_RESPONSE = [number];
export type INVITE_PARAMS = PARAMS;
export type INVITE_BODY = {
    email: string;
    hqRole: Partial<HqRoles>;
};
export type INVITE_RESPONSE = boolean;
export {};
//# sourceMappingURL=role.d.ts.map
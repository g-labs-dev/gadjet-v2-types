import { HqRoles } from '../../model';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_RESPONSE = HqRoles[];
export declare type GET_DETAIL_PARAMS = PARAMS & {
    hqRoleId: number;
};
export declare type GET_DETAIL_RESPONSE = HqRoles;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    role: Partial<HqRoles>;
};
export declare type ADD_RESPONSE = HqRoles;
export declare type UPDATE_PARAMS = PARAMS & {
    hqRoleId: number;
};
export declare type UPDATE_BODY = {
    role: Partial<HqRoles>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    hqRoleId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type INVITE_PARAMS = PARAMS;
export declare type INVITE_BODY = {
    email: string;
    hqRole: Partial<HqRoles>;
};
export declare type INVITE_RESPONSE = boolean;
export {};
//# sourceMappingURL=role.d.ts.map
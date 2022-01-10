import { BranchRoles } from '../../model';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_RESPONSE = BranchRoles[];
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    role: BranchRoles;
};
export declare type ADD_RESPONSE = BranchRoles;
export declare type UPDATE_PARAMS = PARAMS & {
    branchRoleId: number;
};
export declare type UPDATE_BODY = {
    role: BranchRoles;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    branchRoleId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type INVITE_PARAMS = PARAMS;
export declare type INVITE_BODY = {
    email: string;
    hqRole: Partial<BranchRoles>;
};
export declare type INVITE_RESPONSE = boolean;
export {};
//# sourceMappingURL=role.d.ts.map
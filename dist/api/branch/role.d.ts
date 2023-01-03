import { BranchRoles } from '../../model';
import { Pagination } from '../../type';
import { BranchRoleSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS & BranchRoleSearch;
export type GET_LIST_QUERY = Pagination & {
    query: string;
};
export type GET_LIST_RESPONSE = {
    total: number;
    branchRoles: BranchRoles[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    branchRoleId: number;
};
export type GET_DETAIL_RESPONSE = BranchRoles;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    role: BranchRoles;
};
export type ADD_RESPONSE = BranchRoles;
export type UPDATE_PARAMS = PARAMS & {
    branchRoleId: number;
};
export type UPDATE_BODY = {
    role: BranchRoles;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    branchRoleId: number;
};
export type DELETE_RESPONSE = [number];
export type INVITE_PARAMS = PARAMS;
export type INVITE_BODY = {
    email: string;
    branchRole: Partial<BranchRoles>;
};
export type INVITE_RESPONSE = boolean;
export {};
//# sourceMappingURL=role.d.ts.map
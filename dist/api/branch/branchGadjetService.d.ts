import { BranchGadjetService, BranchGadjetServiceLog } from '../../model';
import { Result } from '../../type';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = {};
export type GET_LIST_RESPONSE = {
    total: number;
    branchGadjetService: BranchGadjetService[];
};
export type GET_LOG_LIST_PARAMS = PARAMS;
export type GET_LOG_LIST_QUERY = {};
export type GET_LOG_LIST_RESPONSE = {
    total: number;
    branchGadjetServiceLog: BranchGadjetServiceLog[];
};
export type DELETE_PARAMS = PARAMS & {
    branchGadjetServiceLogId: number;
};
export type DELETE_RESPONSE = BranchGadjetServiceLog;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    branchGadjetService: Partial<BranchGadjetService>;
};
export type ADD_RESPONSE = {
    branchGadjetService: BranchGadjetService;
} & Result;
export type TERMINATE_PARAMS = PARAMS & {
    branchGadjetServiceId: number;
};
export type TERMINATE_BODY = {
    branchGadjetService: Partial<BranchGadjetService>;
};
export type TERMINATE_RESPONSE = Result;
export {};
//# sourceMappingURL=branchGadjetService.d.ts.map
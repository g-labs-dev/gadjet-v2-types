import { BranchGadjetService, BranchGadjetServiceLog } from '../../model';
import { Result } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = {};
export declare type GET_LIST_RESPONSE = {
    total: number;
    branchGadjetService: BranchGadjetService[];
};
export declare type GET_LOG_LIST_PARAMS = PARAMS;
export declare type GET_LOG_LIST_QUERY = {};
export declare type GET_LOG_LIST_RESPONSE = {
    total: number;
    branchGadjetServiceLog: BranchGadjetServiceLog[];
};
export declare type DELETE_PARAMS = PARAMS & {
    branchGadjetServiceLogId: number;
};
export declare type DELETE_RESPONSE = BranchGadjetServiceLog;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    branchGadjetService: Partial<BranchGadjetService> & Result;
};
export declare type ADD_RESPONSE = BranchGadjetService;
export declare type TERMINATE_PARAMS = PARAMS & {
    branchGadjetServiceId: number;
};
export declare type TERMINATE_BODY = {
    branchGadjetService: Partial<BranchGadjetService>;
};
export declare type TERMINATE_RESPONSE = Result;
export {};
//# sourceMappingURL=branchGadjetService.d.ts.map
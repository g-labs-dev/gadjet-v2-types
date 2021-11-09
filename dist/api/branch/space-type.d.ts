import { SpaceTypes } from '../../model';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_RESPONSE = SpaceTypes[];
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    spaceType: Pick<SpaceTypes, 'name' | 'virtualFlag'>;
};
export declare type ADD_RESPONSE = SpaceTypes;
export declare type UPDATE_PARAMS = PARAMS & {
    spaceTypeId: number;
};
export declare type UPDATE_BODY = {
    spaceType: Pick<SpaceTypes, 'name' | 'virtualFlag'>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    spaceTypeId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_SPACES_CONTRACTS_PARAMS = PARAMS;
export declare type GET_SPACES_CONTRACTS_QUERY = {
    date: string;
};
export declare type GET_SPACES_CONTRACTS_RESPONSE = SpaceTypes[];
export {};
/**
 * 공간타입 + 공간 + 계약
 * 공간타입 별 공간 계약 상태확인 목적
 * date < contractEnd 인 계약 조회
 */
//# sourceMappingURL=space-type.d.ts.map
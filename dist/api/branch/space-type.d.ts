import { SpaceTypes } from '../../model';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_RESPONSE = SpaceTypes[];
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    spaceType: Partial<SpaceTypes>;
};
export type ADD_RESPONSE = SpaceTypes;
export type UPDATE_PARAMS = PARAMS & {
    spaceTypeId: number;
};
export type UPDATE_BODY = {
    spaceType: Partial<SpaceTypes>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    spaceTypeId: number;
};
export type DELETE_RESPONSE = [number];
export type GET_SPACES_CONTRACTS_PARAMS = PARAMS;
export type GET_SPACES_CONTRACTS_QUERY = {
    date: string;
};
export type GET_SPACES_CONTRACTS_RESPONSE = SpaceTypes[];
export {};
/**
 * 공간타입 + 공간 + 계약
 * 공간타입 별 공간 계약 상태확인 목적
 * date < contractEnd 인 계약 조회
 */
//# sourceMappingURL=space-type.d.ts.map
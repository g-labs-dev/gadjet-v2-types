import { Floors } from '../../model';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_RESPONSE = Floors[];
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    floor: Partial<Floors>;
};
export type ADD_RESPONSE = Floors;
export type UPDATE_PARAMS = PARAMS & {
    floorId: number;
};
export type UPDATE_BODY = {
    floor: Partial<Floors>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    floorId: number;
};
export type DELETE_RESPONSE = [number];
export {};
//# sourceMappingURL=floor.d.ts.map
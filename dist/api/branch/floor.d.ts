import { Floors } from '../../model'
declare type PARAMS = {
  hqId: number
  branchId: number
}
export declare type GET_LIST_PARAMS = PARAMS
export declare type GET_LIST_RESPONSE = Floors[]
export declare type ADD_PARAMS = PARAMS
export declare type ADD_BODY = {
  floor: Partial<Floors>
}
export declare type ADD_RESPONSE = Floors
export declare type UPDATE_PARAMS = PARAMS & {
  floorId: number
}
export declare type UPDATE_BODY = {
  floor: Partial<Floors>
}
export declare type UPDATE_RESPONSE = [number]
export declare type DELETE_PARAMS = PARAMS & {
  floorId: number
}
export declare type DELETE_RESPONSE = [number]
export {}
//# sourceMappingURL=floor.d.ts.map

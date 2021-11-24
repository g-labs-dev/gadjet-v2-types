import { Cash } from '../../model'
import { Pagination, CashSummary } from '../../type'
declare type PARAMS = {
  hqId: number
  branchId: number
}
export declare type GET_LIST_PARAMS = PARAMS
export declare type GET_LIST_QUERY = Pagination & {
  query: string
  date: [string, string]
}
export declare type GET_LIST_RESPONSE = {
  total: number
  cash: Cash[]
}
export declare type GET_DETAIL_PARAMS = PARAMS & {
  cashId: number
}
export declare type GET_DETAIL_RESPONSE = Cash
export declare type GET_SUMMARY_PARAMS = PARAMS
export declare type GET_SUMMARY_QUERY = {}
export declare type GET_SUMMARY_RESPONSE = CashSummary
export declare type EXPORT_PARAMS = PARAMS
export declare type EXPORT_QUERY = {
  date: [string, string]
}
export declare type EXPORT_RESPONSE = any
export declare type ADD_PARAMS = PARAMS
export declare type ADD_BODY = {
  cash: Partial<Cash>
}
export declare type ADD_RESPONSE = Cash
export declare type UPDATE_PARAMS = PARAMS & {
  cashId: number
}
export declare type UPDATE_BODY = {
  cash: Partial<Cash>
}
export declare type UPDATE_RESPONSE = [number]
export declare type DELETE_PARAMS = PARAMS & {
  cashId: number
}
export declare type DELETE_RESPONSE = [number]
export {}
//# sourceMappingURL=cash.d.ts.map

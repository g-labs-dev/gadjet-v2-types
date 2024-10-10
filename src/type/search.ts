import { BillType, ContractStatus, ExpenditureType, PaymentStatus, PaymentType } from '.'

/**
 * 기본 Date Format YYYY-MM-DD
 */

export type ContractSearch = { query: string; spaceTypes: number[]; status: ContractStatus[] }
export type BillSearch = {
  query: string
  startDate: [string, string]
  spaceTypes: number[]
  type: BillType[]
}
export type ReceiptSearch = {
  query: string
  requestDatetime: [string, string] // YYYY-MM-DD HH:mm:ss
}
export type SpaceSearch = { query: string; emptyFlag: boolean, isActive?: boolean }
export type RentalSearch = { query: string }
export type RentalReservationSearch = { date: [string, string]; rentalIds: number[] }
export type TenantSearch = { query: string; contractStatus: ContractStatus[] }
export type NoticeSearch = { query: string; writeDate: [string, string] }
export type AccessLogSearch = { query: string; datetime: [string, string] }
export type ProductSearch = { query: string }
export type ProductSaleSearch = { query: string; datetime: [string, string]; productIds: number[] }
export type ServiceSearch = { query: string }
export type ServiceSaleSearch = { query: string; datetime: [string, string]; serviceIds: number[] }
export type ExpenditureSearch = { query: string; expenditureTypes: ExpenditureType[]; date: [string, string] }
export type PaymentSearch = {
  query: string
  paymentType: PaymentType[]
  paymentStatus: PaymentStatus[]
  date: [string, string]
}
export type EventSearch = { query: string }
export type AdditionSearch = { query: string, isActive: boolean }
export type CashSearch = { query: string; date: [string, string] }

export type BranchRoleSearch = Record<string, unknown>

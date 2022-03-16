import { Bills, Contracts, Expenditures, Payments, RentalReservations } from '../model'

export type FileContentType = 'application/pdf' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
export type ImageContentType = 'image/jpeg' | 'image/png'

export type ImageCategory =
  | 'hq'
  | 'branch'
  | 'notice'
  | 'rental'
  | 'room'
  | 'tenant'
  | 'user'
  | 'manager'
  | 'event'
  | 'signature'
  | 'product'
  | 'service'

export type FileCategory =
  | 'branch-terms' // 지점 이용약관
  | 'branch-policy' // 지점 개인정보처리방침
  | 'branch-etc' // 지점 기타 안내문
  | 'sublet-consent' // 전대동의서
  | 'sublet-document' // 전대차 계약서
  | 'rentee-document' // 임대차 계약서
  | 'contract-document' // 계약서

export type TenantType =
  | 'sole-proprietor' // 개인사업자
  | 'corporation-business' // 법인사업자
  | 'local' // 비사업자 내국인
  | 'foreigner' // 비사업자 외국인

export type ManagerJoinType = 'local' | 'google'

export type Role =
  | 1 // 편집, 조회
  | 2 // 조회
  | 3 // 권한없음

export type ContractBillingType =
  | 'prepayment' // 선납
  | 'monthly' // 월세

export type ContractBillingSplitType =
  | 'A' // 월 기준 분할
  | 'B' // 30일 기준 분할

export type ContractLateFeeType =
  | 'none' // 연체료 부과 안함
  | 'fix' // 고정금액
  | 'rate' // 이용료의 비율

export type ContractStatus =
  | 'before-started' // 시작전
  | 'started' // 시작됨
  | 'expired' // 만료됨
  | 'suspended' // 강제종료됨
  | 'extended' // 연장됨

export type ContractSignatureStatus =
  | 'none' // 서명불가, 서명 전
  | 'waiting' // 서명가능, 서명 대기
  | 'signed' // 서명됨

export type ContractExtendStatus =
  | 'none' // 아무것도 안함
  | 'asked' // 연장할지 물어봄
  | 'approval' // 연장한다고 대답함
  | 'refusal' // 연장거절

export type ContractCreditPolicy =
  | 'weekly' // 계약 크레딧 주 단위
  | 'monthly' // 월 단위

export type ContractTenant = {
  name: string
  contact: string
  email: string
  businessNumber: string
  corporationNumber: string
  foreignerNumber: string
  gicsCode: number | null
  type: TenantType
  businessType: string
  businessClass: string
  address: string
  identityNumber: string
}

export type ContractDirector = {
  name: string
  contact: string
  email: string
  residentNumber: string // 주민등록번호
  corporationNumber: string // 법인등록번호
}
export type ContractContractor = {
  name: string
  contact: string
  email: string
  relationshipWithDirector: string // 대표자와의 관계 (ex. 본인, 부모, ...)
}

export type Surcharges = {
  name: string
  price: number
}

export type BillType =
  | 'deposit' // 보증금 청구서
  | 'sales' // 매출 청구서

export type ReceiptStatus =
  | 'none' // 증빙 안함
  | 'tax-invoice-request' // 세금계산서 요청
  | 'tax-invoice-fail' // 세금계산서 실패
  | 'tax-invoice-done' // 세금계산서 완료
  | 'tax-invoice-update-request' // 세금계산서 수정 요청
  | 'tax-invoice-updated' // 세금계산서 수정 발행 됨
  | 'tax-invoice-update-request-fail' // 세금계산서 수정 발행 실패
  | 'cash-receipt-request' // 현금영수증 요청
  | 'cash-receipt-fail' // 현금영수증 실패
  | 'cash-receipt-done' // 현금영수증 완료
  | 'cash-receipt-cancel' // 현금영수증 취소
  | 'cash-receipt-cancel-fail' // 현금영수증 취소 발행 실패

export type ContractDepositStatus =
  | 'unpaid' // 미납
  | 'paid' // 납부
  | 'returned' // 반환됨

export type PaymentType =
  | 'card' // 카드결제
  | 'transfer' // 실시간계좌이체
  | 'direct' // 무통장입금
  | 'oversea-card' // 해외카드
  | 'paypal' // 페이팔
  | 'alipay' // 알리페이
  | 'wechatpay' // 위쳇페이
  | 'cash' // 현금

export type PaymentStatus =
  | 'ready' // 결제준비
  | 'approve' // 결제완료
  | 'refund' // 환불

export type CreditType =
  | 'contract' // 계약크레딧 (=무료크레딧)
  | 'buy' // 구매크레딧 (=유료크레딧)
  | 'mileage' // 마일리지 크레딧 (=가라지 크레딧)

export type CreditUsage =
  | 'rental' // 대관/대여
  | 'store' // 스토어
  | 'service' // 서비스
  | 'event' // 이벤트
  | 'purchase' // 구매
  | 'etc' // 기타

export type UsedCreditAmount = {
  [K in CreditType]?: number
}

export type ReceiptType =
  | 'tax-invoice' // 세금계산서
  | 'cash-receipt' // 현금영수증

// 일 | 월 | 화 | 수 | 목 | 금 | 토
export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type BillPrice = { name: string; price: number; vat: number }

export type ExpenditureType = 'card' | 'transfer' | 'cash' | 'commission'

export type Pagination = { current: number; pageSize: number; sort?: [string, 'desc' | 'asc'][] }

export type Relation<T> = T | null

export type BillSummary = {
  expectedSales: number // 예상매출 (bill.price)
  sales: number // 매출 (bill.payments)
  space: number // 공간 이용료
  addition: number // 부가 서비스 이용료
  etc: number // 기타
  unpaid: number // 미납 (bill.unpaid)
}

export type ReceiptSummary = {
  total: number // 총 합계
  taxInvoice: number // 세금계산서 금액
  cashReceipt: number // 현금영수증 금액
}

export type SpaceSummary = {
  total: number // space.virtualFlag = false 애들 공실률
  [key: string]: number // 지점 spaceType 별 공실률
}

export type ProductSalesSummary = {
  total: number
  [key: string]: number // 상품 별 판매금액 합계
}

export type ExpenditureSummary = {
  total: number // 총 지출
  commission: number // 결제 수수료
} & Record<ExpenditureType, number> // 지출 타입별 금액

export type CashSummary = {
  amount: number // 현재 잔액
}

export type PaymentSummary = {
  total: number // 전체 금액
  refund: number // 환불 금액
} & Record<PaymentType, number> // 결제타입 별 금액

export type ServiceSalesSummary = {
  total: number
  [key: string]: number // 서비스 별 판매금액 합계
}

export type ContractReceiver = {
  bill: { type: 'email' | 'sms'; value: string }[] // 청구서 문자 또는 이메일 받을사람
  invoice: { name: string; email: string }[] // 세금계산서, 현금영수증 메일 받을사람
}

export type BranchDashboardEventSummary = {
  salePrice: number // 매출 금액
  expectSalePrice: number // 예상매출 금액
  unpaidPrice: number // 미납 금액
  expenditurePrice: number // 지출 금액
  billingCount: number // 청구 제공기간 시작일 수
  contractStartCount: number // 계약 시작 수
  contractEndCount: number // 계약 종료 수
  rentalReservationCount: number // 대여/대관 예약 수
}

export type BranchDashboardDayEvent = {
  contractStartCount: number // 계약 시작 수
  contractEndCount: number // 계약 종료 수
  billingCount: number // 청구서 발송 수
  expenditurePrice: number // 매출 금액
  paymentPrice: number // 결제 금액
  rentalReservationCount: number // 대여/대관 예약 수
}

export type BranchDashboardDayEventDetail = {
  startContracts: Contracts[]
  endContracts: Contracts[]
  billingBills: Bills[]
  expenditure: Expenditures[]
  payments: Payments[]
  rentalReservations: RentalReservations[]
}

export type NotificationType = 'email' | 'sms' | 'fcm'
export type NotificationTemplate =
  | 'invite-manager' // 역할 초대 (매니저 대상 발송)
  | 'invite-tenant' // 계약 초대 (입주사 대상 발송)
  | 'bill' // 청구서

export type NicePayReserve =
  | { type: 'bill-payment'; billId: number; branchId: number } // 청구서 결제
  | {
      type: 'credit-purchase'
      amount: number
      hqId: number
      branchId: number
      contractId: number
      tenantId?: number
      userId?: number
    } // 크레딧 구매

// mid 구분용 (mid 발급 완료 시 주석 추가 예정)
export type PayType =
  | 'GENERAL' // 일반결제
  | 'OVERSEA' // 해외카드 결제
  | 'BILLING' // 자동결제

export type ApprovePayResponse =
  | { result: 'fail'; message: string }
  | ({ result: 'success'; message: string } & (
      | { type: 'card' }
      | { type: 'transfer' }
      | { type: 'direct'; data?: { bankName: string; account: string; expireDatetime: string; price: number | string } }
      | { type: 'oversea-card' }
      | { type: 'paypal' }
      | { type: 'alipay' }
      | { type: 'wechatpay' }
      | { type: 'cash' }
    ))

export type BranchBuildingContractType = 'none' | 'rent' | 'sublet'

export type Lang = 'ko' | 'en'

export type UserStatus = 'pending' | 'done'

export type Result = { isSuccess: boolean; message: string }

export type Device = {
  uniqueId: string
  manufacturer: string
  model: string
  systemVersion: string
  appVersion: string
  deviceName: string
  useragent: string
}

export type BillingCard = {
  number: string // 카드번호
  password: string // 카드 비밀번호 앞 2자리
  expYear: string // 만료 YY
  expMonth: string // 만료 MM
  identityNumber: string // 생년월일(YYMMDD) or 사업자번호(10자리)
}

export declare type PrintJobType = 'PRINT' | 'COPY' | 'FAX' | 'SCAN'

export declare type PrintColorType = 'color' | 'bnw'

export declare type PrintSizeType = 'A4' | 'A3'

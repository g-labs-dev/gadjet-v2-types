import { Services, ServiceSales } from '../../model'
import { UsedCreditAmount } from '../../type'

type PURCHASE_SERVICE_ERROR = any // => 에러 타입 추후 정의 (i18n연관)

type PARAMS = { serviceId: number }

// 서비스 상세조회
// GET /services/0
export type GET_SERVICE_DETAIL_PARAMS = PARAMS
export type GET_SERVICE_DETAIL_RESPONSE = { service: Services }
// ===========================

// 상품 구매
// POST /services/0/service-sales
export type PURCHASE_SERVICE_PARAMS = PARAMS
export type PURCHASE_SERVICE_BODY = {
  service: {
    branchId: number
    tenantId: number
    userId: number
    amount: number
    usedCreditAmount: UsedCreditAmount
  }
}
export type PURCHASE_SERVICE_RESPONSE = { serviceSales: ServiceSales; error?: PURCHASE_SERVICE_ERROR }
/**
 * name, price, datetime => 백에서 입력
 */
// ===========================

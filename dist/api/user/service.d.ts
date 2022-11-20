import { Services, ServiceSales } from '../../model';
import { UsedCreditAmount } from '../../type';
type PURCHASE_SERVICE_ERROR = any;
type PARAMS = {
    serviceId: number;
};
export type GET_SERVICE_DETAIL_PARAMS = PARAMS;
export type GET_SERVICE_DETAIL_RESPONSE = {
    service: Services;
};
export type PURCHASE_SERVICE_PARAMS = PARAMS;
export type PURCHASE_SERVICE_BODY = {
    service: {
        branchId: number;
        tenantId: number;
        userId: number;
        amount: number;
        usedCreditAmount: UsedCreditAmount;
    };
};
export type PURCHASE_SERVICE_RESPONSE = {
    serviceSales: ServiceSales;
    error?: PURCHASE_SERVICE_ERROR;
};
export {};
/**
 * name, price, datetime => 백에서 입력
 */
//# sourceMappingURL=service.d.ts.map
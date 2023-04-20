import { Services, ServiceSales } from '../../model';
import { UsedCreditAmount } from '../../type';
declare type PURCHASE_SERVICE_ERROR = any;
declare type PARAMS = {
    serviceId: number;
};
export declare type GET_SERVICE_DETAIL_PARAMS = PARAMS;
export declare type GET_SERVICE_DETAIL_RESPONSE = {
    service: Services;
};
export declare type PURCHASE_SERVICE_PARAMS = PARAMS;
export declare type PURCHASE_SERVICE_BODY = {
    service: {
        branchId: number;
        tenantId: number;
        userId: number;
        amount: number;
        usedCreditAmount: UsedCreditAmount;
    };
};
export declare type PURCHASE_SERVICE_RESPONSE = {
    serviceSales: ServiceSales;
    error?: PURCHASE_SERVICE_ERROR;
};
export {};
/**
 * name, price, datetime => 백에서 입력
 */
//# sourceMappingURL=service.d.ts.map
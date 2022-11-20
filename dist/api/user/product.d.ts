import { Products, ProductSales } from '../../model';
import { UsedCreditAmount } from '../../type';
type PURCHASE_PRODUCT_ERROR = any;
type PARAMS = {
    productId: number;
};
export type GET_PRODUCT_DETAIL_PARAMS = PARAMS;
export type GET_PRODUCT_DETAIL_RESPONSE = {
    product: Products;
};
export type PURCHASE_PRODUCT_PARAMS = PARAMS;
export type PURCHASE_PRODUCT_BODY = {
    product: {
        branchId: number;
        tenantId: number;
        userId: number;
        amount: number;
        usedCreditAmount: UsedCreditAmount;
    };
};
export type PURCHASE_PRODUCT_RESPONSE = {
    productSales: ProductSales;
    error?: PURCHASE_PRODUCT_ERROR;
};
export {};
/**
 * name, price, datetime => 백에서 입력
 */
//# sourceMappingURL=product.d.ts.map
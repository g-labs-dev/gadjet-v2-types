import { Products, ProductSales } from "../../model";
import { UsedCreditAmount } from "../../type";

type PURCHASE_PRODUCT_ERROR = any; // => 에러 타입 추후 정의 (i18n연관)

type PARAMS = { productId: number };

// 상품 상세조회
// GET /products/0
export type GET_PRODUCT_DETAIL_PARAMS = PARAMS;
export type GET_PRODUCT_DETAIL_RESPONSE = { product: Products };
// ===========================

// 상품 구매
// POST /products/0/product-sales
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
export type PURCHASE_PRODUCT_RESPONSE = { productSales: ProductSales; error?: PURCHASE_PRODUCT_ERROR };
/**
 * name, price, datetime => 백에서 입력
 */
// ===========================

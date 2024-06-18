import { Bills, Contracts, Expenditures, Payments, RentalReservations } from '../model';
export type FileContentType = 'application/pdf' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
export type ImageContentType = 'image/jpeg' | 'image/png';
export type ImageCategory = 'hq' | 'branch' | 'notice' | 'rental' | 'room' | 'tenant' | 'user' | 'manager' | 'event' | 'signature' | 'product' | 'service';
export type FileCategory = 'branch-terms' | 'branch-policy' | 'branch-etc' | 'sublet-consent' | 'sublet-document' | 'rentee-document' | 'contract-document';
export type TenantType = 'sole-proprietor' | 'corporation-business' | 'local' | 'foreigner';
export type ManagerJoinType = 'local' | 'google';
export type ManagerStatus = 'inactive' | 'pending' | 'done';
export type Role = 1 | 2 | 3;
export type ContractBillingType = 'prepayment' | 'monthly';
export type ContractBillingSplitType = 'A' | 'B';
export type ContractLateFeeType = 'none' | 'fix' | 'rate';
export type ContractStatus = 'before-started' | 'started' | 'expired' | 'suspended' | 'extended';
export type ContractSignatureStatus = 'none' | 'waiting' | 'signed';
export type ContractExtendStatus = 'none' | 'asked' | 'approval' | 'refusal' | 'done' | 'cancel';
export type ContractCreditPolicy = 'weekly' | 'monthly';
export type ContractTenant = {
    name: string;
    contact: string;
    email: string;
    businessNumber: string;
    corporationNumber: string;
    foreignerNumber: string;
    gicsCode: number | null;
    type: TenantType;
    businessType: string;
    businessClass: string;
    address: string;
    identityNumber: string;
};
export type ContractDirector = {
    name: string;
    contact: string;
    email: string;
    residentNumber: string;
    corporationNumber: string;
};
export type ContractContractor = {
    name: string;
    contact: string;
    email: string;
    relationshipWithDirector: string;
};
export type Surcharges = {
    name: string;
    price: number;
};
export type BillType = 'deposit' | 'sales';
export type ReceiptStatus = 'none' | 'before-receipt' | 'card' | 'seperately-receipt' | 'tax-invoice-request' | 'tax-invoice-fail' | 'tax-invoice-done' | 'tax-invoice-update-request' | 'tax-invoice-updated' | 'tax-invoice-update-request-fail' | 'cash-receipt-request' | 'cash-receipt-fail' | 'cash-receipt-done' | 'cash-receipt-cancel' | 'cash-receipt-cancel-request' | 'cash-receipt-cancel-fail';
export type ContractDepositStatus = 'unpaid' | 'paid' | 'returned';
export type PaymentType = 'card' | 'transfer' | 'direct' | 'oversea-card' | 'paypal' | 'alipay' | 'wechatpay' | 'cash';
export type PaymentStatus = 'ready' | 'approve' | 'refund' | 'unpaidCancel';
export type CreditType = 'contract' | 'buy' | 'mileage';
export type CreditUsage = 'rental' | 'store' | 'service' | 'event' | 'purchase' | 'etc';
export type UsedCreditAmount = {
    [K in CreditType]?: number;
};
export type ReceiptType = 'tax-invoice' | 'cash-receipt';
export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type BillPrice = {
    name: string;
    price: number;
    vat: number;
};
export type ExpenditureType = 'card' | 'transfer' | 'cash' | 'commission';
export type Pagination = {
    current: number;
    pageSize: number;
    sort?: [string, 'desc' | 'asc'][];
};
export type Relation<T> = T | null;
export type BillSummary = {
    expectedSales: number;
    sales: number;
    space: number;
    addition: number;
    etc: number;
    unpaid: number;
};
export type ReceiptSummary = {
    total: number;
    taxInvoice: number;
    cashReceipt: number;
};
export type SpaceSummary = {
    total: number;
    [key: string]: number;
};
export type ProductSalesSummary = {
    total: number;
    [key: string]: number;
};
export type ExpenditureSummary = {
    total: number;
    commission: number;
} & Record<ExpenditureType, number>;
export type CashSummary = {
    amount: number;
};
export type PaymentSummary = {
    total: number;
    refund: number;
} & Record<PaymentType, number>;
export type ServiceSalesSummary = {
    total: number;
    [key: string]: number;
};
export type ContractReceiver = {
    bill: {
        type: 'email' | 'sms';
        value: string;
    }[];
    invoice: {
        name: string;
        email: string;
    }[];
};
export type BranchDashboardEventSummary = {
    paymentPrice: number;
    expectSalePrice: number;
    unpaidPrice: number;
    expenditurePrice: number;
    billingCount: number;
    contractStartCount: number;
    contractEndCount: number;
    rentalReservationCount: number;
};
export type BranchDashboardDayEvent = {
    contractStartCount: number;
    contractEndCount: number;
    billingCount: number;
    expenditurePrice: number;
    paymentPrice: number;
    rentalReservationCount: number;
};
export type BranchDashboardDayEventDetail = {
    startContracts: Contracts[];
    endContracts: Contracts[];
    billingBills: Bills[];
    expenditure: Expenditures[];
    payments: Payments[];
    rentalReservations: RentalReservations[];
};
export type NotificationType = 'email' | 'sms' | 'fcm';
export type NotificationTemplate = 'invite-manager' | 'invite-tenant' | 'bill';
export type NicePayReserve = {
    type: 'bill-payment';
    billId: number;
    branchId: number;
} | {
    type: 'credit-purchase';
    amount: number;
    hqId: number;
    branchId: number;
    contractId: number;
    tenantId?: number;
    userId?: number;
};
export type PayType = 'GENERAL' | 'OVERSEA' | 'BILLING';
export type ApprovePayResponse = {
    result: 'fail';
    message: string;
} | ({
    result: 'success';
    message: string;
} & ({
    type: 'card';
} | {
    type: 'transfer';
} | {
    type: 'direct';
    data?: {
        bankName: string;
        account: string;
        expireDatetime: string;
        price: number | string;
    };
} | {
    type: 'oversea-card';
} | {
    type: 'paypal';
} | {
    type: 'alipay';
} | {
    type: 'wechatpay';
} | {
    type: 'cash';
}));
export type BranchBuildingContractType = 'none' | 'rent' | 'sublet';
export type Lang = 'ko' | 'en';
export type UserStatus = 'inactive' | 'pending' | 'done' | 'withdraw';
export type Result = {
    isSuccess: boolean;
    message: string;
};
export type Device = {
    uniqueId: string;
    manufacturer: string;
    model: string;
    systemVersion: string;
    appVersion: string;
    deviceName: string;
    useragent: string;
};
export type BillingCard = {
    number: string;
    password: string;
    expYear: string;
    expMonth: string;
    identityNumber: string;
};
export type PrintJobType = 'PRINT' | 'COPY' | 'FAX' | 'SCAN';
export type PrintColorType = 'color' | 'bnw';
export type PrintSizeType = 'A4' | 'A3';
export type GadjetServicePlan = 'essential' | 'advanced' | 'enterprise';
export type GadjetServiceType = 'year' | 'yearByMonth' | 'month';
export type GadjetServiceSubType = string;
export type GadjetServiceStatus = 'used' | 'request-terminate' | 'terminate' | 'pending';
/**
 * new: 신규 계약, started: 기존 계약, extended: 연장 계약, expired: 종료 계약, suspended: 조기 종료 계약
 */
export type GadjetServiceContractType = 'new' | 'started' | 'extended' | 'expired' | 'suspended';
/**
 * 가젯 서비스 관련 contract 정보
 */
export type ContractInfo = {
    contractId: number;
    type: GadjetServiceContractType;
    /**
     * 계약의 입주사 정보
     */
    tenant: ContractTenant;
    /**
     * 계약 시작일 YYYY-MM-DD
     */
    startDate: string;
    /**
     * 계약 종료일 YYYY-MM-DD
     */
    endDate: string;
    /**
     * 실제 계약 종료일 YYYY-MM-DD
     */
    suspendDate: string;
    /**
     * 부모 계약 Id
     */
    extendContractId?: number;
    /**
     * 부모 계약의 실제 종료일. YYYY-MM-DD
     */
    extendSuspendDate?: string;
    /**
     * 계약 삭제일
     */
    deletedAt?: Date;
};
export type BillingApproveResponseData = {
    ResultCode: string;
    ResultMsg: string;
    TID: string;
    Moid: string;
    Amt: string;
    AuthCode: string;
    AuthDate: string;
    AcquCardCode: string;
    AcquCardName: string;
    CardNo: string;
    CardCode: string;
    CardName: string;
    CardQuota: string;
    CardCl: string;
    CardInterest: string;
    CcPartCl: string;
    MallReserved: string;
};
export type TerminationType = {};
//# sourceMappingURL=index.d.ts.map
import { Bills, Contracts, Expenditures, Payments, RentalReservations } from '../model';
export declare type FileContentType = 'application/pdf' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
export declare type ImageContentType = 'image/jpeg' | 'image/png';
export declare type ImageCategory = 'hq' | 'branch' | 'notice' | 'rental' | 'room' | 'tenant' | 'user' | 'manager' | 'event' | 'signature' | 'product' | 'service';
export declare type FileCategory = 'branch-terms' | 'branch-policy' | 'branch-etc' | 'sublet-consent' | 'sublet-document' | 'rentee-document' | 'contract-document';
export declare type TenantType = 'sole-proprietor' | 'corporation-business' | 'local' | 'foreigner';
export declare type ManagerJoinType = 'local' | 'google';
export declare type ManagerStatus = 'inactive' | 'pending' | 'done';
export declare type Role = 1 | 2 | 3;
export declare type ContractBillingType = 'prepayment' | 'monthly';
export declare type ContractBillingSplitType = 'A' | 'B';
export declare type ContractLateFeeType = 'none' | 'fix' | 'rate';
export declare type ContractStatus = 'before-started' | 'started' | 'expired' | 'suspended' | 'extended';
export declare type ContractSignatureStatus = 'none' | 'waiting' | 'signed';
export declare type ContractExtendStatus = 'none' | 'asked' | 'approval' | 'refusal';
export declare type ContractCreditPolicy = 'weekly' | 'monthly';
export declare type ContractTenant = {
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
export declare type ContractDirector = {
    name: string;
    contact: string;
    email: string;
    residentNumber: string;
    corporationNumber: string;
};
export declare type ContractContractor = {
    name: string;
    contact: string;
    email: string;
    relationshipWithDirector: string;
};
export declare type Surcharges = {
    name: string;
    price: number;
};
export declare type BillType = 'deposit' | 'sales';
export declare type ReceiptStatus = 'none' | 'before-receipt' | 'card' | 'seperately-receipt' | 'tax-invoice-request' | 'tax-invoice-fail' | 'tax-invoice-done' | 'tax-invoice-update-request' | 'tax-invoice-updated' | 'tax-invoice-update-request-fail' | 'cash-receipt-request' | 'cash-receipt-fail' | 'cash-receipt-done' | 'cash-receipt-cancel' | 'cash-receipt-cancel-fail';
export declare type ContractDepositStatus = 'unpaid' | 'paid' | 'returned';
export declare type PaymentType = 'card' | 'transfer' | 'direct' | 'oversea-card' | 'paypal' | 'alipay' | 'wechatpay' | 'cash';
export declare type PaymentStatus = 'ready' | 'approve' | 'refund';
export declare type CreditType = 'contract' | 'buy' | 'mileage';
export declare type CreditUsage = 'rental' | 'store' | 'service' | 'event' | 'purchase' | 'etc';
export declare type UsedCreditAmount = {
    [K in CreditType]?: number;
};
export declare type ReceiptType = 'tax-invoice' | 'cash-receipt';
export declare type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare type BillPrice = {
    name: string;
    price: number;
    vat: number;
};
export declare type ExpenditureType = 'card' | 'transfer' | 'cash' | 'commission';
export declare type Pagination = {
    current: number;
    pageSize: number;
    sort?: [string, 'desc' | 'asc'][];
};
export declare type Relation<T> = T | null;
export declare type BillSummary = {
    expectedSales: number;
    sales: number;
    space: number;
    addition: number;
    etc: number;
    unpaid: number;
};
export declare type ReceiptSummary = {
    total: number;
    taxInvoice: number;
    cashReceipt: number;
};
export declare type SpaceSummary = {
    total: number;
    [key: string]: number;
};
export declare type ProductSalesSummary = {
    total: number;
    [key: string]: number;
};
export declare type ExpenditureSummary = {
    total: number;
    commission: number;
} & Record<ExpenditureType, number>;
export declare type CashSummary = {
    amount: number;
};
export declare type PaymentSummary = {
    total: number;
    refund: number;
} & Record<PaymentType, number>;
export declare type ServiceSalesSummary = {
    total: number;
    [key: string]: number;
};
export declare type ContractReceiver = {
    bill: {
        type: 'email' | 'sms';
        value: string;
    }[];
    invoice: {
        name: string;
        email: string;
    }[];
};
export declare type BranchDashboardEventSummary = {
    salePrice: number;
    expectSalePrice: number;
    unpaidPrice: number;
    expenditurePrice: number;
    billingCount: number;
    contractStartCount: number;
    contractEndCount: number;
    rentalReservationCount: number;
};
export declare type BranchDashboardDayEvent = {
    contractStartCount: number;
    contractEndCount: number;
    billingCount: number;
    expenditurePrice: number;
    paymentPrice: number;
    rentalReservationCount: number;
};
export declare type BranchDashboardDayEventDetail = {
    startContracts: Contracts[];
    endContracts: Contracts[];
    billingBills: Bills[];
    expenditure: Expenditures[];
    payments: Payments[];
    rentalReservations: RentalReservations[];
};
export declare type NotificationType = 'email' | 'sms' | 'fcm';
export declare type NotificationTemplate = 'invite-manager' | 'invite-tenant' | 'bill';
export declare type NicePayReserve = {
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
export declare type PayType = 'GENERAL' | 'OVERSEA' | 'BILLING';
export declare type ApprovePayResponse = {
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
export declare type BranchBuildingContractType = 'none' | 'rent' | 'sublet';
export declare type Lang = 'ko' | 'en';
export declare type UserStatus = 'inactive' | 'pending' | 'done';
export declare type Result = {
    isSuccess: boolean;
    message: string;
};
export declare type Device = {
    uniqueId: string;
    manufacturer: string;
    model: string;
    systemVersion: string;
    appVersion: string;
    deviceName: string;
    useragent: string;
};
export declare type BillingCard = {
    number: string;
    password: string;
    expYear: string;
    expMonth: string;
    identityNumber: string;
};
export declare type PrintJobType = 'PRINT' | 'COPY' | 'FAX' | 'SCAN';
export declare type PrintColorType = 'color' | 'bnw';
export declare type PrintSizeType = 'A4' | 'A3';
export declare type GadjetServicePlan = 'essential' | 'advanced' | 'enterprise';
export declare type GadjetServiceType = 'year' | 'yearByMonth' | 'month';
export declare type GadjetServiceSubType = string;
export declare type GadjetServiceStatus = 'used' | 'request-terminate' | 'terminate' | 'pending';
export declare type ContractInfo = {
    contractId: number;
    tenant: ContractTenant;
    startDate: string;
    endDate: string;
};
export declare type BillingApproveResponseData = {
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
//# sourceMappingURL=index.d.ts.map
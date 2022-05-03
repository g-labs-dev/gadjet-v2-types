import { Cashbill } from '../popbill/cash-bill';
import { TaxInvoice } from '../popbill/tax-invoice';
import { BillPrice, BillType, BranchBuildingContractType, ContractBillingSplitType, ContractBillingType, ContractContractor, ContractCreditPolicy, ContractDepositStatus, ContractDirector, ContractExtendStatus, ContractLateFeeType, ContractReceiver, ContractSignatureStatus, ContractStatus, ContractTenant, CreditType, CreditUsage, DayIndex, Device, ExpenditureType, FileCategory, ImageCategory, Lang, ManagerJoinType, NotificationTemplate, NotificationType, PaymentStatus, PaymentType, ReceiptStatus, ReceiptType, Relation, Role, TenantType, UsedCreditAmount, UserStatus, PrintJobType, PrintColorType, PrintSizeType, ManagerStatus } from '../type';
export declare type Images = {
    imageId: number;
    size: number;
    width: number;
    height: number;
    category: ImageCategory;
    path: string;
    uri: string;
};
export declare type Files = {
    fileId: number;
    size: number;
    category: FileCategory;
    path: string;
    uri: string;
};
export declare type Banks = {
    bankCode: string;
    name: string;
};
export declare type Gics = {
    code: number;
    parentCode: number | null;
    depth: number;
    ko: string;
    en: string;
    children?: Relation<Gics[]>;
};
export declare type Dates = {
    yyyymmdd: number;
    year: number;
    month: number;
    date: number;
    dateString: string;
    dayIndex: DayIndex;
    weekendFlag: boolean;
    holidayFlag: boolean;
    nextBusinessDate: string;
};
export declare type Months = {
    yyyymm: number;
    year: number;
    month: number;
    monthString: string;
};
export declare type Hqs = {
    hqId: number;
    name: string;
    email: string;
    logoImageId: number | null;
    image?: Relation<Images>;
    branches?: Relation<Branches[]>;
    roles?: Relation<HqRoles[]>;
};
export declare type Branches = {
    branchId: number;
    hqId: number;
    name: string;
    contact: string;
    email: string;
    zipcode: string;
    address: string;
    addressDetail: string;
    popbillId: string | null;
    chargeNotice: number;
    remainDate: number;
    hq?: Relation<Hqs>;
    business?: Relation<BranchBusinesses>;
    settlement?: Relation<BranchSettlements>;
    cards?: Relation<BranchCards>;
    contractDocument?: Relation<BranchContractDocuments>;
    sublet?: Relation<BranchSublets>;
    rentee?: Relation<BranchRentees>;
    automation?: Relation<BranchAutomations>;
    roles?: Relation<BranchRoles[]>;
    floors?: Relation<Floors[]>;
    spaceTypes?: Relation<SpaceTypes[]>;
};
export declare type BranchBusinesses = {
    branchBusinessId: number;
    branchId: number;
    director: string;
    name: string;
    address: string;
    identityNumber: string;
    businessNumber: string;
    corporationNumber: string;
    businessType: string;
    businessClass: string;
    managers?: [
        {
            name: string;
            department: string;
            tel: string;
            contact: string;
            email: string;
        },
        {
            name: string;
            department: string;
            tel: string;
            contact: string;
            email: string;
        }
    ];
};
export declare type BranchSettlements = {
    branchSettlementId: number;
    branchId: number;
    bankCode: string;
    bankName: string;
    account: string;
    holder: string;
    bank?: Relation<Banks>;
};
export declare type BranchContractDocuments = {
    branchContractDocumentId: number;
    branchId: number;
    zipcode: string;
    address: string;
    addressDetail: string;
    buildingContractType: BranchBuildingContractType;
    creditPolicy: ContractCreditPolicy;
    deposit: string;
    rent: string;
    area: string;
    managementFee: string;
    signatureImageId: number | null;
    termsFileId: number | null;
    policyFileId: number | null;
    etcFileId: number | null;
    signatureImage?: Relation<Images>;
    termsFile?: Relation<Files>;
    policyFile?: Relation<Files>;
    etcFile?: Relation<Files>;
};
export declare type BranchSublets = {
    branchSubletId: number;
    branchId: number;
    name: string;
    businessNumber: string;
    corporationNumber: string;
    address: string;
    contact: string;
    signatureImageId: number | null;
    consentFileId: number | null;
    signatureImage?: Relation<Images>;
    consentFile?: Relation<Files>;
};
export declare type BranchRentees = {
    branchRenteeId: number;
    branchId: number;
    name: string;
    businessNumber: string;
    corporationNumber: string;
    address: string;
    contact: string;
    signatureImageId: number | null;
    signatureImage?: Relation<Images>;
};
export declare type BranchAutomations = {
    branchAutomationId: number;
    branchId: number;
    billing: boolean;
    receipt: boolean;
};
export declare type Tenants = {
    tenantId: number;
    name: string;
    contact: string;
    email: string;
    businessNumber: string;
    corporationNumber: string;
    foreignerNumber: string;
    gicsCode: number;
    type: TenantType;
    availableCreditUsage: CreditUsage[];
    credits?: Relation<Credits>;
    gics?: Relation<Gics>;
    users?: Relation<Users[]>;
};
export declare type Managers = {
    managerId: number;
    legacyManagerId: string;
    email: string;
    password: string;
    name: string;
    joinType: ManagerJoinType;
    socialId: string;
    pushToken: string | null;
    profileImageId: number | null;
    lastLogin: string;
    status: ManagerStatus;
    profile?: Relation<Images>;
};
export declare type Users = {
    userId: number;
    legacyUserId: string;
    contact: string;
    password: string;
    email: string;
    name: string;
    pushToken: string | null;
    profileImageId: number | null;
    code: string;
    status: UserStatus;
    device: null | Device;
    lastLogin: string;
    profile?: Relation<Images>;
    tenantRoles?: Relation<TenantRoles[]>;
};
export declare type HqRoles = {
    hqRoleId: number;
    hqId: number;
    managerId: number;
    adminFlag: boolean;
    dashboard: Role;
    graph: Role;
    notice: Role;
    role: Role;
    config: Role;
    branch: Role;
    hq?: Relation<Hqs>;
    manager?: Relation<Managers>;
};
export declare type BranchRoles = {
    branchRoleId: number;
    hqId: number;
    branchId: number;
    managerId: number;
    adminFlag: boolean;
    dashboard: Role;
    contract: Role;
    bill: Role;
    receipt: Role;
    space: Role;
    rental: Role;
    addition: Role;
    event: Role;
    tenant: Role;
    notice: Role;
    expenditure: Role;
    product: Role;
    service: Role;
    cash: Role;
    payment: Role;
    role: Role;
    accessLog: Role;
    config: Role;
    branch?: Relation<Branches>;
    manager?: Relation<Managers>;
};
export declare type TenantRoles = {
    tenantRoleId: number;
    tenantId: number;
    userId: number;
    adminFlag: boolean;
    contract: Role;
    bill: Role;
    rental: Role;
    product: Role;
    service: Role;
    credit: Role;
    role: Role;
    tenant?: Relation<Tenants>;
    user?: Relation<Users>;
};
export declare type RoleCodes = {
    code: string;
    hqId: number | null;
    branchId: number | null;
    to: string;
};
export declare type Notices = {
    noticeId: number;
    hqId: number;
    branchId: number;
    title: string;
    content: string;
    writeDate: string;
    openFlag: boolean;
    hq?: Relation<Hqs>;
    branch?: Relation<Branches>;
};
export declare type Floors = {
    floorId: number;
    branchId: number;
    name: string;
};
export declare type SpaceTypes = {
    spaceTypeId: number;
    branchId: number;
    name: string;
    virtualFlag: boolean;
    branch?: Relation<Branches>;
    spaces?: Relation<Spaces[]>;
};
export declare type Spaces = {
    spaceId: number;
    spaceTypeId: number;
    branchId: number;
    name: string;
    price: number;
    area: string;
    capacity: number;
    imageId: number | null;
    spaceType?: Relation<SpaceTypes>;
    image?: Relation<Images>;
    contractSpaces?: Relation<ContractSpaces[]>;
};
export declare type Additions = {
    additionId: number;
    branchId: number;
    name: string;
    price: number;
    contractAdditions?: Relation<ContractAdditions[]>;
};
export declare type Contracts = {
    contractId: number;
    branchId: number;
    tenantId: number | null;
    startDate: string;
    endDate: string;
    suspendDate: string;
    address: string;
    population: number;
    paymentDate: number;
    billingType: ContractBillingType;
    billingSplitType: ContractBillingSplitType;
    paymentDueDate: number;
    lateFeeType: ContractLateFeeType;
    lateFee: number;
    lateFeeDeferDate: number;
    creditAmount: number;
    publicMemo: string;
    privateMemo: string;
    status: ContractStatus;
    signatureStatus: ContractSignatureStatus;
    signatureImageId: number | null;
    documentFileId: number | null;
    extendStatus: ContractExtendStatus;
    extendCheckDate: string;
    extendContractId: number | null;
    extendSinceDate: string;
    receiver: ContractReceiver;
    lang: Lang;
    tenant: ContractTenant;
    director: ContractDirector;
    contractor: ContractContractor;
    contractDeposit?: Relation<ContractDeposits>;
    contractSpaces?: Relation<ContractSpaces[]>;
    contractAdditions?: Relation<ContractAdditions[]>;
    signatureImage?: Relation<Images>;
    documentFile?: Relation<Files>;
    branch?: Relation<Branches>;
    parentContract?: Relation<Contracts>;
    bills?: Relation<Bills[]>;
};
export declare type ContractSpaces = {
    contractSpaceId: number;
    contractId: number;
    spaceId: number;
    name: string;
    price: number;
    space?: Relation<Spaces>;
    contract?: Relation<Contracts>;
};
export declare type ContractAdditions = {
    contractAdditionId: number;
    contractId: number;
    additionId: number;
    name: string;
    price: number;
    addition?: Relation<Additions>;
    contract?: Relation<Contracts>;
};
export declare type ContractQueries = {
    contractQueryId: number;
    contractId: number;
    query: string;
};
export declare type ContractInviteCodes = {
    inviteCode: string;
    contractId: number;
    managerId: number;
    to: string;
    receivedFlag: boolean;
    manager?: Relation<Managers>;
};
export declare type Bills = {
    billId: number;
    branchId: number;
    contractId: number | null;
    tenantId: number | null;
    userId: number | null;
    type: BillType;
    rate: number;
    price: number;
    unpaidPrice: number;
    openDate: string;
    startDate: string;
    endDate: string;
    paymentStartDate: string;
    paymentEndDate: string;
    lateFeeDate: string;
    spaces: BillPrice[];
    additions: BillPrice[];
    surcharges: BillPrice[];
    memo: string;
    receiptStatus: ReceiptStatus;
    gadjetPayFlag: boolean;
    manualFlag: boolean;
    contract?: Relation<Contracts>;
    tenant?: Relation<Tenants>;
    user?: Relation<Users>;
    payments?: Relation<Payments[]>;
    receipts?: Relation<Receipts[]>;
    branch?: Relation<Branches>;
};
export declare type ContractDeposits = {
    contractDepositId: number;
    branchId: number;
    contractId: number;
    price: number;
    bankCode: string;
    bankName: string;
    holder: string;
    account: string;
    status: ContractDepositStatus;
};
export declare type Payments = {
    paymentId: number;
    branchId: number;
    billId: number;
    userId: number;
    item: string;
    type: PaymentType;
    status: PaymentStatus;
    moid: string;
    readyDatetime: string;
    readyJson: object;
    approveDatetime: string;
    approveJson: object;
    refundDatetime: string;
    refundJson: object;
    price: number;
    commissionPrice: number;
    settlementPrice: number;
    gadjetPrice: number;
    memo: string;
    confirmFlag: boolean;
    settlementFlag: boolean;
    manualFlag: boolean;
    legacyJson: any;
    bill?: Relation<Bills>;
    user?: Relation<Users>;
};
export declare type Settlements = {
    settlementId: number;
    branchId: number;
    bankCode: string;
    bankName: string;
    account: string;
    holder: string;
    price: number;
    date: string;
    paymentJson: Payments[];
};
export declare type Credits = {
    creditId: number;
    hqId: number;
    tenantId: number | null;
    contractId: number | null;
    userId: number | null;
    type: CreditType;
    amount: number;
    availableStartDate: string;
    availableEndDate: string;
    availableFlag: boolean;
};
export declare type CreditLogs = {
    creditLogId: number;
    creditId: number;
    creditType: CreditType;
    usage: CreditUsage | null;
    amount: number;
    datetime: string;
    memo: string;
};
export declare type Events = {
    eventId: number;
    branchId: number;
    title: string;
    content: string;
    price: number;
    openDate: string;
    applyStartDate: string;
    applyEndDate: string;
    startDate: string;
    endDate: string;
    maxAttendeeCount: number;
    attendeeCount: number;
    place: string;
    address: string;
    addressDetail: string;
    lat: string;
    lng: string;
    availableCreditType: CreditType[];
    onlineFlag: boolean;
    bannerImageId: number | null;
    bannerImage?: Relation<Images>;
    eventAttendees?: Relation<EventAttendees[]>;
};
export declare type EventAttendees = {
    eventAttendeeId: number;
    eventId: number;
    userId: number;
    applyDatetime: string;
    usedCreditAmount: UsedCreditAmount;
    user?: Relation<Users>;
};
export declare type Rentals = {
    rentalId: number;
    branchId: number;
    price: number;
    name: string;
    description: string;
    startTime: string;
    endTime: string;
    availableCreditType: CreditType[];
    weekendFlag: boolean;
    shareFlag: boolean;
    imageId: number | null;
    branch?: Relation<Branches>;
    image?: Relation<Images>;
};
export declare type RentalReservations = {
    rentalReservationId: number;
    branchId: number;
    rentalId: number;
    tenantId: number;
    userId: number;
    date: string;
    startTime: string;
    endTime: string;
    memo: string;
    usedCreditAmount: UsedCreditAmount;
    managerFlag: boolean;
    branch?: Relation<Branches>;
    rental?: Relation<Rentals>;
    tenant?: Relation<Tenants>;
    user?: Relation<Users>;
};
export declare type Products = {
    productId: number;
    branchId: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    salesAmount: number;
    availableCreditType: CreditType[];
    imageId: number | null;
    image?: Relation<Images>;
};
export declare type ProductSales = {
    productSaleId: number;
    branchId: number;
    productId: number;
    tenantId: number;
    userId: number;
    name: string;
    amount: number;
    price: number;
    usedCreditAmount: UsedCreditAmount;
    datetime: string;
    refundFlag: boolean;
    product?: Relation<Products>;
    tenant?: Relation<Tenants>;
    user?: Relation<Users>;
};
export declare type Services = {
    serviceId: number;
    branchId: number;
    name: string;
    description: string;
    price: number;
    guide: string;
    salesAmount: number;
    availableCreditType: CreditType[];
    imageId: number | null;
    image?: Relation<Images>;
};
export declare type ServiceSales = {
    serviceSaleId: number;
    branchId: number;
    serviceId: number;
    tenantId: number;
    userId: number;
    name: string;
    amount: number;
    price: number;
    usedCreditAmount: UsedCreditAmount;
    datetime: string;
    refundFlag: boolean;
    service?: Relation<Services>;
    tenant?: Relation<Tenants>;
    user?: Relation<Users>;
};
export declare type Receipts = {
    receiptId: number;
    parentReceiptId: number | null;
    branchId: number;
    billId: number;
    type: ReceiptType;
    status: ReceiptStatus;
    price: number;
    ntsConfirmNumber: string;
    ntsResultCode: string;
    mgtKey: string;
    requestDatetime: string;
    taxInvoiceJson: TaxInvoice;
    cashBillJson: Cashbill;
};
export declare type ReceiptsFailLogs = {
    receiptsFailLogId: number;
    branchId: number;
    billId: number;
    type: ReceiptType;
    status: ReceiptStatus;
    modifyCode: number;
    mgtKey: string;
    mgtKey2: string;
    code: number;
    message: string;
    ntsResultCode: string;
    requestDatetime: string;
    taxInvoiceJson: TaxInvoice;
    cashBillJson: Cashbill;
};
export declare type BranchNotifications = {
    branchNotificationId: number;
    branchId: number;
    title: string;
    content: string;
    sendDatetime: string;
    link: string;
};
export declare type UserNotifications = {
    userNotificationId: number;
    userId: number;
    title: string;
    content: string;
    sendDatetime: string;
    link: string;
    readFlag: boolean;
};
export declare type BranchCards = {
    branchCardId: number;
    branchId: number;
    billKey: string;
    cardCode: string;
    cardName: string;
    cardNumber: string;
    acquCardCode: string;
    acquCardName: string;
    registDate: string;
    corporationFlag: boolean;
    lastUsedFlag: boolean;
    billingFlag: boolean;
};
export declare type TenantCards = {
    tenantCardId: number;
    tenantId: number;
    billKey: string;
    cardCode: string;
    cardName: string;
    cardNumber: string;
    acquCardCode: string;
    acquCardName: string;
    registDate: string;
    corporationFlag: boolean;
    lastUsedFlag: boolean;
    billingFlag: boolean;
};
export declare type UserCards = {
    userCardId: number;
    userId: number;
    billKey: string;
    cardCode: string;
    cardName: string;
    cardNumber: string;
    acquCardCode: string;
    acquCardName: string;
    registDate: string;
    corporationFlag: boolean;
    lastUsedFlag: boolean;
    billingFlag: boolean;
};
export declare type Expenditures = {
    expenditureId: number;
    branchId: number;
    managerId: number | null;
    managerName: string;
    date: string;
    type: ExpenditureType;
    price: number;
    memo: string;
    manager?: Relation<Managers>;
};
export declare type Cash = {
    cashId: number;
    branchId: number;
    managerId: number | null;
    managerName: string;
    date: string;
    price: number;
    memo: string;
    reserve: number;
    manager?: Relation<Managers>;
};
export declare type AccessLogs = {
    accessLogId: number;
    hqId: number;
    branchId: number;
    managerId: number;
    managerName: string;
    title: string;
    url: string;
    ip: string;
    ua: string;
    successFlag: boolean;
    datetime: string;
    manager?: Relation<Managers>;
};
export declare type ManagerInviteCodes = {
    managerInviteCode: string;
    hqId: number | null;
    branchId: number | null;
    managerId: number;
    hqRole: Partial<HqRoles> | null;
    branchRole: Partial<BranchRoles> | null;
    to: string;
    receivedFlag: boolean;
    manager?: Relation<Managers>;
};
export declare type NotificationSendLogs = {
    notificationSendLogId: number;
    hqId: number | null;
    branchId: number | null;
    managerId: string;
    type: NotificationType;
    to: string;
    template: NotificationTemplate;
    data: any;
    datetime: string;
    manager?: Relation<Managers>;
};
export declare type NotificationLogs = {
    notificationLogId: number;
    type: string;
    resultCode: number;
    resultMsg: string;
    isSuccessful: boolean;
    data: object;
};
export declare type mPrintLogs = {
    mPrintLogId: number;
    deptId: number;
    parentDeptId: number;
    userId: number;
    productType: PrintJobType;
    colorType: PrintColorType;
    size: PrintSizeType;
    count: number;
    date: string;
    deptName: string;
    parentDeptName: string;
    userName: string;
    title: string;
    floor: string;
};
//# sourceMappingURL=index.d.ts.map
import {IContact, IAPIContact}               from './contact';
import {IUser}                  from './user';
import {IAPIComment} from './comment';
import {IAPIAttachment} from './attachment';
import {IAPIBug} from './bug';
import {IAPICallLog} from './call';
import {IAPICaseResourceLink} from './resource';
import {IAPITeamMember} from './user';
import {IAPIChatTranscript} from './chat';
import {IAPIKcsLink} from './kcs';
import {IBug} from './bug';
import {IEntitlement} from './entitlement';
import {IAccount} from './account';

// Used for making a new comment or updating a comment
export interface IAPICase {
    accountNumber?: string;
    actionPlan?: string;
    alternateId?: string;
    attachments?: Array<IAPIAttachment>;
    bugs?: Array<IAPIBug>;
    calls?: Array<IAPICallLog>;
    caseAutomationEnabled?: boolean;
    caseNumber?: string;
    caseResourceLinks?: Array<IAPICaseResourceLink>;
    caseSummary?: string;
    caseType?: string;
    certArchitecture?: string;
    certCategory?: string;
    certVendorName?: string;
    certVendorPortalId?: string;
    certVendorProductName?: string;
    certVendorProductPortalId?: string;
    collaborationScore?: number;
    comments?: Array<IAPIComment>;
    contactInfo24x7?: string;
    contactName?: string;
    contacts?: Array<IAPIContact>;
    contactSSOName?: string;
    createdBy?: string;
    createdBySSOName?: string;
    createdDate?: any;
    critSit?: boolean;
    customerEscalation?: boolean;
    customerNotes?: string;
    description?: string;
    enhancedSLA?: boolean;
    entitlementId?: string;
    environment?: string;
    externalCaseHandlingSystems?: string;
    externalLock?: boolean;
    externalLockBy?: string;
    externalLockDate?: string;
    firstCaseInactivityWarningSentAt?: string;
    FTS?: boolean;
    groupNumber?: string;
    handledByAscension?: boolean;
    hostname?: string;
    hotfixDelivered?: boolean;
    hotfixRequested?: boolean;
    id?: string;
    internalLastModifiedDate?: string;
    internalpriority?: string;
    internalstatus?: string;
    isCertification?: boolean;
    isClosed?: boolean;
    isPoc?: boolean;
    isStrategicAccount?: boolean;
    issue?: string;
    itar?: boolean;
    kcsLinks?: Array<IAPIKcsLink>;
    language?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    managementEscalationRequested?: boolean;
    message?: string;
    needsNewOwner?: string;
    noAutomationForAccount?: boolean;
    noAutomationForCase?: boolean;
    noAutomationForCaseGroup?: boolean;
    origin?: string;
    owner?: string;
    periodicityOfIssue?: string;
    priorityScore?: number;
    proactive?: boolean;
    product?: string;
    redHatTeamMembers?: Array<IAPITeamMember>;
    resolution?: string;
    returnCode?: number;
    sbrGroups?: string;
    secondCaseInactivityWarningSentAt?: string;
    severity?: string;
    sla?: string;
    status?: string;
    summary?: string;
    suppliedEmail?: string;
    suppliedName?: string;
    suppliedPhone?: string;
    tags?: string;
    timeFramesAndUrgency?: string;
    transcripts?: Array<IAPIChatTranscript>;
    userAgent?: string;
    version?: string;
    waitingOnCallback?: boolean;
    warnings?: string;
}

export interface ICase {
    AccountId: string;
    Account_Number__c: string;
    ActionPlan_Last_Updated_By_User__c: string;
    ActionPlan_Last_Updated__c: string;
    Action_Plan__c: string;
    AMC_Final_Remedy_Provided__c: boolean;
    AMC_Temporary_Remedy_Provided__c: boolean;
    Automation_Enabled_For_Case_Computed__c: boolean;
    Bugzilla_Link__c: string;
    Bugzilla_Number__c: string;
    Bugzilla_Summary__c: string;
    Bug__c: string;
    BusinessHoursId: string;
    CaseNumber: string;
    Case_Contact__c: string;
    Case_Language__c: string;
    Case_Link__c: string;
    Case_Owner_Is_Tam__c: string;
    Case_Owner_Super_Region__c: string;
    Case_Owner__c: string;
    Case_Summary__c: string;
    Cert_Architecture__c: string;
    Cert_Category__c: string;
    Cert_Vendor_Name__c: string;
    Cert_Vendor_Portal_ID__c: string;
    Cert_Vendor_Product_Name__: string;
    Cert_Vendor_Product_Portal_ID__c: string;
    ClosedDate: string;
    Collaboration_Score_Explanation__c: string;
    Collaboration_Score_Last_Update_Date__c: string;
    Collaboration_Score__c: number;
    Comment_Count__c: number;
    ContactId: string;
    ContactInfo24x7__c: string;
    Contact_Link__c: string;
    Contact_Preferred_Language__c: string;
    Contributors__c: string;
    CreatedById: string;
    CreatedDate: string;
    Created_By_Contact__c: string;
    Created_By_Link__c: string;
    Created_By_User__c: string;
    Created_By__c: string;
    CritSit__c: boolean;
    CustomerCaseNotes__c: string;
    Customer_Engagement_Scorecard__c: string;
    Customer_Escalation__c: boolean;
    Customer_Segment__c: number;
    Description: string;
    EnhancedSLA__c: boolean;
    EntitlementId: string;
    Entitlement_Needs_Attention__c: boolean;
    Entitlement_State__c: string;
    Environment__c: string;
    Escalate_to_GEO__c: string;
    ExternalLockBy__c: string;
    ExternalLockDate__c: string;
    ExternalLock__c: boolean;
    External_Handling_System__c: string;
    FTS_Handover_Ready__c: boolean;
    FTS_Role__c: string;
    FTS__c: boolean;
    HasCommentsUnreadByOwner: boolean;
    hasNewPublicComment__c: boolean;
    Highest_Severity__c: string;
    Hotfix_Delivered_Date__c: string;
    Hotfix_Delivered__c: boolean;
    Hotfix_Requested__c: boolean;
    Hotfix_Request_Date__c: string;
    Hours_in_current_status__c: number;
    Hours_Since_Case_Last_Updated__c: number;
    Hours_Since_Last_Comment_of_any_type__c: number;
    Hours_Since_Last_Private_Comment__c: number;
    Hours_Since_Last_Public_Comment__c: number;
    Id: string;
    Identifying_Address_Country__c: string;
    Initial_Service_Level__c: string;
    Internal_Priority__c: string;
    Internal_Status__c: string;
    IsClosed: boolean;
    IsDeleted: boolean;
    IsPOC__c: boolean;
    IsStopped: boolean;
    Issue__c: string;
    Is_ABRT_Case_That_Should_Remain_Closed__c: boolean;
    ITAR__c: boolean;
    Kick_Case__c: string;
    LastModifiedById: string;
    LastModifiedDate: string;
    Last_Breach__c: string;
    Last_Case_Update_Date__c: string;
    Last_Closed_At__c: string;
    Last_Escalation_Associated_At__c: string;
    Last_Escalation_Updated_At__c: string;
    Last_ETU_Updated_At__c: string;
    Last_Modified_By_Contact__c: string;
    Last_Modified_By_Id__c: string;
    Last_Modified_By_Link__c: string;
    Last_Modified_By_User__c: string;
    Last_Modified_By__c: string;
    Last_Private_Comment_Date_Time__c: string;
    Last_Public_Attachment_ms__c: number;
    Last_Public_Case_Update_Contact__c: string;
    Last_Public_Case_Update_Date__c: string;
    Last_Public_Case_Update_ms__c: number;
    Last_Public_Case_Update_User__c: string;
    Last_Public_Comment_Date_Time__c: string;
    Last_Public_Comment_Published_ms__c: number;
    Last_Public_Update_By__c: string;
    Last_Public_Update_Date_Display__c: string;
    Last_Status_Change__c: string;
    Linked_Resource_Count__c: string;
    Linked_To_Recommendation_on_Closure_Set__c: boolean;
    Linked_To_Recommendation_on_Closure__c: boolean;
    Link_To_Case_in_Portal__c: string;
    MilestoneStatus: string;
    Normalized_Service_Level__c: string;
    No_Automation_For_Case__c: boolean;
    Number_of_Breaches__c: number;
    Origin: string;
    Original_Description__c: string;
    Original_Environment__c: string;
    Original_Issue__c: string;
    Original_PeriodicityOfIssue__c: string;
    Original_Product__c: string;
    Original_Service_Level__c: string;
    Original_Severity__c: string;
    Original_Subject__c: string;
    Original_TimeFramesAndUrgency__c: string;
    Original_Version__c: string;
    OwnerId: string;
    OwnerOutOfOffice__c: boolean;
    Owner_IRC_Nickname__c: string;
    PeriodicityOfIssue__c: string;
    Priority: string;
    Priority_Score_Explanation__c: string;
    Priority_Score_Formula__c: string;
    Priority_Score_Last_Update_Date__c: string;
    Priority_Score__c: number;
    PrivateCommentCount__c: number;
    Private__c: boolean;
    Proactive__c: boolean;
    Product_Family__c: string;
    Product__c: string;
    PublicCommentCount__c: number;
    public_comment__c: boolean;
    Public_TSE_Comments__c: number;
    Push_to_Partner__c: string;
    Reason: string;
    Remote_Session_Count__c: number;
    Request_Management_Escalation__c: boolean;
    Resolution_Description__c: string;
    RH_Product__c: string;
    RH_Version__c: string;
    SBR_Group__c: string;
    SBT_State__c: string;
    SBT__c: number;
    Search_Helper__c: string;
    Second_Case_Inactivity_Warning_Sent_At__c: string;
    Send_CSat_Survey__c: boolean;
    Severity__c: string;
    SlaExitDate: string;
    SlaStartDate: string;
    SRM_Flag__c: boolean;
    Status: string;
    Strategic__c: boolean;
    Subject: string;
    Summary_Last_Modified_By_User__c: string;
    Summary_Last_Updated__c: string;
    SuppliedCompany: string;
    SuppliedEmail: string;
    SuppliedName: string;
    SuppliedPhone: string;
    SystemModstamp: string;
    Tags__c: string;
    TAM_Case__c: boolean;
    TargetDate__c: string;
    Time_Since_Case_Was_Last_Updated__c: number;
    Total_Days_WoCollaboration__c: number;
    Translators__c: string;
    TTC__c: number;
    Type: string;
    Version__c: string;
    VHT_Score__c: string;
    Waiting_On_Callback__c: boolean;

    // The following aren't to be directly referenced in fields, see ICase_nested for how to pull this info
    LastModifiedBy: IUser;
    Entitlement: IEntitlement;
    Created_By_User__r: IUser;
    Created_By_Contact__r: IContact;
    Case_Owner__r: IUser;
    Bug__r: IBug;
    ExternalLockBy__r: IUser;
    Account: IAccount;
}

// For typed query params
interface ICase_nested {
    'LastModifiedBy.Id': string;
    'LastModifiedBy.Full_Name__c': string;
    'LastModifiedBy.SSO_Username__c': string;
    'LastModifiedBy.Email': string;
    'LastModifiedBy.Phone': string;
    'LastModifiedBy.TimeZoneSidKey': string;

    'Entitlement.Id': string;
    'Entitlement.Name': string;
    'Entitlement.StartDate': string;
    'Entitlement.Status': string;
    'Entitlement.StatusAndStartDate__c': string;
    'Entitlement.SubscriptionNumber__c': string;
    'Entitlement.SubscriptionProductNumber__c': string;
    'Entitlement.Support_Level__c': string;
    'Entitlement.Quantity__c': number;
    'Entitlement.LastModifiedDate': string;
    'Entitlement.IsPerIncident': boolean;
    'Entitlement.EndDate': string;
    'Entitlement.Is_L3__c': boolean;
    'Entitlement.Is_Layered__c': boolean;
    'Entitlement.Is_TAM_Entitlement__c': boolean;

    'Created_By_User__r.Id': string;
    'Created_By_User__r.Full_Name__c': string;
    'Created_By_User__r.SSO_Username__c': string;
    'Created_By_User__r.Email': string;
    'Created_By_User__r.Phone': string;
    'Created_By_User__r.TimeZoneSidKey': string;

    'Created_By_Contact__r.Id': string;
    'Created_By_Contact__r.Full_Name__c': string;
    'Created_By_Contact__r.SSO_Username__c': string;
    'Created_By_Contact__r.Email': string;
    'Created_By_Contact__r.Phone': string;
    'Created_By_Contact__r.Timezone__c': string;

    'Case_Owner__r.Id': string;
    'Case_Owner__r.Full_Name__c': string;
    'Case_Owner__r.SSO_Username__c': string;
    'Case_Owner__r.Email': string;
    'Case_Owner__r.Phone': string;
    'Case_Owner__r.TimeZoneSidKey': string;

    'Bug__r.Id': string;
    'Bug__r.Name': string;

    'ExternalLockBy__r.Id': string;
    'ExternalLockBy__r.Full_Name__c': string;
    'ExternalLockBy__r.SSO_Username__c': string;
    'ExternalLockBy__r.Email': string;
    'ExternalLockBy__r.Phone': string;
    'ExternalLockBy__r.TimeZoneSidKey': string;

    'Account.Id': string;
    'Account.AccountNumber': string;
    'Account.Name': string;
    'Account.Super_Region__c': boolean;
    'Account.Is_Active__c': boolean;
    'Account.Strategic__c': boolean;
    'Account.hasSRM__c': boolean;
    'Account.hasTAM__c': boolean;
    'Account.SpecialHandlingRequired__c': boolean;
    'Account.Escalate_to_home_geo_without_first_touch__c': boolean;
    'Account.Escalate_to_home_geo_with_1st_touch__c': boolean;
    'Account.Account_Status__c': string;
    'Account.Business_Hours__c': string;
    'Account.CannotAddAttachments__c': boolean;
    'Account.CaseCount__c': number;
    'Account.CSM__c': string;
    'Account.Hold_Support__c': boolean;
    'Account.Secured_Environment__c': boolean;
    'Account.SecureSupport__c': boolean;
    'Account.Subscription_Abuse__c': boolean;
    'Account.Tactical__c': boolean;
    'Account.Type': string;
    'Account.VHT_Score__c': number;
    'Account.Watchlist__c': string;
    'Account.AccountNoteList__r.Id': string;
    'Account.AccountNoteList__r.Body__c': string;
}

export type ICase_fields = Array<keyof ICase | keyof ICase_nested>;

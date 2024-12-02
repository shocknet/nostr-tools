import { NostrEvent } from './pure.ts';
/** Events are **regular**, which means they're all expected to be stored by relays. */
export declare function isRegularKind(kind: number): boolean;
/** Events are **replaceable**, which means that, for each combination of `pubkey` and `kind`, only the latest event is expected to (SHOULD) be stored by relays, older versions are expected to be discarded. */
export declare function isReplaceableKind(kind: number): boolean;
/** Events are **ephemeral**, which means they are not expected to be stored by relays. */
export declare function isEphemeralKind(kind: number): boolean;
/** Events are **parameterized replaceable**, which means that, for each combination of `pubkey`, `kind` and the `d` tag, only the latest event is expected to be stored by relays, older versions are expected to be discarded. */
export declare function isParameterizedReplaceableKind(kind: number): boolean;
/** Classification of the event kind. */
export type KindClassification = 'regular' | 'replaceable' | 'ephemeral' | 'parameterized' | 'unknown';
/** Determine the classification of this kind of event if known, or `unknown`. */
export declare function classifyKind(kind: number): KindClassification;
export declare function isKind<T extends number>(event: unknown, kind: T | Array<T>): event is NostrEvent & {
    kind: T;
};
export declare const Metadata = 0;
export type Metadata = typeof Metadata;
export declare const ShortTextNote = 1;
export type ShortTextNote = typeof ShortTextNote;
export declare const RecommendRelay = 2;
export type RecommendRelay = typeof RecommendRelay;
export declare const Contacts = 3;
export type Contacts = typeof Contacts;
export declare const EncryptedDirectMessage = 4;
export type EncryptedDirectMessage = typeof EncryptedDirectMessage;
export declare const EventDeletion = 5;
export type EventDeletion = typeof EventDeletion;
export declare const Repost = 6;
export type Repost = typeof Repost;
export declare const Reaction = 7;
export type Reaction = typeof Reaction;
export declare const BadgeAward = 8;
export type BadgeAward = typeof BadgeAward;
export declare const Seal = 13;
export type Seal = typeof Seal;
export declare const PrivateDirectMessage = 14;
export type PrivateDirectMessage = typeof PrivateDirectMessage;
export declare const GenericRepost = 16;
export type GenericRepost = typeof GenericRepost;
export declare const ChannelCreation = 40;
export type ChannelCreation = typeof ChannelCreation;
export declare const ChannelMetadata = 41;
export type ChannelMetadata = typeof ChannelMetadata;
export declare const ChannelMessage = 42;
export type ChannelMessage = typeof ChannelMessage;
export declare const ChannelHideMessage = 43;
export type ChannelHideMessage = typeof ChannelHideMessage;
export declare const ChannelMuteUser = 44;
export type ChannelMuteUser = typeof ChannelMuteUser;
export declare const OpenTimestamps = 1040;
export type OpenTimestamps = typeof OpenTimestamps;
export declare const GiftWrap = 1059;
export type GiftWrap = typeof GiftWrap;
export declare const FileMetadata = 1063;
export type FileMetadata = typeof FileMetadata;
export declare const LiveChatMessage = 1311;
export type LiveChatMessage = typeof LiveChatMessage;
export declare const ProblemTracker = 1971;
export type ProblemTracker = typeof ProblemTracker;
export declare const Report = 1984;
export type Report = typeof Report;
export declare const Reporting = 1984;
export type Reporting = typeof Reporting;
export declare const Label = 1985;
export type Label = typeof Label;
export declare const CommunityPostApproval = 4550;
export type CommunityPostApproval = typeof CommunityPostApproval;
export declare const JobRequest = 5999;
export type JobRequest = typeof JobRequest;
export declare const JobResult = 6999;
export type JobResult = typeof JobResult;
export declare const JobFeedback = 7000;
export type JobFeedback = typeof JobFeedback;
export declare const ZapGoal = 9041;
export type ZapGoal = typeof ZapGoal;
export declare const ZapRequest = 9734;
export type ZapRequest = typeof ZapRequest;
export declare const Zap = 9735;
export type Zap = typeof Zap;
export declare const Highlights = 9802;
export type Highlights = typeof Highlights;
export declare const Mutelist = 10000;
export type Mutelist = typeof Mutelist;
export declare const Pinlist = 10001;
export type Pinlist = typeof Pinlist;
export declare const RelayList = 10002;
export type RelayList = typeof RelayList;
export declare const BookmarkList = 10003;
export type BookmarkList = typeof BookmarkList;
export declare const CommunitiesList = 10004;
export type CommunitiesList = typeof CommunitiesList;
export declare const PublicChatsList = 10005;
export type PublicChatsList = typeof PublicChatsList;
export declare const BlockedRelaysList = 10006;
export type BlockedRelaysList = typeof BlockedRelaysList;
export declare const SearchRelaysList = 10007;
export type SearchRelaysList = typeof SearchRelaysList;
export declare const InterestsList = 10015;
export type InterestsList = typeof InterestsList;
export declare const UserEmojiList = 10030;
export type UserEmojiList = typeof UserEmojiList;
export declare const DirectMessageRelaysList = 10050;
export type DirectMessageRelaysList = typeof DirectMessageRelaysList;
export declare const FileServerPreference = 10096;
export type FileServerPreference = typeof FileServerPreference;
export declare const NWCWalletInfo = 13194;
export type NWCWalletInfo = typeof NWCWalletInfo;
export declare const LightningPubRPC = 21000;
export type LightningPubRPC = typeof LightningPubRPC;
export declare const ClientAuth = 22242;
export type ClientAuth = typeof ClientAuth;
export declare const NWCWalletRequest = 23194;
export type NWCWalletRequest = typeof NWCWalletRequest;
export declare const NWCWalletResponse = 23195;
export type NWCWalletResponse = typeof NWCWalletResponse;
export declare const NostrConnect = 24133;
export type NostrConnect = typeof NostrConnect;
export declare const HTTPAuth = 27235;
export type HTTPAuth = typeof HTTPAuth;
export declare const Followsets = 30000;
export type Followsets = typeof Followsets;
export declare const Genericlists = 30001;
export type Genericlists = typeof Genericlists;
export declare const Relaysets = 30002;
export type Relaysets = typeof Relaysets;
export declare const Bookmarksets = 30003;
export type Bookmarksets = typeof Bookmarksets;
export declare const Curationsets = 30004;
export type Curationsets = typeof Curationsets;
export declare const ProfileBadges = 30008;
export type ProfileBadges = typeof ProfileBadges;
export declare const BadgeDefinition = 30009;
export type BadgeDefinition = typeof BadgeDefinition;
export declare const Interestsets = 30015;
export type Interestsets = typeof Interestsets;
export declare const CreateOrUpdateStall = 30017;
export type CreateOrUpdateStall = typeof CreateOrUpdateStall;
export declare const CreateOrUpdateProduct = 30018;
export type CreateOrUpdateProduct = typeof CreateOrUpdateProduct;
export declare const LongFormArticle = 30023;
export type LongFormArticle = typeof LongFormArticle;
export declare const DraftLong = 30024;
export type DraftLong = typeof DraftLong;
export declare const Emojisets = 30030;
export type Emojisets = typeof Emojisets;
export declare const Application = 30078;
export type Application = typeof Application;
export declare const LiveEvent = 30311;
export type LiveEvent = typeof LiveEvent;
export declare const UserStatuses = 30315;
export type UserStatuses = typeof UserStatuses;
export declare const ClassifiedListing = 30402;
export type ClassifiedListing = typeof ClassifiedListing;
export declare const DraftClassifiedListing = 30403;
export type DraftClassifiedListing = typeof DraftClassifiedListing;
export declare const Date = 31922;
export type Date = typeof Date;
export declare const Time = 31923;
export type Time = typeof Time;
export declare const Calendar = 31924;
export type Calendar = typeof Calendar;
export declare const CalendarEventRSVP = 31925;
export type CalendarEventRSVP = typeof CalendarEventRSVP;
export declare const Handlerrecommendation = 31989;
export type Handlerrecommendation = typeof Handlerrecommendation;
export declare const Handlerinformation = 31990;
export type Handlerinformation = typeof Handlerinformation;
export declare const CommunityDefinition = 34550;
export type CommunityDefinition = typeof CommunityDefinition;

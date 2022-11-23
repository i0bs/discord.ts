import { Snowflake } from "./abc"

export class Channel {
  constructor(
    public id: Snowflake,
    public type: ChannelType,
    public guildId: Snowflake,
    public position?: number,
    public permissionOverwrites?: Overwrite,
    public name: string = null,
    public topic: string = null,
    public nsfw?: boolean,
    public lastMessageId: Snowflake = null,
    public bitrate?: number,
    public userLimit?: number,
    public rateLimitPerUser?: number,
    //  public recipients?: User[],
    public icon: string = null,
    public ownerId?: Snowflake,
    public applicationId?: Snowflake,
    public parentId: Snowflake = null,
    public lastPinTimestamp: string = null,
    public rtcRegion: string = null,
    public videoQualityMode?: VideoQualityMode,
    public messageCount?: number,
    public memberCount?: number,
    public threadMetadata?: ThreadMetadata,
    public member?: ThreadMember,
    public defaultAutoArchiveDuration?: number,
    public permissions?: string,
    public flags?: ChannelFlags,
    public totalMessageSent?: number,
    public availableTags?: ForumTag[],
    public appliedTags?: Snowflake[],
    //  public defaultReactionEmoji?: DefaultReaction,
    public defaultThreadRateLimitPerUser?: number,
    public defaultSortOrder: SortOrderType = null,
  ) {}

  lastPinTimestampDate(): Date {
    return new Date(this.lastPinTimestamp)
  }
}

export enum ChannelType {
  GuildText = 0,
  Dm = 1,
  GuildVoice = 2,
  GroupDm = 3,
  GuildCategory = 4,
  GuildAnnouncement = 5,
  AnnouncementThread = 10,
  PublicThread = 11,
  PrivateThread = 12,
  GuildStageVoice = 13,
  GuildDirectory = 14,
  GuildForum = 15
}

export enum ChannelFlags {
  Pinned = 1 << 1,
  RequireTag = 1 << 4
}

export type Overwrite = {
  id: Snowflake
  type: number
  allow: string
  deny: string
}

export enum VideoQualityMode {
  Auto = 1,
  Full = 2
}

export enum SortOrderType {
  LatestActivity = 0,
  CreationDate = 1
}

export class ThreadMetadata {
  constructor(
    public archived: boolean,
    public autoArchiveDuration: number,
    public archiveTimestamp: string,
    public locked: boolean,
    public invitable?: boolean,
    public createTimestamp: string = null,
  ) {}

  archiveTimestampDate(): Date {
    return new Date(this.autoArchiveDuration)
  }

  createTimestampDate(): Date {
    return new Date(this.createTimestamp)
  }
}

export class ThreadMember {
  constructor(
    public id?: Snowflake,
    public userId?: Snowflake,
    public joinTimestamp: string,
    public flags: number
  ) {}

  joinTimestampDate(): Date {
    return new Date(this.joinTimestamp)
  }
}
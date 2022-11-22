import { Snowflake } from "./abc"

export class Channel {
  id: Snowflake
  type: ChannelType
  guildId: Snowflake
  position?: number
//  permissionOverwrites?: PermissionOverwrite
  name?: string | null
  topic?: string | null
  nsfw?: boolean
  lastMessageId?: Snowflake | null
  bitrate?: number
  userLimit?: number
  rateLimitPerUser?: number
//  recipients?: User[]
  icon?: string | null
  ownerId?: Snowflake
  applicationId?: Snowflake
  parentId?: Snowflake | null
  lastPinTimestamp?: string | null
  rtcRegion?: string | null
  videoQualityMode?: number
  messageCount?: number
  memberCount?: number
//  threadMetadata?: ThreadMetadata
//  member?: ThreadMember
  defaultAutoArchiveDuration?: number
  permissions?: string
  flags?: ChannelFlags
  totalMessageSent?: number
//  availableTags?: Tag[]
  appliedTags?: Snowflake[]
//  defaultReactionEmoji?: DefaultReaction
  defaultThreadRateLimitPerUser?: number
  defaultSortOrder?: number | null

  constructor(
    id: Snowflake,
    type: ChannelType,
    guildId: Snowflake,
    position?: number,
    //  permissionOverwrites?: PermissionOverwrite,
    name: string = null,
    topic: string = null,
    nsfw?: boolean,
    lastMessageId: Snowflake = null,
    bitrate?: number,
    userLimit?: number,
    rateLimitPerUser?: number,
    //  recipients?: User[],
    icon: string = null,
    ownerId?: Snowflake,
    applicationId?: Snowflake,
    parentId: Snowflake = null,
    lastPinTimestamp: string = null,
    rtcRegion: string = null,
    videoQualityMode?: number,
    messageCount?: number,
    memberCount?: number,
    //  threadMetadata?: ThreadMetadata,
    //  member?: ThreadMember,
    defaultAutoArchiveDuration?: number,
    permissions?: string,
    flags?: ChannelFlags,
    totalMessageSent?: number,
//    availableTags?: Tag[],
    appliedTags?: Snowflake[],
    //  defaultReactionEmoji?: DefaultReaction,
    defaultThreadRateLimitPerUser?: number,
    defaultSortOrder: number = null,
  ) {
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

import { Snowflake } from "./abc"

export class AutoModerationRule {
  id: Snowflake
  guildId: Snowflake
  name: string
  creatorId: Snowflake
  eventType: EventType
  triggerType: TriggerType
  triggerMetadata: TriggerMetadata
  actions: AutoModerationAction[]
  enabled: boolean
  exemptRoles: Snowflake[]
  exemptChannels: Snowflake[]
}

export enum EventType {
  MessageSend = 1
}

export enum TriggerType {
  Keyword = 1,
  Spam = 3,
  KeywordPreset = 4,
  MentionSpam = 5
}

export type TriggerMetadata = {
  keywordFilter: string[]
  regexPatterns: string[]
  presets: KeywordPresetType[]
  allowList: string[]
  mentionTotalLimit: number
}

export enum KeywordPresetType {
  Profanity = 1,
  SexualContent = 2,
  Slurs = 3
}

export type AutoModerationAction = {
  type: ActionType
  metadata: ActionMetadata
}

export enum ActionType {
  BlockMessage = 1,
  SendAlertMessage = 2,
  Timeout = 3
}

export type ActionMetadata = {
  channelId: Snowflake
  durationSeconds: number
}
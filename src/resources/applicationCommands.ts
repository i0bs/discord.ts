import { Locale, Snowflake } from "./abc"
import { ChannelType } from "./channel"

export type ApplicationCommand = {
  id: Snowflake
  type: ApplicationCommandType
  applicationId: Snowflake
  guildId: Snowflake
  name: string
  nameLocalizations?: Partial<Record<Locale, string>> | null
  description: string
  descriptionLocalizations?: Partial<Record<Locale, string>> | null
  options?: ApplicationCommandOption[]
  defaultMemberPermissions?: string | null
  dmPermission?: boolean
  defaultPermission?: boolean | null
  version: Snowflake
}

export enum ApplicationCommandType {
  ChatInput = 1,
  User = 2,
  Message = 3
}

/**
 * Represents an option of an application command from Discord.
 */
export type ApplicationCommandOption = {
  type: ApplicationCommandOptionType
  name: string
  nameLocalizations?: Partial<Record<Locale, string>> | null
  description: string
  descriptionLocalizations?: Partial<Record<Locale, string>> | null
  required?: boolean
  choices?: ApplicationCommandOptionChoice[]
  options?: ApplicationCommandOption[]
  channelTypes: ChannelType[]
  minValue?: number | bigint
  maxValue?: number | bigint
  minLength?: number
  maxLength?: number
  autocomplete?: boolean
}

export enum ApplicationCommandOptionType {
  SubCommand = 1,
  SubCommandGroup = 2,
  String = 3,
  Integer = 4,
  Boolean = 5,
  User = 6,
  Channel = 7,
  Role = 8,
  Mentionable = 9,
  Number = 10,
  Attachment = 11
}

export type ApplicationCommandOptionChoice = {
  name: string
  nameLocalizations?: Partial<Record<Locale, string>> | null
  value: string | number
}

export class ApplicationGuildCommandPermissions {
  constructor(
    public id: Snowflake,
    public applicationId: Snowflake,
    public guildId: Snowflake,
    public permissions: ApplicationCommandPermissions[]
  ) {}

  allChannels(): number {
    return this.id.value - 1
  }
}

export class ApplicationCommandPermissions {
  constructor(
    public id: Snowflake,
    public type: ApplicationCommandPermissionType,
    public permission: boolean
  ) {}

  allChannels(): number {
    return this.id.value - 1
  }
}

export enum ApplicationCommandPermissionType {
  Role = 1,
  User = 2,
  Channel = 3
}

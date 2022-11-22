import { ChannelTypes, Locale, Snowflake } from "./abc"

/**
 * Represents an application command from Discord.
 */
export interface ApplicationCommand {
  id: Snowflake
  type: ApplicationCommandType
  applicationId: Snowflake
  guildId: Snowflake
  name: string
  nameLocalizations?: { Locale: string } | null
  description: string
  descriptionLocalizations?: { Locale: string } | null
  options?: ApplicationCommandOption[]
  defaultMemberPermissions?: string | null
  dmPermission?: boolean
  defaultPermission?: boolean | null
  version: Snowflake
}
export type SlashCommand = ApplicationCommand
export type Command = ApplicationCommand

/**
 * Represents the types of application commands from Discord.
 */
export enum ApplicationCommandType {
  ChatInput = 1,
  User = 2,
  Message = 3
}
export type SlashCommandType = ApplicationCommandType
export type CommandType = ApplicationCommandType

/**
 * Represents an option of an application command from Discord.
 */
export interface ApplicationCommandOption {
  type: ApplicationCommandOptionType
  name: string
  nameLocalizations?: { Locale: string } | null
  description: string
  descriptionLocalizations?: { Locale: string } | null
  required?: boolean
  choices?: ApplicationCommandOptionChoice[]
  options?: ApplicationCommandOption[]
  channelTypes: ChannelTypes[]
  minValue?: number | bigint
  maxValue?: number | bigint
  minLength?: number
  maxLength?: number
  autocomplete?: boolean
}
export type SlashCommandOption = ApplicationCommandOption
export type CommandOption = ApplicationCommandOption
export type Option = ApplicationCommandOption

/**
 * Represents the types of options for application commands from Discord.
 */
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
export type SlashCommandOptionType = ApplicationCommandOptionType
export type CommandOptionType = ApplicationCommandOptionType
export type OptionType = ApplicationCommandOptionType

/**
 * Represents a choice for an option in an application command from Discord.
 */
export interface ApplicationCommandOptionChoice {
  name: string
  nameLocalizations?: { Locale: string } | null
  value: string | number
}
export type SlashCommandOptionChoice = ApplicationCommandOptionChoice
export type CommandOptionChoice = ApplicationCommandOptionChoice
export type OptionChoice = ApplicationCommandOptionChoice
export type Choice = ApplicationCommandOptionChoice

export class ApplicationGuildCommandPermissions {
  id: Snowflake
  applicationId: Snowflake
  guildId: Snowflake
  permissions: ApplicationCommandPermissions[]

  constructor(
    id: Snowflake,
    applicationId: Snowflake,
    guildId: Snowflake,
    permissions: ApplicationCommandPermissions[]
  ) {
    this.id = id
    this.applicationId = applicationId
    this.guildId = guildId
    this.permissions = permissions
  }

  allChannels(): number {
    return this.id.value - 1
  }
}
export type SlashGuildCommandPermissions = ApplicationGuildCommandPermissions
export type GuildCommandPermissions = ApplicationGuildCommandPermissions
export type GuildPermissions = ApplicationGuildCommandPermissions

export class ApplicationCommandPermissions {
  id: Snowflake
  type: ApplicationCommandPermissionType
  permission: boolean

  constructor(
    id: Snowflake,
    type: ApplicationCommandPermissionType,
    permission: boolean
  ) {
    this.id = id
    this.type = type
    this.permission = permission
  }

  allChannels(): number {
    return this.id.value - 1
  }
}
export type SlashCommandPermissions = ApplicationCommandPermissions
export type CommandPermissions = ApplicationCommandPermissions
export type Permissions = ApplicationCommandPermissions

export enum ApplicationCommandPermissionType {
  Role = 1,
  User = 2,
  Channel = 3
}
export type SlashCommandPermissionType = ApplicationCommandPermissionType
export type CommandPermissionType = ApplicationCommandPermissionType
export type PermissionType = ApplicationCommandPermissionType

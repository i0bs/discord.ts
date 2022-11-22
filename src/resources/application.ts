import { Snowflake } from "./abc"
import { PartialUser } from "./user"

export type Application = {
  id: Snowflake
  name: string
  icon: string | null
  description: string
  rpcOrigins?: string[]
  botPublic: boolean
  botRequireCodeGrant: boolean
  termsOfServiceUrl?: string
  privacyPolicyUrl?: string
  owner?: PartialUser
  summary: string
  verifyKey: string
  team: Team | null
  guildId: Snowflake
  primarySkuId: Snowflake
  slug?: string
  coverImage?: string
  flags?: ApplicationPublicFlags
  tags?: string[]
  installParams?: InstallParams
  customInstallUrl?: string
}

export enum ApplicationPublicFlags {
  GatewayPresence = 1 << 12,
  GatewayPresenceLimited = 1 << 13,
  GatewayGuildMembers = 1 << 14,
  GatewayGuildMembersLimited = 1 << 15,
  VerificationPendingGuildLimit = 1 << 16,
  Embedded = 1 << 17,
  GatewayMessageContent = 1 << 18,
  GatewayMessageContentLimited = 1 << 19,
  ApplicationCommandBadge = 1 << 23
}

export type InstallParams = {
  scopes: string[]
  permissions: string
}

export type Team = {
  icon: string | null
  id: Snowflake
  members: TeamMember[]
  name: string
  ownerUserId: Snowflake
}

export type TeamMember = {
  membershipState: TeamMembershipState
  permissions: string[]
  teamId: Snowflake
  user: PartialUser
}

export enum TeamMembershipState {
  Invited = 1,
  Accepted = 2
}
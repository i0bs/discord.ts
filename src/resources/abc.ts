/**
 * Represents an unique identifiable descriptor from Discord.
 */
export class Snowflake {
    value: number;

    /**
     * The amount of milliseconds since the Discord Epoch, (the first second
     * of 2015) or `1420070400000`.
     */
    readonly timestamp: number
    /**
     * The internal worker ID.
     */
    readonly workerId: number
    /**
     * The internal process ID.
     */
    readonly processId: number
    /**
     * The amount of times a resource class has been generated from this ID.
     */
    readonly increment: number

    constructor(value: string | number) {
      this.value = value as number

      this.timestamp = (this.value >> 22) + 1420070400000
      this.workerId = (this.value & 0x3E0000) >> 17
      this.processId = (this.value & 0x1F000) >> 12
      this.increment = this.value & 0xFFF
    }

    toString(): string {
        return this.value as unknown as string
    }
}

/**
 * Represents the types of channels from Discord.
 */
export enum ChannelTypes {
  GuildText = 0,
  DM = 1,
  GuildVoice = 2,
  GuildDM = 3,
  GuildCategory = 4,
  GuildAnnouncement = 5,
  AnnouncementThread = 10,
  PublicThread = 11,
  PrivateThread = 12,
  GuildStageVoice = 13,
  GuildDirectory = 14,
  GuildForum = 15
}

/**
 * Represents the types of locale from Discord.
 */
export enum Locale {
  Danish = "da",
  German = "de",
  EnglishUK = "en-GB",
  EnglishUS = "en-US",
  Spanish = "es-ES",
  French = "fr",
  Croatian = "hr",
  Italian = "it",
  Lithuanian = "lt",
  Hungarian = "hu",
  Dutch = "nl",
  Polish = "pl",
  Portuguese = "pt-BR",
  Romanian = "ro",
  Finnish = "fi",
  Swedish = "sv-SE",
  Vietnamese = "vi",
  Turkish = "tr",
  Czech = "cs",
  Greek = "el",
  Bulgarian = "bg",
  Russian = "ru",
  Ukrainian = "uk",
  Hindi = "hi",
  Thai = "th",
  ChineseChina = "zh-CN",
  Japanese = "ja",
  ChineseTaiwan = "zh-TW",
  Korean = "ko"
}

/**
 * Represents a partial emoji from Discord.
 */
export interface PartialEmoji {
  name?: string | null
  id?: Snowflake | null
  animated?: boolean
}
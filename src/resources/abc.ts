export class Snowflake {
    readonly timestamp: number
    readonly workerId: number
    readonly processId: number
    readonly increment: number

    constructor(public value: number) {
      this.timestamp = (this.value >> 22) + 1420070400000
      this.workerId = (this.value & 0x3E0000) >> 17
      this.processId = (this.value & 0x1F000) >> 12
      this.increment = this.value & 0xFFF
    }

    toString(): string {
        return this.value as unknown as string
    }

    toDate(): Date {
        return new Date(this.timestamp)
    }
}

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

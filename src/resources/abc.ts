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

    toDate(): Date {
        return new Date(this.timestamp)
    }
}

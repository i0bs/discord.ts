import { Snowflake } from "./abc"

export type PartialEmoji = {
  name?: string | null
  id?: Snowflake | null
  animated?: boolean
}
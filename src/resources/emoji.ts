import { Snowflake } from "./abc"
import { Serializable, Mapped } from "../utils/serializer"

export class Emoji extends Serializable {
  id: Snowflake | null
  name: string | null
//  roles?: Role[]
//  user?: User
  @Mapped("require_colons")
  requireColons?: boolean
  managed?: boolean
  animated?: boolean
  available?: boolean

  constructor() { super() }
}
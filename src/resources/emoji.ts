import { Snowflake } from "./abc"
import { Serializable, Mapped } from "../utils/serializer"

export class Emoji extends Serializable {
  @Mapped
  id: Snowflake | null
  @Mapped
  name: string | null
//  roles?: Role[]
//  user?: User
  @Mapped("require_colons")
  requireColons?: boolean
  @Mapped
  managed?: boolean
  @Mapped
  animated?: boolean
  @Mapped
  available?: boolean

  constructor() { super() }
}
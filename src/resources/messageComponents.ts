import { ChannelTypes } from "./abc"
import { PartialEmoji } from "./emoji"

export interface Component {
  type: ComponentType
}

export enum ComponentType {
  ActionRow = 1,
  Button = 2,
  StringSelect = 3,
  TextInput = 4,
  UserSelect = 5,
  RoleSelect = 6,
  MentionableSelect = 7,
  ChannelSelect = 8
}

export class ActionRow implements Component {
  type = ComponentType.ActionRow
  components: Component[]

  constructor(components: Component[]) {
    if (components.length > 5) throw new Error("You cannot have more than 5 components in an action row.");
    else this.components = components
  }
}

export class Modal {
  title: string
  customId: string
  components: ActionRow[]

  constructor(
    title: string,
    customId: string,
    components: ActionRow[]
  ) {
    if (title.length > 60) throw new Error("Title must be 60 characters or less.")
    else if (customId.length > 100) throw new Error("Custom ID must be 100 characters or less.")
    else {
      this.title = title
      this.customId = customId
      this.components = components
    }
  }
}

export class Button implements Component {
  type = ComponentType.Button
  style: ButtonStyle
  label?: string
  emoji?: PartialEmoji
  customId?: string
  url?: string
  disabled?: boolean

  constructor(
    style: ButtonStyle = ButtonStyle.Primary,
    label?: string,
    emoji?: PartialEmoji,
    customId?: string,
    url?: string,
    disabled: boolean = false
  ) {
    if (label.length > 80) throw new Error("Label must be 80 characters or less.")
    else if (customId.length > 100) throw new Error("Custom ID must be 100 characters or less.")
    else if (customId && url) throw new Error("You cannot have a custom ID and a URL.")
    else {
      this.style = style
      this.label = label
      this.emoji = emoji
      this.customId = customId
      this.url = url
      this.disabled = disabled
    }
  }
}

export enum ButtonStyle {
  Primary = 1,
  Secondary = 2,
  Success = 3,
  Danger = 4,
  Link = 5
}

export class SelectMenu implements Component {
  type: ComponentType
  customId: string
  options?: SelectMenuOption[]
  channelTypes?: ChannelTypes
  placeholder?: string
  minValues?: number
  maxValues?: number
  disabled?: boolean

  constructor(
    type: ComponentType = ComponentType.StringSelect,
    customId: string,
    options?: SelectMenuOption[],
    channelTypes?: ChannelTypes,
    placeholder?: string,
    minValues: number = 0,
    maxValues: number = 1,
    disabled: boolean = false
  ) {
    if (customId.length > 100) throw new Error("Custom ID must be 100 characters or less.")
    else if (options.length > 25) throw new Error("You may only have up to 25 select menu options.")
    else if (placeholder.length > 150) throw new Error("Placeholder must be 150 characters or less.")
    else if (minValues > 25 || minValues < 0) throw new Error("The minimum amount of values must be between 0-25.")
    else if (maxValues > 25 || maxValues < 1) throw new Error("The maximum amount of values must be between 1-25.")
    else if (options && type != ComponentType.StringSelect) throw new Error("Options are required for string selects.")
    else if (channelTypes && type != ComponentType.StringSelect) throw new Error("Channel types can only be used on string selects.")
    else {
      this.type = type
      this.customId = customId
      this.options = options
      this.channelTypes = channelTypes
      this.placeholder = placeholder
      this.minValues = minValues
      this.maxValues = maxValues
      this.disabled = disabled
    }
  }
}

export class SelectMenuOption {
  label: string
  value: string
  description?: string
  emoji?: PartialEmoji
  default?: boolean

  constructor(
    label: string,
    value: string,
    description: string,
    emoji?: PartialEmoji,
    default: boolean
  ) {
    if (label.length > 100) throw new Error("Label must be 100 characters or less.")
    else if (value.length > 100) throw new Error("Value must be 100 characters or less.")
    else if (description.length > 100) throw new Error("Description must be 100 characters or less.")
    else {
      this.label = label
      this.value = value
      this.description = description
      this.emoji = emoji
      this.default = default
    }
  }
}

export class TextInput implements Component {
  type = ComponentType.TextInput
  customId: string
  style: TextInputStyle
  label: string
  minLength?: number
  maxLength?: number
  required?: boolean
  value?: string
  placeholder?: string

  constructor(
    customId: string,
    style: TextInputStyle,
    label: string,
    minLength: number = 0,
    maxLength: number = 1,
    required: boolean = true,
    value?: string,
    placeholder?: string
  ) {
      if (customId.length > 100) throw new Error("Custom ID must be 100 characters or less.")
      else if (minLength < 0 || minLength > 4000) throw new Error("The minimum length of the input must be between 0-4000.")
      else if (maxLength < 1 || maxLength > 4000) throw new Error("The maximum length of the input must be between 1-4000.")
      else if (value.length > 4000) throw new Error("Value must be between 4000 characters or less.")
      else if (placeholder.length > 100) throw new Error("Placeholder must be 100 characters or less.")
      else {
        this.customId = customId
        this.style = style
        this.label = label
        this.minLength = minLength
        this.maxLength = maxLength
        this.required = required
        this.value = value
        this.placeholder = placeholder
      }
  }
}

export enum TextInputStyle {
  Short = 1,
  Paragraph = 2
}
import { ChannelType } from "./channel"
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
  
  constructor(public components: Component[]) {
    if (components.length > 5) throw new Error("You cannot have more than 5 components in an action row.");
    else this.components = components
  }
}

export class Modal {
  constructor(
    public title: string,
    public customId: string,
    public components: ActionRow[]
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

  constructor(
    public style: ButtonStyle = ButtonStyle.Primary,
    public label?: string,
    public emoji?: PartialEmoji,
    public customId?: string,
    public url?: string,
    public disabled: boolean = false
  ) {
    if (label.length > 80) throw new Error("Label must be 80 characters or less.")
    else if (customId.length > 100) throw new Error("Custom ID must be 100 characters or less.")
    else if (customId && url) throw new Error("You cannot have a custom ID and a URL.")
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
  constructor(
    public type: ComponentType = ComponentType.StringSelect,
    public customId: string,
    public options?: SelectMenuOption[],
    public channelTypes?: ChannelType[],
    public placeholder?: string,
    public minValues: number = 0,
    public maxValues: number = 1,
    public disabled: boolean = false
  ) {
    if (customId.length > 100) throw new Error("Custom ID must be 100 characters or less.")
    else if (options.length > 25) throw new Error("You may only have up to 25 select menu options.")
    else if (placeholder.length > 150) throw new Error("Placeholder must be 150 characters or less.")
    else if (minValues > 25 || minValues < 0) throw new Error("The minimum amount of values must be between 0-25.")
    else if (maxValues > 25 || maxValues < 1) throw new Error("The maximum amount of values must be between 1-25.")
    else if (options && type != ComponentType.StringSelect) throw new Error("Options are required for string selects.")
    else if (channelTypes && type != ComponentType.StringSelect) throw new Error("Channel types can only be used on string selects.")
  }
}

export class SelectMenuOption {
  constructor(
    public label: string,
    public value: string,
    public description: string,
    public emoji?: PartialEmoji,
    public _default: boolean = false
  ) {
    if (label.length > 100) throw new Error("Label must be 100 characters or less.")
    else if (value.length > 100) throw new Error("Value must be 100 characters or less.")
    else if (description.length > 100) throw new Error("Description must be 100 characters or less.")
  }
}

export class TextInput implements Component {
  type = ComponentType.TextInput

  constructor(
    public customId: string,
    public style: TextInputStyle,
    public label: string,
    public minLength: number = 0,
    public maxLength: number = 1,
    public required: boolean = true,
    public value?: string,
    public placeholder?: string
  ) {
    if (customId.length > 100) throw new Error("Custom ID must be 100 characters or less.")
    else if (minLength < 0 || minLength > 4000) throw new Error("The minimum length of the input must be between 0-4000.")
    else if (maxLength < 1 || maxLength > 4000) throw new Error("The maximum length of the input must be between 1-4000.")
    else if (value.length > 4000) throw new Error("Value must be between 4000 characters or less.")
    else if (placeholder.length > 100) throw new Error("Placeholder must be 100 characters or less.")
  }
}

export enum TextInputStyle {
  Short = 1,
  Paragraph = 2
}
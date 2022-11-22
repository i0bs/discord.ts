# discord.ts

A TypeScript API wrapper for Discord.

## Motive

After a year of being an official library developer for the Discord ecosystem,
and having created my own side-project in Python, I want to create an API
wrapper for Discord's RESTful API in TypeScript for fun.

discord.ts does not aim to replace or supersede
[discord.js](https://github.com/discordjs) in any capacity. The work they've
done on their library is phenomenal and in no way is this project trying to
steal its' thunder.

## Roadmap

Here's an non-exhaustive list of items remaining before making any release:

- [ ] Implement interfaces and classes for resources
  - [ ] ABCs (Abstract Base Classes) for `Snowflake`, `Object` and etc.
  - [ ] Application Commands
  - [ ] Message Components
  - [ ] Application
  - [ ] Audit Log
  - [ ] Auto Moderation
  - [ ] Channel
  - [ ] Emoji
  - [ ] Guild
  - [ ] Guild Scheduled Event
  - [ ] Guild Template
  - [ ] Invite
  - [ ] Stage Instance
  - [ ] Sticker
  - [ ] User
  - [ ] Voice
  - [ ] Webhook
- [ ] Implement a basic and external REST package for HTTP
  - [ ] Route endpoints for all resources
  - [ ] Preemptive and occuring rate limiting
- [ ] Implement a very basic and external client package
  - [ ] Add TypeScript decorators for commands and permissions

### Items not planned

Here's some things that aren't planned to come ship with discord.ts:

- A builtin cache
- Gateway

## Footernote

There is no official Discord for this project at this time. This is being
discussed within [The Yone Zone](https://discord.gg/yoni) though if you'd like
to join that instead.

If you'd like to contribute, please make a Pull Request or Issue.
import fetch from "node-fetch"

export class REST {
  token: string
  headers: { [key: string]: string }

  constructor(token: string) {
    this.token = token
    this.headers = { "Authorization": `Bot ${this.token}` }
  }

  async get(route: string) {
    const response = await fetch(route, {
      method: "get",
      headers: this.headers
    })
    const json = await response.json()

    if (!response.ok) throw new Error(`Response ${response.statusText}: ${json}`)
    else return json
  }

  async post(route: string, json?: { [key: string]: string }) {
    const response = await fetch(route, {
      method: "post",
      body: JSON.stringify(json),
      headers: this.headers
    })
    const _json = await response.json()

    if (!response.ok) throw new Error(`Response ${response.statusText}: ${_json}`)
    else return _json
  }

  async put(route: string, json?: { [key: string]: string }) {
    const response = await fetch(route, {
      method: "put",
      body: JSON.stringify(json),
      headers: this.headers
    })
    const _json = await response.json()

    if (!response.ok) throw new Error(`Response ${response.statusText}: ${_json}`)
    else return _json
  }
}
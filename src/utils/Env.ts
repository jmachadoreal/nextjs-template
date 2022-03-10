type Response = string | undefined

class Env {
  public get(key: string, _default?: string): Response {
    return process.env[key] || _default
  }

  public public(key: string, _default?: string): Response {
    return process.env[`NEXT_PUBLIC_${key}`] || _default
  }
}

export default new Env()

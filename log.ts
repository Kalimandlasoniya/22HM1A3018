export function Log(
  app: string,
  level: string,
  type: string,
  message: string,
  token: string
) {
  console.log(`[${app}] [${level}] [${type}] ${message} (token: ${token})`);
}

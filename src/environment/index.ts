import { readFileSync } from 'fs'

export class Environment {
  private static VARIABLES: any = {}

  public static prepare = (
    environmentFilePath: string = '.env'
  ) => {
    try {
      const contents = String(readFileSync(environmentFilePath))

      const variables = contents.split('\n')

      for (const variable of variables) {
        if (variable === '' || variable.startsWith('#')) {
          continue;
        }

        const [key, value] = variable.split('=')

        Environment.VARIABLES[key] = value
      }
    } catch (err) {
      console.error(err)      
    }
  }

  private static get = (
    key: string
  ) => Environment.VARIABLES[key]

  public static getInt = (
    key: string
  ): number => Number(Environment.get(key))

  public static getString = (
    key: string
  ): string => String(Environment.get(key))
}
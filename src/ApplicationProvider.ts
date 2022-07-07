import { Environment } from 'Environment'

import { PostgresDatabaseProvider } from 'storage/Database/PostgresDatabaseProvider'

export class ApplicationProvider {
  public static prepare = (
    port: number = 3333
  ) => {
    try {
      /**
       * Database Providers
       */

      ApplicationProvider.Database.POSTGRES.prepare()

      /**
       * Start HTTP Server
       */

      console.debug(`Server is running on ${port}! 🚀`)
    } catch (err) {
      console.error(err)
    }
  }

  public static Database = class {
    public static POSTGRES = new PostgresDatabaseProvider(
      Environment.getString('POSTGRES_HOST'),
      Environment.getInt('POSTGRES_PORT'),
      Environment.getString('POSTGRES_USERNAME'),
      Environment.getString('POSTGRES_PASSWORD'),
      Environment.getString('POSTGRES_DATABASE')
    )
  }
}
import { DatabaseProvider } from 'Providers/Database/DatabaseProvider'

import knex, { Knex } from 'knex'

export class PostgresDatabaseProvider extends DatabaseProvider<Knex> {
  protected host: string
  protected port: number
  protected username: string
  protected password: string
  protected database: string

  private provider!: Knex

  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string
  ) {
    super()

    this.host = host
    this.port = port
    this.username = username
    this.password = password
    this.database = database

    console.log({
      host,
      port,
      username,
      password,
      database
    })
  }

  public prepare = () => {
    try {
      this.provider = knex({
        client: 'pg',
        connection: {
          host: this.host,
          port: this.port,
          user: this.username,
          password: this.password,
          db: this.database
        },
        pool: {
          max: 8,
          min: 4
        }
      })

      this.provider.raw('SELECT 1;').then(() => {
        console.log('Connection to PostgreSQL Server looks good!')
      })
    } catch (err) {
      console.error(err)
    }
  }

  public provide = (): Knex => this.provider
}
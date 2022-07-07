import { IProvider } from 'Providers/IProvider'

export abstract class DatabaseProvider<T> implements IProvider<T> {
  public abstract prepare: () => void

  public abstract provide: () => T
}

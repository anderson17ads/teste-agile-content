import crypto from 'crypto';

export abstract class Entity<T> {
  public props;
  protected _id;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID;
  }
}
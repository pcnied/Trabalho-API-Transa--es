interface BaseRepositoryInterface<T> {
  getOne(key: string, value: string): T | undefined;
  getAll(): T[];
  getById(id: string): T | undefined;
  getBy(key: string, value: string): T[];
  create(item: T): T;
  delete(id: string): void;
  update(id: string, item: any): T;
}

export default BaseRepositoryInterface;

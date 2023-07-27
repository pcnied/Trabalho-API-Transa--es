import BaseRepositoryInterface from "./baseRepository.interface";

abstract class BaseRepository<T> implements BaseRepositoryInterface<T> {
  constructor(protected repository: T[]) {
    this.repository = repository;
  }
  getAll(): T[] {
    return this.repository;
  }

  getOne(key: string, value: string): T | undefined {
    return this.repository.find((item) => item[key as keyof T] == value);
  }

  getById(id: string): T | undefined {
    return this.repository.find((item) => item["id" as keyof T] === id);
  }

  getBy(key: string, value: string): T[] {
    const items = this.repository.filter((item) => {
      return item[key as keyof T] == value;
    });

    return items;
  }

  create(item: T): T {
    this.repository.push(item);
    return item;
  }

  delete(id: string): void {
    const index = this.repository.findIndex(
      (item) => item["id" as keyof T] === id
    );
    this.repository.splice(index, 1);
  }

  update(id: string, item: any): T {
    const indexFound = this.repository.findIndex(
      (item) => item["id" as keyof T] === id
    );
    const keys = Object.keys(item);

    for (const key of keys) {
      this.repository[indexFound][key as keyof T] = item[key];
    }

    return this.repository[indexFound];
  }
}

export default BaseRepository;

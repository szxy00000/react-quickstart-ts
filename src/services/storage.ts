/**
 * localstorage
 */

export class Storage {
  static getLocalStorage<T>(key: string) {
    const value: any = localStorage.getItem(key);
    try {
      return JSON.parse(value) as T;
    } catch (e) {
      return value as T;
    }
  }

  static setLocalStorage(key: string, value: any) {
    if (typeof value === "object")
      return localStorage.setItem(key, JSON.stringify(value));
    return localStorage.setItem(key, value);
  }
  
  static getDemo(): number {
    return this.getLocalStorage<number>("DEMO");
  }

  static setDemo(demo) {
    this.setLocalStorage("DEMO", +demo);
  }
}

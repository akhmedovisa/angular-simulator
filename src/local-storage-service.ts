import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  public setValueLocalStorage<T>(key: string, value: T):void {
    
    const stringifyValue = JSON.stringify(value)
    
    localStorage.setItem(key, stringifyValue);
  }
  
  public getValueLocalStorage<T>(key: string): T | null{
    
    const rawData = localStorage.getItem(key);
    
    if (!rawData) {
      return null
    }
    
    return JSON.parse(rawData) as T;
    
  }
  
  public removeValueLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
  
  public removeLocalStorage(): void {
    localStorage.clear
  }
}

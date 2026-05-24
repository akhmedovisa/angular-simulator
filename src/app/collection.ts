class Colection<T> {
  
  private items: T[] = []
  
  constructor(items: T[]) {
    this.items = items
  }
  
  getAllEl(): T[] {
    return this.items;
  }
  
  getEl(i:number): T {
    return this.items[i]
  }
  
  clearAllEl(): T[] {
    this.items.length = 0;
    return this.items;
  }
  
  deleteEl(el: T): T[] {
    if (this.items.findIndex(item => item === el) !== -1) {
      this.items.splice(this.items.findIndex(item => item === el), 1);
      return this.items;
    } else {
      console.log('Данного элемента нет в массиве');
      return this.items;
    }
  }
  
  changeEl(newEl: T, oldEl: T): T[] {
    if (this.items.findIndex(item => item === oldEl) !== -1) {
      this.items[this.items.findIndex(item => item === oldEl)] = newEl;
      return this.items;
    } else {
      console.log('Такого элемента нет в массиве');
      return this.items;
    }
  }
}

const products = ['Яблоко', 'Апельсин', 'Банан', 'Киви', 'Арбуз'];
const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const productsCollection = new Colection(products);
const numbersCollection = new Colection(numbers);

import { Component } from '@angular/core';
import './training';
import { Colors } from '../enums/Color';
import './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  companyName: string = 'румтибет';
  
  isRgbColor(color: Colors): boolean {
    return color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE;
  }
  
  saveLastVisitDate() {
    const lastVisit = localStorage.getItem('lastPageVisit');
    
    if (lastVisit) {
      console.log(`С возвращением, вам последний визит был ${lastVisit}`)
    } else {
      console.log('Добро пожаловать! Это ваш превый визит');
    }
    
    const now = new Date().toLocaleString();
    localStorage.setItem('lastPageVisit', now);
  }
  
  quantityVisits() {
    const currentVisits = Number(localStorage.getItem('numberVisits')) || 1;
    
    if(currentVisits > 1) {
      console.log(`Приветствую вас снова, это ваш ${currentVisits} визит`);
    } else {
      console.log('Добро пожаловать, это ваш первый визит');
    }
    
    localStorage.setItem('numberVisits', (currentVisits+1).toString())
  }
}



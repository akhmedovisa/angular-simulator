import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import './training';
import { Colors } from '../enums/Color';
import './collection';
import { IAdvantages } from '../interfaces/IAdvantages';
import { IGallery } from '../interfaces/IGallery';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  isLoading: boolean = true;
  
  companyName: string = 'румтибет';
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedTravelers: string = '';
  
  liveInput: string = '';
  
  clickCount: number = 0;
  
  isClickerMode: boolean = true;
  
  currentDate: string = '';
  
  advantages: IAdvantages[] = [
    {
      id: 1, 
      title: 'Опытный гид', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      srcImg: '/images/icons/experienced-guide.svg'
    },
    {
      id: 2, 
      title: 'Безопасный поход', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      srcImg: '/images/icons/shield.svg'
    },
    {
      id: 3, 
      title: 'Лояльные цены', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      srcImg: '/images/icons/tag.svg'
    }
  ]
  
  gallery: IGallery[] = [
    {
      id: 1,
      srcImg: '/images/mountain-river.png'
    },
    {
      id: 2,
      srcImg: '/images/man-on-mountain.png'
    },
    {
      id: 3,
      srcImg: '/images/man-on-snowmobile.png'
    },
    {
      id: 4,
      srcImg: '/images/mountain-landscape.png'
    }
  ]
  
  constructor() {
    this.saveLastVisitDate();
    this.quantityVisits();
    
    this.currentDate = new Date().toLocaleString();
    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);
    
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  
  isFormValid():boolean {
    return !this.selectedLocation || !this.selectedDate || !this.selectedTravelers;
  }
  
  isRgbColor(color: Colors): boolean {
    return color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE;
  }
  
  private saveLastVisitDate() {
    const lastVisit = localStorage.getItem('lastPageVisit');
    
    if (lastVisit) {
      console.log(`С возвращением, вам последний визит был ${lastVisit}`)
    } else {
      console.log('Добро пожаловать! Это ваш превый визит');
    }
    
    const now = new Date().toLocaleString();
    localStorage.setItem('lastPageVisit', now);
  }
  
  private quantityVisits() {
    const currentVisits = Number(localStorage.getItem('numberVisits')) || 1;
    
    if(currentVisits > 1) {
      console.log(`Приветствую вас снова, это ваш ${currentVisits} визит`);
    } else {
      console.log('Добро пожаловать, это ваш первый визит');
    }
    
    localStorage.setItem('numberVisits', (currentVisits+1).toString())
  }
  
  increment(): void {
    this.clickCount++;
  }
  
  decrement(): void {
    if (this.clickCount > 0) {
      this.clickCount--;
    }
  }
  
  toggleMode(): void {
    this.isClickerMode = !this.isClickerMode;
  }
}



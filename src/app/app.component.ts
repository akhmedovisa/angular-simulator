import { Component, inject } from '@angular/core';
import { DecimalPipe, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import './training';
import { Colors } from '../enums/Color';
import './collection';
import { IAdvantages } from '../interfaces/IAdvantages';
import { IGallery } from '../interfaces/IGallery';
import { IPopularTours } from '../interfaces/IPopularTours';
import { IBlogTours } from '../interfaces/IBlogTours';
import { ShowMessageService } from '../show-message-service';
import { LocalStorageService } from '../local-storage-service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DecimalPipe, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ShowMessageService]
})
export class AppComponent {
  
  showMessageService: ShowMessageService = inject(ShowMessageService);
  
  localStorageService: LocalStorageService = inject(LocalStorageService);
  
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
  
  popularTours: IPopularTours[] = [
    {
      id: 1,
      rating: 4.9,
      srcImg: '/images/backgrounds/tour-by-lake.png',
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      price: 480,
      currency: '$'
    },
    {
      id: 2,
      rating: 4.5,
      srcImg: '/images/backgrounds/night-tour-on-mountain.png',
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      price: 500,
      currency: '$'
    },
    {
      id: 3,
      rating: 5.0,
      srcImg: '/images/backgrounds/tour-stretching-on-mountain.png',
      title: 'Растяжка в горах',
      subtitle: 'для тех, кто забоится о себе',
      price: 230,
      currency: '$'
    }
  ]
  
  blogTours: IBlogTours[] =[
    {
      id: 1,
      srcImg: '/images/italy-coast.png',
      title: 'Красивая Италия, какая она в реальности?',
      subtitle: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      srcAlt: 'italy-coast'
    },
    {
      id: 2,
      srcImg: '/images/airplane-wing-clouds.png',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      subtitle: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      srcAlt: 'airplane-wing-clouds'
    },
    {
      id: 3,
      srcImg: '/images/solo-traveler-backpacker.png',
      title: 'Как подготовиться к путешествию в одиночку?',
      subtitle: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      srcAlt: 'solo-traveler-backpacker'
    },
    {
      id: 4,
      srcImg: '/images/india-taj-mahal.png',
      title: 'Индия ... летим?',
      subtitle: 'Для современного мира базовый.',
      date: '01/04/2023',
      srcAlt: 'india-taj-mahal'
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
    }, 200);
  }
  
  isFormValid():boolean {
    return !this.selectedLocation || !this.selectedDate || !this.selectedTravelers;
  }
  
  isRgbColor(color: Colors): boolean {
    return color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE;
  }
  
  private saveLastVisitDate() {
    const lastVisit = this.localStorageService.getValue('lastPageVisit');
    
    if (lastVisit) {
      console.log(`С возвращением, вам последний визит был ${lastVisit}`)
    } else {
      console.log('Добро пожаловать! Это ваш превый визит');
    }
    
    const now = new Date().toLocaleString();
    this.localStorageService.setValue('lastPageVisit', now);
  }
  
  private quantityVisits() {
    const currentVisits = Number(this.localStorageService.getValue('numberVisits')) || 1;
    
    if(currentVisits > 1) {
      console.log(`Приветствую вас снова, это ваш ${currentVisits} визит`);
    } else {
      console.log('Добро пожаловать, это ваш первый визит');
    }
    
    this.localStorageService.setValue('numberVisits', (currentVisits+1).toString())
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



import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';
import { TypeMessages } from './enums/TypeMessages';

@Injectable()
export class ShowMessageService {
  
  public readonly defaultMessages: IMessage[] = [
    { id: 1, type: TypeMessages.SUCCESS, message: 'Направления получены' },
    { id: 2, type: TypeMessages.INFO, message: 'Стоимость отправлена на почту' },
    { id: 3, type: TypeMessages.WARN, message: 'Программа недоступна' },
    { id: 4, type: TypeMessages.ERROR, message: 'Материалы недоступны' }
  ];
  
  private activeMessages: IMessage[] =[]
  
  public addMessage(objMsg: IMessage) {
    const newId = Date.now();
    
    this.activeMessages.unshift({id: newId, type: objMsg.type, message: objMsg.message})
    
    setTimeout(() => this.deleteMessage(newId), 5000)
  }
  
  public deleteMessage(id: number) {
    this.activeMessages = this.activeMessages.filter(msg => msg.id !== id)
  }
}

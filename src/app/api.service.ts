import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public hc: HttpClient) { }
  getQuote(){
    return this.hc.get('https://dummyjson.com/quotes');
  }
  askAI(ques:string){
    return this.hc.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBdWMcN8vU7O3oBGeA7ztnzsV0AqWFBAok',
      {
        contents: [
          {
          parts:[{text: ques}],
          },
        ],
      }
    );
  }
}

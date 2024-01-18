import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, interval, throttle } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  timer = new BehaviorSubject<number>(0);  
    
  ngOnInit(){
    this.timer
    .pipe(throttle(val => interval(2000)))
    .subscribe( (timePassed) => {
      console.log(timePassed);
    }); 
    
    setInterval( () => {
      let newValue = this.timer.value + 1000;
      this.timer.next(newValue);
    }, 1000);
  }
}

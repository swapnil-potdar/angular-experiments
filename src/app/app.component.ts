import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-experiments';

  myObservable = new Observable((observer) => {
    console.log('observable starts');
  });

  ngOnInit() {
    this.myObservable.subscribe((val) => {
      console.log(val);
    });
  }
}

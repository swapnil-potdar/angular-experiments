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
    var a = 10;
    var b = 5;
    var c = a + b;
    console.log(c);
  });

  ngOnInit() {
    this.myObservable.subscribe((c) => {
      console.log(c);
    });
  }
}

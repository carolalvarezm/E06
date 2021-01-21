import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs' ;
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { User } from './__models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D-Goals';
}

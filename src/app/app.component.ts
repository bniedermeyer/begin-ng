import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BeginService, ServerLessResponse } from './begin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'begin-ng';
  beginResponse: Observable<ServerLessResponse>;

  constructor(private beginService: BeginService) {}

  ngOnInit() {
    this.beginResponse = this.beginService.fetchDataFromServerless();
  }
}

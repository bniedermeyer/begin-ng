import { Component, OnInit } from '@angular/core';
import { BeginService, ServerLessResponse } from '../begin.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {
  beginResponse: Observable<ServerLessResponse>;

  constructor(private beginService: BeginService) {}

  ngOnInit() {
    this.beginResponse = this.beginService.fetchDataFromServerless().pipe(delay(5000));
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.css']
})
export class FormErrorDisplayComponent implements OnInit {

  @Input() errorMsg: string;
  @Input() displayMsg: boolean;

  constructor() { }

  ngOnInit() {
  }

}

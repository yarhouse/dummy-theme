import { Component, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'allogy-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss']
})
export class ButtonExampleComponent implements OnInit {
  icon = faLeaf;
  constructor() { }

  ngOnInit() {
  }

}

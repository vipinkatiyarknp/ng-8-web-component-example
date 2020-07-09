import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'w-widget',
  templateUrl: './w-widget.component.html',
  styleUrls: ['./w-widget.component.scss']
})
export class WWidgetComponent implements OnInit {
  @Input() config:any = {};
  constructor() { }

  ngOnInit(): void {
    console.log('CONFIG',this.config)
  }

}

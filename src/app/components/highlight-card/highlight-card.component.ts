import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.scss']
})
export class HighlightCardComponent implements OnInit {
  @Input() title: string
  @Input() title_bg: string
  @Input() value: number
constructor() { }

ngOnInit(): void {
}

}

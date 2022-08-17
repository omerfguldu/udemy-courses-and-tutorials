import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') server: { type: string; name: string; content: string };
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log('paragraph :', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('paragraph :', this.paragraph.nativeElement.textContent);
  }
}

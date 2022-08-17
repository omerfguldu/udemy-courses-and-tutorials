import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  addServer(nameInput) {
    this.serverCreated.emit({
      serverName: nameInput,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  addBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName: nameInput,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}

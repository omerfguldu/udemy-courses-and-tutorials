import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverlist = [{ type: 'server', name: 'Testserver', content: 'Just a test' }];

  addedServer(serverData: { serverName: string; serverContent: string }) {
    this.serverlist.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: `server`,
    });
  }

  addedBlueprint(blueprintData: { serverName: string; serverContent: string }) {
    this.serverlist.push({
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      type: `blueprint`,
    });
  }
}

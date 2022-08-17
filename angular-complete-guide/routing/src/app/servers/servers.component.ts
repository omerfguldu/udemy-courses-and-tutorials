import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService],
})
export class ServersComponent implements OnInit {
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  serverList;
  currentServer = this.serversService.getServer(1);

  ngOnInit(): void {
    this.serverList = this.serversService.getServerList();
  }

  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

  onClickServer(i: number) {
    this.currentServer = this.serverList.find((index) => {
      return index.id === i + 1;
    });
  }
}

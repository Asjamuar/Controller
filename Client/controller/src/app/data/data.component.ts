import { Component, OnInit } from '@angular/core';
// import { DATA } from './dummy-data';
import { DbInteractionService } from './db-interaction.service';
// import { UiSwitchModule } from '.././app.component';
// import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any;
  img = '';
  constructor(private dbInteraction: DbInteractionService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dbInteraction.getData().subscribe(data => { this.data = data; });
    // this.data = DATA;
  }

  changeImage(type: string) {
    this.img = type;
  }
}

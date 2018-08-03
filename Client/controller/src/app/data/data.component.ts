import { Component, OnInit } from '@angular/core';
import { DATA } from './dummy-data';
import { DbInteractionService } from './db-interaction.service';
// import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any;
  constructor(private dbInteraction: DbInteractionService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dbInteraction.getData().subscribe(data => { this.data = data; });
  }

}

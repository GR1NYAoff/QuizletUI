import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Models/test';
import { TestsService } from 'src/app/services/tests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss'],
})
export class TestsListComponent implements OnInit {
  
  test:Test;
  list:Test[];

  constructor(private ts: TestsService, private router: Router) {}

  ngOnInit(): void {
    this.refreshList();
    console.log(this.list);
  }

  refreshList() {
    this.ts.getAvailableTests().subscribe((res) => {
      this.list = res as Test[];
      console.log(res);
    });
  }

  getTest(id: number) {
    this.ts.getTest(id).subscribe((res) => {
      this.test = res as Test;
    });
  }

  startTest() {
    this.router.navigate([`/test`])
  }
}

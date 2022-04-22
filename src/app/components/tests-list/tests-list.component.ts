import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Models/test';
import { TestsService } from 'src/app/services/tests.service';
import { ACCESS_TOKEN_KEY } from 'src/app/services/auth.service';
@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss'],
})
export class TestsListComponent implements OnInit {
  tests: Test[] = [];
  test: Test;

  constructor(private ts: TestsService) {}

  ngOnInit(): void {
    this.refreshList();
    
  }

  refreshList() {
    this.ts.getAvailableTests().subscribe((res) => {
      this.tests = res;
      console.log(res);
    });
  }

  getTest(id: number) {
    this.ts.getTest(id).subscribe((res) => {
      this.test = res;
    });
  }
}

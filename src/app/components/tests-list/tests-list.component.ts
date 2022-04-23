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
  
  listTests:Test[];
  test: Test;

  constructor(private ts: TestsService, private router: Router) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.ts.getAvailableTests().subscribe((res) => {
      this.listTests = res as Test[];
      console.log(res);
    });
  }

  getTest(id: number) {
    this.ts.getTest(id).subscribe((res) => {
      this.test = res as Test;
    });
  }

  startTest(testId: number) {
    this.getTest(testId);
    this.router.navigate([`/test/${testId}`])
  }
}

import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Models/test';
import { CURRENT_TEST, TestsService } from 'src/app/services/tests.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(
    private ts: TestsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  currentTest: Test;

  ngOnInit(): void {
    var testId = this.route.params.subscribe((params: any) => {
      console.log(params);
    });
  }
}

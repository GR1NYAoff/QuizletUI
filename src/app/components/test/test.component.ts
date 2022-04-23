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

  getCurrentTest(jsonCurrentTest: string){
    this.currentTest = JSON.parse(jsonCurrentTest);
  }

  ngOnInit(): void {
    var jsonTest = localStorage.getItem(CURRENT_TEST);
    this.getCurrentTest(jsonTest!);
    var testId = this.route.params.subscribe((params: any) => {
      console.log(params);
    });
    console.log(this.currentTest);
  }
}

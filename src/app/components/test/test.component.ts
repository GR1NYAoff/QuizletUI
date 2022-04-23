import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Models/test';
import { CURRENT_TEST } from 'src/app/services/tests.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  currentTest: Test;

  isAgree: boolean = false;
  isProceed: boolean = true;

  change(event: any) {
    if (event.target.checked === true) {
      this.isProceed = false;
    } else {
      this.isProceed = true;
    }
  }

  backToList() {
    localStorage.removeItem(CURRENT_TEST);
    this.router.navigate(['/home']);
  }

  getCurrentTest(): Test {
    var jsonTest = localStorage.getItem(CURRENT_TEST);
    this.currentTest = JSON.parse(jsonTest!);
    return this.currentTest;
  }

  ngOnInit(): void {}
}

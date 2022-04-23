import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/Models/answer.';
import { Question } from 'src/app/Models/question';
import { Test } from 'src/app/Models/test';
import { CURRENT_TEST } from 'src/app/services/tests.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor(private router: Router) {}

  questionList: Question[] = [];
  answerList: Answer[] = [];

  currentQuestion: number = 0;
  test: Test;

  getAllQuestions(): Question[] {
    return JSON.parse(this.getCurrentTest().questions);
  }

  getAllAnswers(): Answer[] {
    return JSON.parse(this.getCurrentTest().answers);
  }

  getCurrentTest(): Test {
    var jsonTest = localStorage.getItem(CURRENT_TEST);
    return JSON.parse(jsonTest!);
  }

  ngOnInit(): void {
    this.questionList = this.getAllQuestions();
    this.answerList = this.getAllAnswers();
  }
}

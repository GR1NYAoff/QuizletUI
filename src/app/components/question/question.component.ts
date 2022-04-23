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

  answerDict: any = {};

  currentQuestion: number = 0;

  correctAnswers: number = 0;
  incorrectAnswers: number = 0;

  progerss: string = '0';

  isQuizComleted: boolean = false;

  getAllQuestions(): Question[] {
    return JSON.parse(this.getCurrentTest().questions);
  }

  getAllAnswers(): Answer[] {
    return JSON.parse(this.getCurrentTest().answers);
  }

  getCurrentTest(): Test {
    const jsonTest = localStorage.getItem(CURRENT_TEST);
    return JSON.parse(jsonTest!);
  }

  nextQuestion(): void {
    this.currentQuestion++;
  }
  previousQuestion(): void {
    this.currentQuestion--;
  }

  checkAnswer(answer: boolean, questionNum: number): void {
    if (`${questionNum}` in this.answerDict) {
      if (this.answerDict[`${questionNum}`] == answer) {
        return;
      } else if (!answer) {
        this.incorrectAnswers++;
        this.correctAnswers--;
        this.answerDict[`${questionNum}`] = answer;
      } else {
        this.incorrectAnswers--;
        this.correctAnswers++;
        this.answerDict[`${questionNum}`] = answer;
      }
    } else {
      answer ? this.correctAnswers++ : this.incorrectAnswers++;
      this.answerDict[`${questionNum}`] = answer;
    }

    if (!(this.currentQuestion >= this.questionList.length - 1)) {
      this.currentQuestion++;
    }

    this.getProgressPercent();

  }

  getProgressPercent() : string {
    this.progerss = (((this.correctAnswers+this.incorrectAnswers)/this.questionList.length)*100).toString();
    return this.progerss;
  }

  ngOnInit(): void {
    this.questionList = this.getAllQuestions();
    this.answerList = this.getAllAnswers();
  }
}

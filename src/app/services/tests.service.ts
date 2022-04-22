import { HttpClient } from '@angular/common/http';
import { AUTH_API_URL } from '../app-injection-tokens';
import { Injectable, Inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Test } from '../Models/test';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  private baseApiUrl = `${this.apiUrl}api/Tests`;

  constructor(
    private httpClient: HttpClient,
    @Inject(AUTH_API_URL) private apiUrl: string
  ) {}

  getAvailableTests(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(this.baseApiUrl);
  }

  getTest(id: number): Observable<Test> {
    return this.httpClient.get<Test>(`${this.baseApiUrl}/${id}`)
  }
}

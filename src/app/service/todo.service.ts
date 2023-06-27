import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = `${environment.api_url}/todo`
  constructor(private httpClient: HttpClient) { }

  getAllToDos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  update(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.baseUrl}/${todo._id}`,todo);
  }
  
  delete(id: string): Observable<Todo[]> {
    return this.httpClient.delete<Todo[]>(`${this.baseUrl}/${id}`);
  }

  addNewTodo(data: any) {
    return this.httpClient.post<Todo>(this.baseUrl, data);
  }
}

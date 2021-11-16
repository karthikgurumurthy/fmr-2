import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AirportService {

    constructor(private http: HttpClient) {}
    
    findAll(): Observable<string[]> {
    const url = 'https://demo.angulararchitects.io/api/Airport';
    return this.http.get<string[]>(url);
    }
  }
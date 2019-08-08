import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ThermometerService {

  constructor(private http: HttpClient) {
  }

  getFiles() {
    return this.http.get('/files/')
  }

  getFileData(fileName) {
    return this.http.get('/file-data/'+fileName, {reportProgress: true, observe:'events'})
  }
}

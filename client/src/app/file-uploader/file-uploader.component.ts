import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  public afuConfig: Object = {
    formatsAllowed: ".json",
    maxSize: "1000",
    uploadAPI: {
      url:'/upload/'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

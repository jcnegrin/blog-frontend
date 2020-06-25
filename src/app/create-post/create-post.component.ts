import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public Editor = ClassicEditor;
  public data;

  uploadedFiles: any[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    this.data = data;
  }

  createPost() {
  }

  onUpload(event) {
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }

}

}

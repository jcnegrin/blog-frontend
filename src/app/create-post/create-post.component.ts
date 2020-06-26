import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { CreatePostService } from './create-post.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public Editor = ClassicEditor;
  public content;
  public title = new FormControl('');
  public url;

  uploadedFiles: any[] = [];

  constructor(private sanitizer: DomSanitizer, private createPostService: CreatePostService) { }

  ngOnInit(): void {
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    this.content = data;
  }

  createPost() {
    try {
      if (this.title.value || this.content || this.uploadedFiles[0]) {
        const post = {
          title: this.title,
          content: this.content,
          image: ''
        };
        this.createPostService.createPost(post)
      }
    } catch (error) {

    }

  }

  onUpload(event) {
    console.log(event);
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.url = this.createPostService.getPostMediaSignedURL();
    // const uploadedUrl = this.createPostService.uploadImage(mediaUrl);
}

}

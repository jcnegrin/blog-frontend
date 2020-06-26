import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts: [];

  constructor(private postService: PostService) { }

  async ngOnInit(): Promise<void> {
    this.posts = await this.postService.getPosts();
  }


}

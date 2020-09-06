import { ComModule } from './com/com.module'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PostService {
    private postsUpdated = new Subject<ComModule[]>();
    private posts: ComModule[] = [];

    getPosts() {
        return [...this.posts];
    }

    getPostUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: ComModule = {title: title, content: content};
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
    
}
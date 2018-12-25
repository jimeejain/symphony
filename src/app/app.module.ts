import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { JobsPostsComponent } from './components/jobs-posts/jobs-posts.component';
import { ShortListsComponent } from './components/short-lists/short-lists.component';
import { InterviewsComponent } from './components/interviews/interviews.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsPostsComponent,
    ShortListsComponent,
    InterviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

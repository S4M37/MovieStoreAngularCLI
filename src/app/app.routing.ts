import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

// Layouts

export const routes: Routes = [
  /*{
   path: '**',
   component : P404Component
   },*/
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
    /*,
     children: [
     {
     path: 'question',
     loadChildren: './manager/question/question.module#QuestionModule'
     },
     {
     path: 'polls',
     loadChildren: './manager/polls/polls.module#PollsModule'
     },
     {
     path: 'stats',
     loadChildren: './manager/stats/stats.module#StatsModule'

     },
     {
     path: 'vote',
     loadChildren: './user/vote/vote.module#VoteModule'
     }
     ]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

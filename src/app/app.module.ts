import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BaseProyectComponent } from './pages/base-proyect/base-proyect.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { InvestigationComponent } from './pages/investigation/investigation.component';
import { ResultsComponent } from './pages/results/results.component';
import { PresentationsComponent } from './pages/presentations/presentations.component';
import { TeamComponent } from './pages/team/team.component';
import { HeaderComponent } from './components/header/header.component';
import { CardGoalComponent } from './components/card-goal/card-goal.component';
import { CardPersonComponent } from './components/card-person/card-person.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseProyectComponent,
    GoalsComponent,
    InvestigationComponent,
    ResultsComponent,
    PresentationsComponent,
    TeamComponent,
    HeaderComponent,
    CardGoalComponent,
    CardPersonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

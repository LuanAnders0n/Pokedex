import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/api';
import { DetailsComponent } from './Pages/details/details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent, CardComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}

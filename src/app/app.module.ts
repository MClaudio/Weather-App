import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';
import { ConvertPipe } from './pipes/convert.pipe';
import { DegPipe } from './pipes/deg.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    SearchComponent,
    ConvertPipe,
    DegPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

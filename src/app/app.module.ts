import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { GridImagesComponent } from './projects/grid-images/grid-images.component';
import { HeaderComponent } from './header/header.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectInfoComponent } from './projects/project-info/project-info.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		GridImagesComponent,
		HeaderComponent,
		PersonalComponent,
		ProjectInfoComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: true })
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}

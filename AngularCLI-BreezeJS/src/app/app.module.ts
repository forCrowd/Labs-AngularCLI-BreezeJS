import { Component, Injectable, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import "./breeze-client-odata-fix";

import { BreezeBridgeHttpClientModule } from "breeze-bridge2-angular";
import { config, EntityManager } from "breeze-client";
import "datajs";

@Injectable()
export class AppEntityManager extends EntityManager {

  constructor(private breezeBridgeAngularModule: BreezeBridgeHttpClientModule) {
    super();

    config.initializeAdapterInstance("uriBuilder", "odata");
    config.initializeAdapterInstance("dataService", "webApiOData", true);
  }
}

// AppComponent
@Component({
  selector: "app-root",
  template: "It works :)"
})
export class AppComponent {
  constructor(appEntityManager: AppEntityManager) { }
}

// AppModule
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BreezeBridgeHttpClientModule
  ],
  providers: [
    AppEntityManager
  ]
})
export class AppModule { }

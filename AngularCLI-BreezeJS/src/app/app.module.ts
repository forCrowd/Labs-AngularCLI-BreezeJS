import { Component, Injectable, NgModule } from "@angular/core";
import { Http, HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { BreezeBridgeAngularModule } from "breeze-bridge-angular";
import { core, config, EntityManager, DataService } from "breeze-client";
import "breeze.dataService.odata";
import "breeze.modelLibrary.backingStore";
import "breeze.uriBuilder.odata";
import "datajs";

@Injectable()
export class AppEntityManager extends EntityManager {

    constructor(private breezeBridgeAngularModule: BreezeBridgeAngularModule) {
        super();

        config.initializeAdapterInstance("uriBuilder", "odata");
        config.initializeAdapterInstance("dataService", "webApiOData", true);
    }
}

// AppComponent
@Component({
    selector: "app",
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
        BreezeBridgeAngularModule,
    ],
    providers: [
        AppEntityManager
    ]
})
export class AppModule { }

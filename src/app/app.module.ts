import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './includes/header/header.component';
import { AboutComponent } from './about/about.component';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { Component } from '@angular/core/src/metadata/directives';
import { OnShoreComponent } from './on-shore/on-shore.component';
import { TalentAcquisitionComponent } from './talent-acquisition/talent-acquisition.component';
import { TrainingAutomationComponent } from './training-automation/training-automation.component';
import { SalesComponent } from './sales/sales.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SliderComponent } from './gallery/slider/slider.component';
import { FoldersComponent } from './gallery/folders/folders.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AvVcServicesComponent } from './av-vc-services/av-vc-services.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { DisasterRecoveryComponent } from './disaster-recovery/disaster-recovery.component';
import { EnterpriseCloudServiceComponent } from './enterprise-cloud-service/enterprise-cloud-service.component';
import { EnterpriseHelpdeskComponent } from './enterprise-helpdesk/enterprise-helpdesk.component';
import { FieldBranchComponent } from './field-branch/field-branch.component';
import { MobilityWirelessComponent } from './mobility-wireless/mobility-wireless.component';
import { NetworkEngineeringComponent } from './network-engineering/network-engineering.component';
import { PersonalComputingComponent } from './personal-computing/personal-computing.component';
import { SequrityComplianceComponent } from './sequrity-compliance/sequrity-compliance.component';
import { ItTrainingComponent } from './it-training/it-training.component';
import { InovationComponent } from './inovation/inovation.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


const ripRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'on-shore',component:OnShoreComponent},
  {path:'sales',component:SalesComponent},
  {path:'it-talent',component:TalentAcquisitionComponent},
  {path:'it-training-automation',component:TrainingAutomationComponent},
  {path:'on-shore/av-vc-services',component:AvVcServicesComponent},
  {path:'on-shore/data-analytics',component:DataAnalyticsComponent},
  {path:'on-shore/disaster-recovery',component:DisasterRecoveryComponent},
  {path:'on-shore/enterprise-cloud-services',component:EnterpriseCloudServiceComponent},
  {path:'on-shore/enterprise-helpdesk',component:EnterpriseHelpdeskComponent},
  {path:'on-shore/field-branch',component:FieldBranchComponent},
  {path:'on-shore/mobility-wireless',component:MobilityWirelessComponent},
  {path:'on-shore/network-engineering',component:NetworkEngineeringComponent},
  {path:'on-shore/personal-computing',component:PersonalComputingComponent},
  {path:'on-shore/sequrity-compliance',component:SequrityComplianceComponent},
  {path:'it-training-automation/training',component:ItTrainingComponent},
  {path:'it-training-automation/inovation',component:InovationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    OnShoreComponent,
    TalentAcquisitionComponent,
    TrainingAutomationComponent,
    SalesComponent,
    ContactComponent,
    GalleryComponent,
    FoldersComponent,
    SliderComponent,
    // on-shore's child components
    AvVcServicesComponent,
    DataAnalyticsComponent,
    DisasterRecoveryComponent,
    EnterpriseCloudServiceComponent,
    EnterpriseHelpdeskComponent,
    FieldBranchComponent,
    MobilityWirelessComponent,
    NetworkEngineeringComponent,
    PersonalComputingComponent,
    SequrityComplianceComponent,
    ItTrainingComponent,
    InovationComponent
  ],
  imports: [
    RouterModule.forRoot(ripRoutes),
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
}
)
export class AppModule { 
  
}
import { Component } from '@angular/core';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective } from '@coreui/angular';
import {
  BorderDirective,  
  CardFooterComponent,
  CardGroupComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent, 
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  PopoverDirective,
  ThemeDirective,
  TooltipDirective
} from '@coreui/angular';
import { CardModule } from '@coreui/angular';
import {NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { ButtonDirective } from '@coreui/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { GridModule } from '@coreui/angular';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [GridModule, FormsModule, ReactiveFormsModule, CardModule, ButtonDirective, TableModule, UtilitiesModule, NgIf,NgFor, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent,  CardTitleDirective, CardTextDirective,  CardSubtitleDirective, CardLinkDirective,  ListGroupDirective, ListGroupItemDirective, CardFooterComponent, BorderDirective, CardGroupComponent, GutterDirective, CardImgDirective, TabsComponent, TabsListComponent,  TabDirective, TabsContentComponent, TabPanelComponent
    , RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent,  ModalToggleDirective, PopoverDirective, TooltipDirective
  ],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

  private httpClient: HttpClient;
  public listPhotos: any[] = [];

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.httpClient.get('assets/photos/index.txt', { responseType: 'text' })
    .subscribe({
      next: (val:any) => {            
        this.listPhotos = val.split(/\r?\n/);     
        //console.log(this.listPhotos);
      },
      error: (e) => console.error(e)      
    });  
  }
 


}

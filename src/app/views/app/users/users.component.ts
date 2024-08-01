import { Component , ViewChild} from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';
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
import { DocsExampleComponent } from '@docs-components/public-api';
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { ButtonDirective } from '@coreui/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-users',
  standalone: true,  
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CardModule, ButtonDirective,IconDirective, TableModule, UtilitiesModule, NgIf,NgFor, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent,  CardTitleDirective, CardTextDirective, ButtonDirective, CardSubtitleDirective, CardLinkDirective,  ListGroupDirective, ListGroupItemDirective, CardFooterComponent, BorderDirective, CardGroupComponent, GutterDirective, CardImgDirective, TabsComponent, TabsListComponent, IconDirective, TabDirective, TabsContentComponent, TabPanelComponent
    , RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent, ButtonDirective,  ModalToggleDirective, PopoverDirective, TooltipDirective
  ]
  
})
export class UsersComponent {
  @ViewChild('closebutton') closebutton:any;
  @ViewChild('closebuttonDelete') closebuttonDelete:any;
  
  public action: string | null;
  public listObjects!: any[];
  public emptyData = false;
  public formData: any;
  public id: number = 0;

  constructor( private jsonplaceholderService: JsonplaceholderService,
    private fb:FormBuilder,
    private router:Router,
    ) { 
      this.action = '';   

      this.formData = new FormGroup({        
        name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),           
        user: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        correo: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(255)]),  
        street: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        suite: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        city: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        zipcode: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        lat: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        lng: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        phone: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        website: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        company_name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        catchPhrase: new FormControl(null, [Validators.required, Validators.maxLength(255)]),  
        bs: new FormControl(null, [Validators.required, Validators.maxLength(255)])
      });

  }  

  ngOnInit() {
    this.getObjects();  
  }
  
  getObjects(){
    try{
      this.jsonplaceholderService.getUsers()
      .subscribe({
        next: (val:any) => {            
          console.log(val);
          if(val.length == 0 || val == null ){
           this.emptyData = true;
          }else{
            this.listObjects = val;          
            this.emptyData = false;           
          }
        },
        error: (e) => console.error(e)      
      });  
       
      return true;
    }catch(error){
      return error;
    }
  }

  // GET ---------------------------------------------------------------------
	public newGetById(data: any = null) {	

		if (data !== null) {
      this.formData.reset();
			this.action = 'Editar';
			this.id = data.id;
      console.log(data);
			this.formData.controls.name.setValue(data.name);
      this.formData.controls.user.setValue(data.username);
      this.formData.controls.correo.setValue(data.email);
      this.formData.controls.street.setValue(data.address.street);
      this.formData.controls.suite.setValue(data.address.suite);
      this.formData.controls.city.setValue(data.address.city);
      this.formData.controls.zipcode.setValue(data.address.zipcode);
      this.formData.controls.lat.setValue(data.address.geo.lat);
      this.formData.controls.lng.setValue(data.address.geo.lng);
      this.formData.controls.phone.setValue(data.phone);
      this.formData.controls.website.setValue(data.website);
      this.formData.controls.company_name.setValue(data.company.name);
      this.formData.controls.catchPhrase.setValue(data.company.catchPhrase);
      this.formData.controls.bs.setValue(data.company.bs);

		}
		else {
      this.formData.reset();
      this.action = 'Agregar';      
		}
	}

  setObjectId(id: any) {		
    this.id = id;
  }

  onSubmit(){
    const isFormValid = this.formData.valid;

    try{
      
      if(isFormValid){
        
        var newUser ={          
          "name": this.formData.controls['name'].value,
          "username": this.formData.controls['user'].value,
          "email": this.formData.controls['correo'].value,
          "address": {
            "street": this.formData.controls['street'].value,
            "suite": this.formData.controls['suite'].value,
            "city": this.formData.controls['city'].value,
            "zipcode": this.formData.controls['zipcode'].value,
            "geo": {
              "lat": this.formData.controls['lat'].value,
              "lng": this.formData.controls['lng'].value,
            }
          },
          "phone": this.formData.controls['phone'].value,
          "website": this.formData.controls['website'].value,
          "company": {
            "name": this.formData.controls['company_name'].value,
            "catchPhrase": this.formData.controls['catchPhrase'].value,
            "bs": this.formData.controls['bs'].value,
          }
        };

        if ( this.action  == 'Editar' ){      
          this.jsonplaceholderService.putUser(newUser,this.id )
          .subscribe({
            next: (val:any) => {  
                this.closebutton.nativeElement.click();
            
                var current = this.listObjects.findIndex(object => {
                  return object.id == this.id;
                })
                
                this.listObjects.splice(current,1)
                console.log(current);
                this.listObjects.push(val);
                this.listObjects.sort((a, b) => a.id  - b.id);
                console.log(this.listObjects);

                Swal.fire({      
                  title: 'Usuario',
                  text: 'Usuario modificado con éxito',
                  icon: 'success'
                });
            },
            complete: () =>{  
            
            },
            error: (e) => console.error(e)      
          });  
        } 

        if ( this.action  == 'Agregar' ){  
            this.jsonplaceholderService.setUser(newUser)
            .subscribe({
              next: (val:any) => {  
                  this.closebutton.nativeElement.click();

                  this.listObjects.push(val);

                  Swal.fire({
                    title: 'Usuario',
                    text: 'Usuario creado con éxito',
                    icon: 'success'
                  });
              },
              complete: () =>{  
              
              },
              error: (e) => console.error(e)      
            });  
        } 
      }        
       return true; 
    }catch(error){
      console.log(error);
      return error;

    }
  }

  deleteUser(){    
    try{
      
      this.jsonplaceholderService.delUser(this.id)
      .subscribe({
        next: (val:any) => {  
                
        },
        complete: () =>{  
            this.closebuttonDelete.nativeElement.click();     
              var current = this.listObjects.findIndex(object => {
                return object.id == this.id;
              })              
              this.listObjects.splice(current,1)   
              this.listObjects.sort((a, b) => a.id  - b.id);              
              Swal.fire({      
                title: 'Usuario',
                text: 'Usuario eliminado con éxito',
                icon: 'success'
              });
        },
        error: (e) => console.error(e)      
      });  

      
           
       return true; 
    }catch(error){
      console.log(error);
      return error;

    }
  }

}

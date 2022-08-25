import { templateRendicion } from './../shared/modelos/templateRendicion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpRendicionService } from '../shared/services/http-rendicion.service';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

  form$: FormGroup = this.formBuilder.group({
    uid: "",
    header:  "",
    subheader:  "",
    isPublished: "",
    updatedOn:  "",
    createdOn:  "",
    prettyUrl: "",
    author: "",
    previewImageSource:  "",
    content:"<html> <head><title>Mi página de ejemplo</title></head><body>Aquí va el contenido</body></html>",
  });
  errorMessage: string | undefined;

  public templates: Array<templateRendicion> = [];
  public templatesSeleccionado: templateRendicion = new templateRendicion;

  constructor(
    private formBuilder: FormBuilder,
    private httpRendicionService : HttpRendicionService
  ) {}

  async onSubmit(blogPostData: any) {
    console.log('blog post submitted', blogPostData);
    this.templatesSeleccionado.plantilla = blogPostData.content;
    console.log('respuestaRendion', this.templatesSeleccionado);
    const respuesta_guardado = await this.httpRendicionService.actualizarPlantilla(this.templatesSeleccionado).pipe().toPromise();
    console.log('respuesta al guardar ', respuesta_guardado)
  }

  async ngOnInit(): Promise<void> {

   const listaTemplate = await this.httpRendicionService.getPlantillasTemplate().pipe().toPromise();
   console.log('lista Template', listaTemplate)
   this.templates = Object.assign([new templateRendicion()], listaTemplate);
   console.log('lista', this.templates )

  }

  changePlantilla(plantilla: templateRendicion){
    console.log('cambio', plantilla)
    this.templatesSeleccionado = plantilla;
    this.form$.controls['content'].setValue(this.templatesSeleccionado.plantilla)
  }

}

import { respuestaRendicon } from './../shared/modelos/responsePlantilla';
import { HttpRendicionService } from './../shared/services/http-rendicion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-plantillas',
  templateUrl: './modificar-plantillas.component.html',
  styleUrls: ['./modificar-plantillas.component.css']
})
export class ModificarPlantillasComponent implements OnInit {


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

  public respuestaRendion: respuestaRendicon = new respuestaRendicon;

  constructor(
    private formBuilder: FormBuilder,
    private httpRendicionService : HttpRendicionService
  ) {}

  async onSubmit(blogPostData: any) {
    console.log('blog post submitted', blogPostData);
    this.respuestaRendion.plantillaResultado = blogPostData.content;
    console.log('respuestaRendion', this.respuestaRendion);
    const respuesta_guardado = await this.httpRendicionService.actualizacionRendion(this.respuestaRendion).pipe().toPromise();
    console.log('respuesta al guardar ', respuesta_guardado)
  }


  ngOnInit(): void {
  }


  async cargarIdPlantilla(){
    const respose = await this.httpRendicionService.getRespuestaRencion(this.form$.value['header']).pipe().toPromise();
      console.log(respose);
    this.respuestaRendion = Object.assign(new respuestaRendicon(), respose);
      let conten = new respuestaRendicon();
      console.log('contenido',this.respuestaRendion)
      this.form$.controls['content'].setValue(this.respuestaRendion.plantillaResultado)
  }

}

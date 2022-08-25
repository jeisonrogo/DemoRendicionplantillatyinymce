import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRendicionService {

  constructor(private httpClient: HttpClient) { }


  public getRespuestaRencion(idRendicion: any){
    return this.httpClient.get('http://localhost:8080/demo-rendicion/consultarRespuestas', {
      params: {
        id_rendicion: idRendicion
      }
    });
  }

  public actualizacionRendion(param:any) {
    return this.httpClient.post('http://localhost:8080/demo-rendicion/guardarRespuestas', param, {});
  }

  public getPlantillasTemplate(){
    return this.httpClient.get('http://localhost:8080/demo-rendicion/consultarTemplates', {});
  }

  public actualizarPlantilla(param:any) {
    return this.httpClient.post('http://localhost:8080/demo-rendicion/guardar', param, {});
  }

}

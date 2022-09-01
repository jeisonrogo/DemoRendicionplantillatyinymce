import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRendicionService {

  constructor(private httpClient: HttpClient) { }


  public getRespuestaRencion(idRendicion: any){
    return this.httpClient.get('http://192.168.10.24:8080/demoRendicionCuentas-0.0.1-SNAPSHOT/demo-rendicion/consultarRespuestas', {
      params: {
        id_rendicion: idRendicion
      }
    });
  }

  public actualizacionRendion(param:any) {
    return this.httpClient.post('http://192.168.10.24:8080/demoRendicionCuentas-0.0.1-SNAPSHOT/demo-rendicion/guardarRespuestas', param, {});
  }

  public getPlantillasTemplate(){
    return this.httpClient.get('http://192.168.10.24:8080/demoRendicionCuentas-0.0.1-SNAPSHOT/demo-rendicion/consultarTemplates', {});
  }

  public actualizarPlantilla(param:any) {
    return this.httpClient.post('http://192.168.10.24:8080/demoRendicionCuentas-0.0.1-SNAPSHOT/demo-rendicion/guardar', param, {});
  }

}

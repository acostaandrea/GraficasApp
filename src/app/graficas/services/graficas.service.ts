import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {



  constructor( private http: HttpClient) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica')
  }

  getUsuariosRRSS(){
    return  this.getUsuariosRedesSociales()
    .pipe(
      
      map((data) => {
        return {
          labels: Object.keys(data),
          datasets: [{ data: Object.values(data) }],
        }
      })
    )
  }

}

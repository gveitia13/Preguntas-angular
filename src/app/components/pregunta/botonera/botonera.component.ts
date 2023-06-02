import {Component} from '@angular/core';
import {PreguntaService} from "../../../services/pregunta.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {
  btn_string = 'Aceptar';

  constructor(public preguntaService: PreguntaService, private router: Router) {
  }

  next() {
    switch (this.btn_string) {
      case 'Aceptar': {
        this.preguntaService.preconfirmada = true
        this.btn_string = 'Siguiente'
        if (this.preguntaService.preguntas.length - 1 === this.preguntaService.index_pregunta)
          this.btn_string = 'Finalizar'
        break
      }
      case 'Siguiente': {
        this.preguntaService.index_pregunta++
        if (this.preguntaService.index_respuesta != null) {
          this.preguntaService.respuestasUsuario.push(this.preguntaService.index_respuesta)
        }
        this.preguntaService.disable_btn = true
        this.preguntaService.preconfirmada = false
        this.btn_string = 'Aceptar'
        break
      }
      case 'Finalizar': {
        if (this.preguntaService.index_respuesta != null)
          this.preguntaService.respuestasUsuario.push(this.preguntaService.index_respuesta)
        this.preguntaService.selected_option = null
        this.preguntaService.preconfirmada = false
        this.preguntaService.index_pregunta = 0
        this.router.navigate(['/respuesta'])
      }
    }
  }
}

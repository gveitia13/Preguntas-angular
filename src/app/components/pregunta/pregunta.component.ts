import {Component, OnInit} from '@angular/core';
import {PreguntaService} from "../../services/pregunta.service";
import {Pregunta} from "../../models/pregunta";
import {Respuesta} from "../../models/respuesta";

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[] = []

  constructor(public preguntaService: PreguntaService) {
  }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas()
  }

  getPregunta() {
    return this.listPregunta[this.preguntaService.index_pregunta].descripcion
  }

  respuestaSeleccionada(respuesta: Respuesta, index: number) {
    if (this.preguntaService.preconfirmada)
      return
    this.preguntaService.selected_option = respuesta
    this.preguntaService.disable_btn = false
    this.preguntaService.index_respuesta = index
  }

  AddClassOption = (respuesta: Respuesta) => {
    if (respuesta === this.preguntaService.selected_option && !this.preguntaService.preconfirmada)
      return 'active text-light'
    if (respuesta === this.preguntaService.selected_option &&
      this.preguntaService.preconfirmada &&
      this.preguntaService.selected_option.esCorrecta === 1)
      return 'list-group-item-success'
    if (respuesta === this.preguntaService.selected_option &&
      this.preguntaService.preconfirmada &&
      this.preguntaService.selected_option.esCorrecta === 0)
      return 'list-group-item-danger'
    return
  }

  iconCorrecta = (respuesta: Respuesta) =>
    respuesta === this.preguntaService.selected_option &&
    this.preguntaService.preconfirmada &&
    this.preguntaService.selected_option.esCorrecta === 1;
  iconIncorrecta = (respuesta: Respuesta) =>
    respuesta === this.preguntaService.selected_option &&
    this.preguntaService.preconfirmada &&
    this.preguntaService.selected_option.esCorrecta === 0;
}

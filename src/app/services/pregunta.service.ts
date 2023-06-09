import {Injectable} from '@angular/core';
import {Pregunta} from "../models/pregunta";
import {Respuesta} from "../models/respuesta";

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  index_pregunta = 1
  selected_option: Respuesta | null = null
  disable_btn: boolean = true
  preconfirmada = false
  index_respuesta: number | null = null
  respuestasUsuario: Array<number> = []

  public preguntas: Pregunta[] = [
    new Pregunta('Cuál es la capital de Argentina?', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),
    new Pregunta('Cuál es la capital de Francia?', [
      new Respuesta('Roma', 0),
      new Respuesta('París', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('Cuál es la capital de Egipto?', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlín', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('CasaBlanca', 0),
    ]),
  ]

  constructor() {
  }

  getPreguntas() {
    return this.preguntas.slice()
  }
}

import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje: string = ""; 

  constructor( public _cs: ChatService) { 

    this._cs.cargarMensajes()
        .subscribe();
      
  }

  enviar_mensaje(){

    console.log( this.mensaje );

    if( this.mensaje.length === 0 ){
      return
    }

    this._cs.agregarMensaje( this.mensaje )
                  .then( ()=> this.mensaje = '')
                  .catch( (err)=> console.error('Error al enviar', err))

  }

  ngOnInit() {
  }

}

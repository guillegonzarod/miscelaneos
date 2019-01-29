import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrar_tutorial: true
  }

  constructor(private platform: Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage() {
    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {
        // Dispositivo

      } else {
        // Escritorio
        // Debemos pasar el String 'ajustes' al tipo Object:
        if (localStorage.getItem("ajustes")) {
          this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
        }

        resolve();
      }
    });
    return promesa;
  }

  guardar_storage() {
    if (this.platform.is("cordova")) {
      // Dispositivo

    } else {
      // Escritorio
      // Debemos pasar el objeto 'ajustes' al tipo String:
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes)); // Browser > Application > Local Storage
    }
  }
}

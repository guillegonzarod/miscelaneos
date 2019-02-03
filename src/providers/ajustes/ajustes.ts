import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrar_tutorial: true
  }

  constructor(private platform: Platform, private storage: Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage() {
    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {
        // Dispositivo
        console.log("Inicializando storage...");
        this.storage.ready()
          .then(() => {
            console.log("Storage listo...");
            // Obtenemos el valor de la clave 'ajustes':
            this.storage.get("ajustes")
              .then(ajustes => {
                if (ajustes) {
                  this.ajustes = ajustes;
                }
                resolve();
              });
          });

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
      console.log("Inicializando storage...");
      this.storage.ready()
        .then(() => {
          // Asignamos el valor de la propiedad 'this.ajustes' a la clave 'ajustes' y los guardamos
          // en el Storage nativo del dispositivo
          this.storage.set("ajustes", this.ajustes);
        });


    } else {
      // Escritorio
      // Debemos pasar el objeto 'ajustes' al tipo String:
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes)); // Browser > Application > Local Storage
    }
  }

}

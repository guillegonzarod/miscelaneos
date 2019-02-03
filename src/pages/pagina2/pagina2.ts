import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ir_pagina3() {
    this.navCtrl.push("mi-pagina3");
  }

  ionViewCanEnter() {
    console.log("ionViewCanEnter");
    /*
    let numero = Math.round(Math.random() * 10);
    console.log(numero);
    if (numero >= 3) {
      return true;
    } else {
      return false;
    }*/

    let promesa = new Promise((resolve, reject) => {
      let confirmar = this.alertCtrl.create({
        title: "¿Seguro?",
        subTitle: "¿Estás seguro que deseas entrar?",
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Cancelar pulsado!!');
              resolve(false);
            }
          },
          {
            text: 'Seguro!',
            handler: () => {
              console.log('Aceptar pulsado!!');
              resolve(true);
            }
          }
        ]
      });
      confirmar.present();
    });

    return promesa;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionViewCanLeave() {
    console.log("ionViewCanLeave");
    console.log("Espera 2 segundos para salir");

    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    // Mostramos el 'Loading'
    loading.present();

    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Quitamos el 'Loading'
        loading.dismiss();
        resolve(true);
      }, 2000);
    });

    return promesa;
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload() {
    console.log("ionViewWillUnload");
  }
}

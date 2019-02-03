import { AjustesProvider } from './../providers/ajustes/ajustes';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroduccionPage } from '../pages/introduccion/introduccion';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  rootPage: any;

  constructor(
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _ajustesProvider: AjustesProvider,
  ) {
    platform.ready().then(() => {

      this._ajustesProvider.cargar_storage().then(() => {
        if (this._ajustesProvider.ajustes.mostrar_tutorial) {
          this.rootPage = IntroduccionPage;
        } else {
          this.rootPage = HomePage;
        }

        this.platform.pause.subscribe(() => {
          console.log("La Aplicación va a entrar en PAUSE");
        });

        this.platform.resume.subscribe(() => {
          console.log("La Aplicación va a salir del PAUSE");
        });

        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }

}


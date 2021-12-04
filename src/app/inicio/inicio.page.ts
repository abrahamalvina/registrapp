import { AbstractType, Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
   code: any;
  constructor(private barcodeScanner: BarcodeScanner) {
    
  }

  ngOnInit() {
  }

  leerQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}


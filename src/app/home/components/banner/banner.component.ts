import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  imagenes: string[] = [
    'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg',
    'https://t2.ea.ltmcdn.com/es/images/5/6/2/10_caracteristicas_de_los_perros_24265_600.jpg',
    'https://www.veterinariadrbrenes.com/wp-content/uploads/2019/10/C%C3%B3mo-seleccionar-a-un-perro-dentro-de-una-camada-blog-1000x500.jpg'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

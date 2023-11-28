import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {


    constructor() { 
        
    }

    ngOnInit() {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Todo Lo hacemos con amor',
            title: 'Cuatro Patas',
            paragraphText: 'Este es un sitio donde podràs encontras todo para tus mascotas'
        }
    ]

    singleFeatures: singleFeaturesContent[] = [
        {
            icon: 'icofont-dog',
            title: 'Servicio a domicilio',
            paragraphText: '24/7'
        },
        {
            icon: 'icofont-cat',
            title: 'Veterinario',
            paragraphText: '24/7'
        },
        {
            icon: 'icofont-pig',
            title: 'La mejor comida en un solo sitio',
            paragraphText: 'Preguntanos.'
        }
    ]

}

class sectionTitleContent {
    subTitle : string = '';
    title : string = '';
    paragraphText : string = '';
}

class singleFeaturesContent {
    icon : string = '';
    title : string = '';
    paragraphText : string = '';
}
import { Component, Input } from '@angular/core';

@Component({
    selector: 'grid-images',
    templateUrl: './grid-images.component.html',
    styleUrls: ['./grid-images.component.scss']
})
export class GridImagesComponent{
    @Input() horizontalAmount: number = 2;
    @Input() images = [
    'http://www.lorempixel.com/400/300/city/1',
    'http://www.lorempixel.com/400/300/city/2',
    'http://www.lorempixel.com/400/300/city/3',
    'http://www.lorempixel.com/400/300/city/4',
    'http://www.lorempixel.com/400/300/city/1',
    'http://www.lorempixel.com/400/300/city/2',
    'http://www.lorempixel.com/400/300/city/3',
    'http://www.lorempixel.com/400/300/city/4'
    ]
}
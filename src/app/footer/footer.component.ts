import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
    webpage: string = 'http://www.webpagedemo.com';
    phone: string = '0612345678';
    email: string = 'demo@email.com';
}
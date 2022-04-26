import { Component } from '@angular/core';

interface MenuItem {
  txt: String;
  route: String;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  constructor() { }

  reactiveMenu: MenuItem[] = [
    { txt: 'Basicos',   route: './reactive/basic'    },
    { txt: 'Dinamicos', route: './reactive/dynamic'  },
    { txt: 'Switches',  route: './reactive/switches' },
  ];
}

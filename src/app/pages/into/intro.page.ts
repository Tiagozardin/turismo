import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  imports: [IonContent, IonButton]
})
export class IntroPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  enter() {
    // marca que o usuário já viu a intro (se quiser, use sessionStorage)
    localStorage.setItem('intro_seen', '1');
    this.router.navigateByUrl('/regions', { replaceUrl: true });
  }
}

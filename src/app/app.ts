import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from "../components/header/header";
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ecommerce';
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

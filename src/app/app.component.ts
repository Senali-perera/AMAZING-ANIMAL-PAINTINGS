import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarRow, MatToolbar, MatAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AMAZING-ANIMAL-PAINTINGS';
}

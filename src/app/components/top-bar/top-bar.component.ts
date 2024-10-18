import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatToolbarModule, RouterLink],
  template: `
    <mat-toolbar class="navbar">
      <div id="topbar-title">
        <span id="spanTeste">Teste UpSent Full-Stack</span>
      </div>
      <div>
        <a class="topbar-link" routerLink="/insert">Adicionar Funcionários</a>
        <a class="topbar-link" routerLink="/list">Listar Funcionários</a>
        <a class="topbar-link" routerLink="/visualize"
          >Visualizar Funcionários</a
        >
      </div>
    </mat-toolbar>
  `,
  styleUrl: './top.bar.component.scss',
})
export class TopBarComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-container',
  standalone: true,
  imports: [],
  template: `
    <div class="worker-div">
      <div class="worker-infos">
        <p>Nome: {{ 1 + 1 }}</p>
      </div>
      <button mat-raised-button>Deletar</button>
      <button mat-raised-button>Visualizar</button>
    </div>
  `,
  styleUrl: './worker-container.component.scss',
})
export class WorkerContainerComponent {}

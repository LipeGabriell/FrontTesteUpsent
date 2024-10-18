import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CrudService } from '../../services/crud.service';
import { NgFor } from '@angular/common';
import { WorkerData } from '../../interfaces/workerData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-workers',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, NgFor],
  template: `
    <div class="workers">
      @if(workers.length == 0){
      <h1>SEM FUNCIONÁRIOS REGISTRADOS!</h1>
      } @else {
      <div class="worker-div" *ngFor="let worker of workers; index as i">
        <div class="worker-infos">
          <p>{{ worker.nome }}</p>
        </div>
        <button mat-raised-button (click)="deleteWorker(worker.cpf)">
          Deletar
        </button>
        <button mat-raised-button (click)="changeScreen()" >Visualizar</button>
      </div>

      @if(showDetails){
      <div>
        <h1>{{ selectedWorker.nome }}</h1>
      </div>
      } }
    </div>
  `,
  styleUrl: './list-workers.component.scss',
})
export class ListWorkersComponent implements OnInit {
  constructor(private crud: CrudService, private router: Router) {}

  workers: WorkerData[] = [];
  selectedWorker!: WorkerData;
  showDetails: boolean = false;

  ngOnInit(): void {
    this.getAllWorkers();
  }

  changeScreen() {
    this.router.navigateByUrl('/visualize');
  }

  deleteWorker(cpf: string): void {
    this.crud.deleteData(cpf).subscribe(() => {
      this.workers = this.workers.filter((worker) => worker.cpf !== cpf);
    });
  }

  getAllWorkers(): void {
    this.crud.getAll().subscribe((data: WorkerData[]) => {
      this.workers = data;
    });
  }
}

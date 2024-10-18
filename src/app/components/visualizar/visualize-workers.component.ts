import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CrudService } from '../../services/crud.service';

interface Profission {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-create-workers',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgFor,
  ],
  template: `
    <div class="search">
      <input type="text" matInput [value]="cpf" />
      <button mat-raised-button (click)="getData(cpf)">
        Procurar Funcionário
      </button>
    </div>

    <div class="edit">
      <form [formGroup]="registerWorkerFormGroup">
        <mat-form-field>
          <mat-label>Nome</mat-label>
          <input matInput formControlName="nome" required />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Idade</mat-label>
          <input type="number" matInput formControlName="idade" required />
        </mat-form-field>

        <mat-form-field>
          <mat-label>CPF</mat-label>
          <input matInput formControlName="cpf" required />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Telefone</mat-label>
          <input matInput formControlName="telefone" required />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Profissão</mat-label>
          <mat-select formControlName="profissao" required>
            <mat-option
              *ngFor="let profission of profissions"
              [value]="profission.id"
            >
              {{ profission.nome }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Rua</mat-label>
          <input
            matInput
            placeholder="Ex. Rua X, Número Y. Bairro Z"
            formControlName="rua"
            required
          />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Número</mat-label>
          <input
            matInput
            placeholder="Ex. Rua X, Número Y. Bairro Z"
            formControlName="numero"
            required
          />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Bairro</mat-label>
          <input
            matInput
            placeholder="Ex. Rua X, Número Y. Bairro Z"
            formControlName="bairro"
            required
          />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Cidade</mat-label>
          <input matInput formControlName="cidade" required />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Estado</mat-label>
          <mat-select formControlName="estado" required>
            <mat-option value="AC">Acre</mat-option>
            <mat-option value="AL">Alagoas</mat-option>
            <mat-option value="AM">Amazonas</mat-option>
            <mat-option value="AP">Amapá</mat-option>
            <mat-option value="BA">Bahia</mat-option>
            <mat-option value="CE">Ceará</mat-option>
            <mat-option value="DF">Distrito Federal</mat-option>
            <mat-option value="ES">Espírito Santo</mat-option>
            <mat-option value="GO">Goiás</mat-option>
            <mat-option value="MA">Maranhão</mat-option>
            <mat-option value="MG">Minas Gerais</mat-option>
            <mat-option value="MS">Mato Grosso do Sul</mat-option>
            <mat-option value="MT">Mato Grosso</mat-option>
            <mat-option value="PA">Pará</mat-option>
            <mat-option value="PB">Paraíba</mat-option>
            <mat-option value="PE">Pernambuco</mat-option>
            <mat-option value="PI">Piauí</mat-option>
            <mat-option value="PR">Paraná</mat-option>
            <mat-option value="RJ">Rio de Janeiro</mat-option>
            <mat-option value="RN">Rio Grande do Norte</mat-option>
            <mat-option value="RO">Rondônia</mat-option>
            <mat-option value="RS">Rio Grande do Sul</mat-option>
            <mat-option value="SC">Santa Catarina</mat-option>
            <mat-option value="SE">Sergipe</mat-option>
            <mat-option value="SP">São Paulo</mat-option>
            <mat-option value="TO">Tocantins</mat-option>
          </mat-select>
        </mat-form-field>

        <button mat-stroked-button (click)="sendData()">Alterar</button>
      </form>
    </div>
  `,
  styleUrl: './visualize-workers.component.scss',
})
export class VisualizeWorkersComponent implements OnInit {
  constructor(private crud: CrudService) {}

  profissions: Profission[] = [];
  cpf: string = '';
  ngOnInit(): void {
    this.getProfissions();
    this.getData(this.cpf);
  }

  registerWorkerFormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    profissao: new FormControl('', Validators.required),
    rua: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
  });

  getProfissions(): void {
    this.crud.getProfissions().subscribe((data: Profission[]) => {
      this.profissions = data;
      console.log('Profissions:', this.profissions);
    });
  }

  getData(cpf: string): void {
    this.crud.getSpecific(cpf).subscribe((data: Profission[]) => {
      this.profissions = data;
      console.log('Profissions:', this.profissions);
    });
  }

  sendData(): void {
    if (this.registerWorkerFormGroup.valid) {
      this.crud
        .postData(this.registerWorkerFormGroup.value)
        .subscribe((response) => {});
    } else {
      console.log('Formulário inválido');
    }
  }
}

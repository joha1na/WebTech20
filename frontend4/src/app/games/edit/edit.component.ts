import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../shared/backend.service';
import {Data} from '../../shared/data';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  games: Data[];
  game: Data;
  selectedId: number;
  path: Observable<string>;
  error: HttpErrorResponse;
  closeResult = '';
  form: FormGroup;

  constructor(
    private cs: BackendService,
    private route: ActivatedRoute,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder,
    ) {
    // Konfiguration des modalen Dialogs
    config.backdrop = 'static';     // schliesst nicht bei Klick ausserhalb
    config.keyboard = false;        // kein Beenden durch ESC
    // Formular fuers Loeschen
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        gameNameControl: ['', Validators.required],
        platformControl: ['', Validators.required],
        statusControl: ['', Validators.required],
        ratingControl: [''],
      }
    );
  }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId);
    }
  }

  trackByData(index: number, data: Data): number { return data.id; }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => {
        console.log(response);
        return this.games = response; },
      error => console.log(error)
    );
  }

  readOne(id: number): void {
    this.cs.getDataById(id).subscribe(
      (response: Data) => this.game = response,
      error => this.error = error,
    );
  }

  update(data: Data): void {
    this.game = data;
    this.cs.update(this.game.id, this.game);
    this.router.navigateByUrl('/edit');
  }

  deleteOne(id: number): void {
    this.cs.deleteOne(id);
    window.location.reload();
  }

  open(content, id: number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.game?.id);
      }
    });
  }
}

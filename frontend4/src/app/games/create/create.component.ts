import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Data} from '../../shared/data';
import {BackendService} from '../../shared/backend.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  data: Data;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        gameNameControl: ['', Validators.required],
        platformControl: ['', Validators.required],
        statusControl: ['', Validators.required],
        ratingControl: [''],
      }
    );
    this.data = { id: 0, gamename: '', platform: '', status: '', rating: ''};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.form.value);
    const values = this.form.value;
    this.data.gamename = values.gameNameControl;
    this.data.platform = values.platformControl;
    this.data.status = values.statusControl;
    this.data.rating = values.ratingControl;
    console.log(this.data);
    this.cs.create(this.data);
    this.router.navigate(['/edit']);
  }

  cancel(): void {
    this.router.navigate(['/edit']);
  }

}

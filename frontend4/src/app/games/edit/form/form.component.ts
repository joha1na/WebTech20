import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Data} from '../../../shared/data';
import {Location} from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: Data;
  @Output() updateEvent = new EventEmitter<Data>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {idControl: ['', Validators.required],
        gameNameControl: ['', Validators.required],
        platformControl: ['', Validators.required],
        statusControl: ['', Validators.required],
        ratingControl: [''],
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.data?.id,
      gameNameControl: this.data?.gamename,
      platformControl: this.data?.platform,
      statusControl: this.data?.status,
      ratingControl: this.data?.rating
    });
  }

  onSubmit(): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.gamename = values.gameNameControl;
    this.data.platform = values.platformControl;
    this.data.status = values.statusControl;
    this.data.rating = values.ratingControl;
    this.updateEvent.emit(this.data);
  }

  cancel(): void {
    this.location.back();
  }
}

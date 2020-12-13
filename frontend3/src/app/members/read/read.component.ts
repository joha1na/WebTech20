import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../shared/backend.service';
import { Data } from '../../shared/data';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  members: Data[];
  member: Data;
  selectedId: number;
  error: HttpErrorResponse;

  constructor(private cs: BackendService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId); // nur fuer debug
      this.readOne(this.selectedId);
    }
  }

  trackByData(index: number, data: Data): number { return data.id; }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => {
        console.log(response);
        return this.members = response; },
      error => console.log(error)
    );
  }

  readOne(id: number): void {
    this.cs.getDataById(id).subscribe(
      (response: Data) => this.member = response,
      error => this.error = error,
    );
  }

  update(data: Data): void {
    this.member = data;
    this.cs.update(this.member.id, this.member);
    this.router.navigateByUrl('/read');
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', ],
      name: ['', Validators.required],
      code: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.setFormData();
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  close(): void {

  }

  private setFormData(): void {
    if (this.data) {
      this.form.patchValue(this.data.gender);
    }
  }


}

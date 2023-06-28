import { ISearchFormOptions, ISearchFormData } from '../../interfaces';
import {
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-by-user-search-form',
  templateUrl: './by-user-search-form.component.html',
  styleUrls: ['./by-user-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByUserSearchFormComponent implements OnInit {
  @Input() searchFormOptions!: ISearchFormOptions;

  @Output()
  searchFormEmitter: EventEmitter<ISearchFormData> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchWord: ['', [Validators.required, Validators.minLength(2)]],
      searchIn: null,
      dateFrom: null,
      dateTo: null,
    });
  }

  onSubmit() {
    this.searchFormEmitter.emit(this.searchForm.value as ISearchFormData);
  }

  doesFieldHaveError(field: string) {
    return (
      this.searchForm.get(field)?.invalid &&
      (this.searchForm.get(field)?.dirty || this.searchForm.get(field)?.touched)
    );
  }

  isFormValid() {
    return this.searchForm.valid;
  }
}

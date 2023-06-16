import { ISearchFormOptions, ISearchFormData } from './../../interfaces';
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
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  @Input() searchFormOptions!: ISearchFormOptions;

  @Output()
  searchFormEmitter: EventEmitter<ISearchFormData> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchWord: ['', [Validators.required, Validators.minLength(2)]],
      searchIn: this.searchFormOptions.isFullTextSearchForm
        ? ['question', Validators.required]
        : null,
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

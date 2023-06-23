import { IUsersActivityReqData } from './../../../pages/statistic/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-statistic-form',
  templateUrl: './statistic-form.component.html',
  styleUrls: ['./statistic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  statisticForm!: FormGroup;

  @Output()
  statsFormEmitter: EventEmitter<IUsersActivityReqData> = new EventEmitter();

  ngOnInit(): void {
    this.statisticForm = this.formBuilder.group({
      dateFrom: null,
      dateTo: null,
    });
  }

  onSubmit() {
    this.statsFormEmitter.emit(this.statisticForm.value);
  }

  isFormValid() {
    return this.statisticForm.valid;
  }
}

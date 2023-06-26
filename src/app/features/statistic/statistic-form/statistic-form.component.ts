import { IUsersActivityReqData } from './../../../pages/statistic/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-statistic-form',
  templateUrl: './statistic-form.component.html',
  styleUrls: ['./statistic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  statisticForm!: FormGroup;

  @Input() formTitle!: string;

  @Input() isAdvancedForm!: boolean;

  @Output()
  statsFormEmitter: EventEmitter<IUsersActivityReqData> = new EventEmitter();

  ngOnInit(): void {
    this.statisticForm = this.formBuilder.group(
      {
        interval: this.isAdvancedForm ? ['month', Validators.required] : null,
        dateFrom: this.isAdvancedForm
          ? new Date(
              new Date().getFullYear(),
              new Date().getMonth() - 3,
              new Date().getDate() + 1
            )
          : null,
        dateTo: this.isAdvancedForm ? new Date() : null,
      },
      { validators: this.isAdvancedForm ? this.dateRangeValidator : null }
    );
  }

  onSubmit() {
    this.statsFormEmitter.emit(this.statisticForm.value);
  }

  isFormValid() {
    return this.statisticForm.valid;
  }

  isDateRangeInvalid(): boolean {
    return this.statisticForm.errors?.['dateRange'];
  }

  private dateRangeValidator(formGroup: FormGroup): ValidationErrors | null {
    const startDate = new Date(formGroup.get('dateFrom')?.value);
    const endDate = new Date(formGroup.get('dateTo')?.value);
    const allowedNumberOfMonths = 3;

    if (startDate && endDate) {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(
        threeMonthsAgo.getMonth() - allowedNumberOfMonths
      );

      if (startDate < threeMonthsAgo) {
        return { dateRange: true };
      }
    }

    return null;
  }
}

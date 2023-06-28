import { IStatisticReqData } from '../../../pages/statistic/interfaces';
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
  selector: 'app-usage-statistic-form',
  templateUrl: './usage-statistic-form.component.html',
  styleUrls: ['./usage-statistic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageStatisticFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  statisticForm!: FormGroup;

  @Input() formTitle!: string;

  @Output()
  statsFormEmitter: EventEmitter<IStatisticReqData> = new EventEmitter();

  ngOnInit(): void {
    this.statisticForm = this.formBuilder.group(
      {
        interval: ['week', Validators.required],
        dateFrom: [
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 3,
            new Date().getDate() + 6
          )
            .toISOString()
            .split('T')[0],
          Validators.required,
        ],

        dateTo: [new Date().toISOString().split('T')[0], Validators.required],
      },
      { validators: this.dateRangeValidator }
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
    const allowedNumberOfMonths = 3;
    const startDate = new Date(formGroup.get('dateFrom')?.value);
    const endDate = new Date(formGroup.get('dateTo')?.value);

    const monthsDifference =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    const daysDifference =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

    if (
      monthsDifference > allowedNumberOfMonths ||
      (monthsDifference === allowedNumberOfMonths && daysDifference > 30)
    ) {
      return { dateRange: true };
    }

    return null;
  }
}

import { IStatisticReqData } from '../../../pages/statistic/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-statistic-form',
  templateUrl: './users-statistic-form.component.html',
  styleUrls: ['./users-statistic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersStatisticFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  statisticForm!: FormGroup;

  @Input() formTitle!: string;

  @Output()
  statsFormEmitter: EventEmitter<IStatisticReqData> = new EventEmitter();

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

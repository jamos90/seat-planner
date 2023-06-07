import { Component } from '@angular/core';
import { CsvService } from './services/csv.service';
import { ScreenCaptureService } from './services/screen-capture.service';
import { FormBuilderService } from './services/form-builder.service';
import { TableService } from './services/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private csvService: CsvService,
    private screenCaptureService: ScreenCaptureService,
    private formBuilder: FormBuilderService,
    private tableService: TableService
  ) {}

  title = 'seat-planner';
  data: any[] = [];
  settingsForm = this.formBuilder.createPropertyKeyChangeForm();
  showTables: boolean = false;
  numberOfTables: number = 0;
  tableArray: any[] = [];
  showFormError: boolean = false;
  nameTags: any = [];

  public async importDataFromCSV(event: any) {
    let fileContent = await this.getTextFromFile(event);
    this.data = this.csvService.importDataFromCSV(fileContent);
  }

  private async getTextFromFile(event: any) {
    const file: File = event.target.files[0];
    let fileContent = await file.text();
    return fileContent;
  }

  public captureAndDownloadSeatPlan(): void {
    this.screenCaptureService.takeAndDownloadScreen();
  }

  public generateTables(): void {
    this.showFormError = false;
    if (
      this.settingsForm.get('tableType')!.value &&
      this.settingsForm.get('numberOfTables')!.value > 0
    ) {
      this.tableArray = this.tableService.generateTables(
        this.settingsForm.get('tableType')!.value,
        this.settingsForm.get('numberOfTables')!.value
      );
      this.showTables = true;
    } else {
      this.showFormError = true;
    }
  }

  removeTableFromArray(tableToRemoveIndex: number): void {
    this.tableArray.splice(tableToRemoveIndex, 1);
  }

  createNameTag(event: any) {
    this.nameTags.push(event.name);
  }
}

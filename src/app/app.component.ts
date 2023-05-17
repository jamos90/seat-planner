import { Component } from '@angular/core';
import { CsvService } from './services/csv.service';
import { ScreenCaptureService } from './services/screen-capture.service';
import { FormBuilderService } from './services/form-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private csvService: CsvService,
    private screenCaptureService: ScreenCaptureService,
    private formBuilder: FormBuilderService
  ) {}

  DEFAULT_TABLE_DIMENSIONS: any = {
    circular: {
      height: 100,
      width: 100,
      borderRadius: 50
    },
    square: {
      height: 100,
      width: 100,
      borderRadius: 0
    },
    rectangle: {
      height: 300,
      width: 100,
      borderRadius: 0
    }
  };

  title = 'seat-planner';
  data: any;
  settingsForm = this.formBuilder.createPropertyKeyChangeForm();
  showTables: boolean = false;
  numberOfTables: number = 0;
  tableArray: any[] = [];
  showFormError: boolean = false;

  public async importDataFromCSV(event: any) {
    let fileContent = await this.getTextFromFile(event);
    this.data = this.csvService.importDataFromCSV(fileContent);
    this.data.forEach((element: any) => {
      element;
    });
  }

  private async getTextFromFile(event: any) {
    const file: File = event.target.files[0];
    let fileContent = await file.text();
    return fileContent;
  }

  public setTableHeight() {
    return this.data.length > 0 ? `${this.data.length * 20}px` : '0px';
  }

  public captureAndDownloadSeatPlan() {
    this.screenCaptureService.takeAndDownloadScreen();
  }

  public generateTables() {
    this.showFormError = false;
    if (
      this.settingsForm.get('tableType')!.value &&
      this.settingsForm.get('numberOfTables')!.value > 0
    ) {
      this.tableArray = [];
      const tableType = this.settingsForm.get('tableType')!.value;
      for (let i = 0; i < this.settingsForm.get('numberOfTables')!.value; i++) {
        this.tableArray.push({
          tableType: tableType,
          startingHeight: this.DEFAULT_TABLE_DIMENSIONS[tableType].height,
          startingWidth: this.DEFAULT_TABLE_DIMENSIONS[tableType].width,
          borderRadius: this.DEFAULT_TABLE_DIMENSIONS[tableType].borderRadius
        });
      }
      this.showTables = true;
    } else {
      this.showFormError = true;
    }
  }

  removeTableFromArray(tableToRemoveIndex: number) {
    this.tableArray.splice(tableToRemoveIndex, 1);
  }
}

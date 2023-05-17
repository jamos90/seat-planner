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

  title = 'seat-planner';
  data: any;
  settingsForm = this.formBuilder.createPropertyKeyChangeForm();

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
}

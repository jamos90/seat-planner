import { Component } from '@angular/core';
import { CsvService } from './services/csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seat-planner';
  data: any;

  constructor(private csvService: CsvService) {}

  public async importDataFromCSV(event: any) {
    let fileContent = await this.getTextFromFile(event);
    this.data = this.csvService.importDataFromCSV(fileContent);
    console.log(this.data);
  }

  private async getTextFromFile(event: any) {
    const file: File = event.target.files[0];
    let fileContent = await file.text();
    return fileContent;
  }
}

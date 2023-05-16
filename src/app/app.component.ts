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

  public setNameTagWidth(index: number) {
    const nameLength = this.data[index].name.length;
    console.log(nameLength);
  }
}

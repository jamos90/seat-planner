import { Injectable, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenCaptureService {
  @ViewChild('screen', { static: true }) screen: any;

  constructor(private captureService: NgxCaptureService) {}

  takeAndDownloadScreen() {
    this.captureService
      .getImage(document.body, true)
      .pipe(
        tap(img => {
          console.log(img);
        }),
        tap((img: any) => this.captureService.downloadImage(img))
      )
      .subscribe();
  }
}

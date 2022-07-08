import { Component } from '@angular/core';
import { ExportService } from '../services/export.service';
import { InfoManagerService } from '../services/info-manager.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private generateReport: ExportService,
    private info: InfoManagerService
  ) {}

  releaseReport(data,typeSelectedReport) {
    typeSelectedReport = 'Excel Report'
    this.generateReport.exportAsExcelFile(this.info.all_Data, typeSelectedReport)
  }

}

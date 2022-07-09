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

  //Funcao para gerar reporte de dados em Excel
  releaseReport() {
    let typeSelectedReport = 'Excel Report'
    this.generateReport.exportAsExcelFile(this.info.all_Data, typeSelectedReport)
  }

  //Funcao para gerar reporte de dados em CSV
  releaseCSVReport()
  {
    this.generateReport.exportAsCSV(this.info.all_Data)
  }

  //Funcao para gerar reporte de dados em XML
  releaseXMLReport()
  {
    this.generateReport.exportAsXML(this.info.all_Data)
  }

}

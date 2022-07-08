import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import csvDownload from 'json-to-csv-export'

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  static toExportFileName(excelFileName: string): string {
    return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    XLSX.writeFile(workbook, ExportService.toExportFileName(excelFileName));
  }

  exportAsCSV(data)
  {
    csvDownload(data)
  }
}

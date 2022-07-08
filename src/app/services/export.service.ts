import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import csvDownload from 'json-to-csv-export';
import * as xml_js from 'xml-js';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class ExportService {

    
    constructor(private sanitizer: DomSanitizer) { }

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

  exportAsXML(data)
  {
    var theJSON = JSON.stringify(data);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    // this.downloadFile(''+uri, "xml_report")

    // var json = require('fs').readFileSync(data, 'utf8');
    var options = {compact: true, ignoreComment: true, spaces: 4};
    let result = xml_js.json2xml(data, options)
    console.log(result);
    
  }

  downloadFile(url: string, fileName: string): void {
    console.log('DD ',url);

    //Conve
    
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = url;
    downloadLink.click();
 }
}

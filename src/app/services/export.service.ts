import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import csvDownload from 'json-to-csv-export';
import * as xml_js from 'xml-js';
import * as fs from 'fs'
import { DomSanitizer } from '@angular/platform-browser';
import * as JsonToXML from "js2xmlparser";


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
    var element = document.createElement('a');
     var blob = new Blob([JsonToXML.parse("country", data)], {
       type: 'text/xml'
     });
     var url = URL.createObjectURL(blob);
     element.href = url;
     element.setAttribute('download', 'country_data.xml');
     document.body.appendChild(element); 
     element.click();
  }
}

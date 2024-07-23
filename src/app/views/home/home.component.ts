import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

import { ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
@ViewChild('content', {static: false}) el !: ElementRef;

  constructor(private service:ApiserviceService) {}

  readData:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res, "res==>");

      this.readData = res.data;
    });
  }
  
geraPDF(){
  let pdf = new jsPDF('p','pt', 'a4');
  pdf.html(this.el.nativeElement, {
    callback: (pdf) => {
      pdf.save("teste.pdf");
    }
  })
}

// geraPDF(){
//   const doc = new jsPDF();
// doc.text("Hello world!", 10, 10);
// doc.save("a4.pdf"); // will save the file in the current working directory
// }

}

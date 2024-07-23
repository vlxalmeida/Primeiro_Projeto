import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  errormsg: any;

  ngOnInit(): void {

  }

  cadastroForm = new FormGroup({
    'nro_ficha': new FormControl('', Validators.required),
    'nro_cas': new FormControl('', Validators.required),
    'nro_onu': new FormControl('', Validators.required),
    'cliente': new FormControl('', Validators.required),
    'produto': new FormControl('', Validators.required),
    'unidade': new FormControl('', Validators.required),
    'data_publicacao': new FormControl('', Validators.required),
    'nro_revisao': new FormControl('', Validators.required),
    'arquivo_pdf': new FormControl('', Validators.required),
  });

  cadastroSubmit() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      this.service.createData(this.cadastroForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.cadastroForm.reset();
      });
    }
    else
      this.errormsg = 'all field is required!';

  }

}

import { ContactoService } from 'src/app/services/contacto/contacto.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['estadistica.component.css'],
})



export class EstadisticaComponent implements OnInit {

  columnas: string[] = ['id', 'title', 'year'];

  contactos: contacto[] = [];

  dataSource:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(public contactoService:ContactoService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit() {
    this.contactoService.getContactos().subscribe((datos:any) => {
      datos.map((item:contacto, i:any)=>{
        item.id=i + 1 
        this.contactos.push(item)
      })

      this.dataSource = new MatTableDataSource<contacto>(this.contactos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}

export interface contacto {
  id: number;
  title: string;
  year: number;
};



import { EntryService } from './../shared/entry.service';
import { Entry } from './../shared/entry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe(
      response => this.entries = response,
      error => alert('Erro ao carregar Lista')
    );
  }

  deleteEntry(entry) {
    const mustDelete = confirm('Deseja excluir este item?');

    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        //retorna os valores atualizados do array que sejam diferentes da categoria recebida por parâmetro
        () => this.entries = this.entries.filter(element => element != entry),
        () => alert('Erro ao excluir!')
      );
    }
    
  }

}

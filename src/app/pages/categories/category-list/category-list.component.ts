import { CategoryService } from './../shared/category.service';
import { Category } from './../shared/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      response => this.categories = response,
      error => alert('Erro ao carregar Lista')
    );
  }

  deleteCategory(category) {
    const mustDelete = confirm('Deseja excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        //retorna os valores atualizados do array que sejam diferentes da categoria recebida por parâmetro
        () => this.categories = this.categories.filter(element => element != category),
        () => alert('Erro ao excluir!')
      );
    }
    
  }

}

import { Category } from './pages/categories/shared/category.model';
import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Valores relacionados a moradia'},
            { id: 2, name: 'Saúde', description: 'Plano de saúde'},
            { id: 3, name: 'Lazer', description: 'Cinema, parque, praia'},
            { id: 4, name: 'Salário', description: 'Recebimento de salário'},
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
        ];

        return { categories }
    }
}
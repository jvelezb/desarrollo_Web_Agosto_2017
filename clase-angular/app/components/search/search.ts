import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'busqueda-productos',
  templateUrl: 'app/components/search/search.html'
})
export default class SearchComponent {
  formModel: FormGroup = new FormGroup({
    'nombre': new FormControl(),
    'precio': new FormControl(),
    'categoria': new FormControl()
  });
}

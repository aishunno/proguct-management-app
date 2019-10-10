import {Injectable} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {
  constructor(http: HttpClient) {
    super(http, 'products');
  }
}

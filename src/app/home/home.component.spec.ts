import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductsService } from '../services/products.service';

import { HomeComponent } from './home.component';

xdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
      RouterTestingModule,],
      declarations: [ HomeComponent ],
      providers:[ProductsService,{
        provide: ActivatedRoute,
       
    },]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check product loaded', () => {
    fixture = TestBed.createComponent(HomeComponent);
     fixture.componentInstance.getAllProduct();
     expect(fixture.componentInstance.completeProduct.length).toBeGreaterThan(0)
  
  });
});

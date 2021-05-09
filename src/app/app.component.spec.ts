import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[ProductsService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ShopBridge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ShopBridge');
  });

  it('should get Login message', () => {
    const fixture = TestBed.createComponent(AppComponent);
     fixture.componentInstance.user.userName = "admin"
     fixture.componentInstance.user.password = "admin"

     fixture.componentInstance.login();
    expect(fixture.componentInstance.user.admin).toBe(true)
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let routeChangeSource: BehaviorSubject<Params>;
  let fixture : ComponentFixture<AppComponent>;
let app: AppComponent;
let activatedRoute : ActivatedRoute
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 123 })
        },
        
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    activatedRoute = TestBed.get(ActivatedRoute);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});

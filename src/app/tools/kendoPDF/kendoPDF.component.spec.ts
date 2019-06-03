/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KendoPDFComponent } from './kendoPDF.component';

describe('KendoPDFComponent', () => {
  let component: KendoPDFComponent;
  let fixture: ComponentFixture<KendoPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

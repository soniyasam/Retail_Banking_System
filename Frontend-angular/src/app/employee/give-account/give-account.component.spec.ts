/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiveAccountComponent } from './give-account.component';

describe('GiveAccountComponent', () => {
  let component: GiveAccountComponent;
  let fixture: ComponentFixture<GiveAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

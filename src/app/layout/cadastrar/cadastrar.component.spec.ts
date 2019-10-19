import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cadastrarComponent } from './cadastrar.component';

describe('cadastrarComponent', () => {
  let component: cadastrarComponent;
  let fixture: ComponentFixture<cadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

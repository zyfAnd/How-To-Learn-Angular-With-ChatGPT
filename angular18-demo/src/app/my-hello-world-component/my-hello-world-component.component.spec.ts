import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelloWorldComponentComponent } from './my-hello-world-component.component';

describe('MyHelloWorldComponentComponent', () => {
  let component: MyHelloWorldComponentComponent;
  let fixture: ComponentFixture<MyHelloWorldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHelloWorldComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHelloWorldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

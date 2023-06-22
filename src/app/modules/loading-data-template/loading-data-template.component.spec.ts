import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDataTemplateComponent } from './loading-data-template.component';

describe('LoadingDataTemplateComponent', () => {
    let component: LoadingDataTemplateComponent;
    let fixture: ComponentFixture<LoadingDataTemplateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoadingDataTemplateComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoadingDataTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

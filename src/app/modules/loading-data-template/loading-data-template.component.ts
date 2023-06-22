import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'allogy-loading-data-template',
    template: `
        <ng-container *ngIf="!hasError; else error">
            <div class="d-flex align-items-center">
                <p class="py-2 m-0 font-italic text-muted">
                    Loading...
                </p>
                <span class="m-2 spinner-grow text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </span>
            </div>
        </ng-container>

        <ng-template #error>
            <div class="w-100 alert allogy-alert alert-danger mb-0">
                <div class="">
                    {{errorMessage}}
                </div>
                <div *ngIf="devMode && httpErrorData" class="mt-3">
                    <pre>{{httpErrorData | json}}</pre>
                </div>
            </div>
        </ng-template>`,
    styles: [],
    encapsulation: ViewEncapsulation.None
})
export class LoadingDataTemplateComponent {
    @Input() devMode: boolean;
    @Input() hasError: boolean;
    @Input() httpErrorData: any;
    @Input() set errorMessage(value: string) {
        this._errorMsg = value || this._errorMsg;
    }
    get errorMessage(): string {
        return this._errorMsg;
    }
    _errorMsg = 'A problem occurred and the data could not be displayed';
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface StyleDisplay {
    [key: string]: string | number;
    'font-family'?: string;
    'font-size'?: string;
    'font-style'?: string;
    'font-weight'?: number;
    'letter-spacing'?: string;
    'line-height'?: string;
}

@Component({
    selector: 'app-typography-example',
    templateUrl: './typography-example.component.html',
    styleUrls: ['./typography-example.component.scss']
})
export class TypographyExampleComponent implements OnInit, AfterViewInit {

    keymap: StyleDisplay = {
        // 'font-family': '',
        'font-size': '',
        // 'font-style': '',
        'font-weight': 0,
        // 'letter-spacing': '',
        'line-height': '',
    };
    @ViewChild('standardH1') standardH1: ElementRef;
    standardH1Styles: StyleDisplay;
    @ViewChild('standardH2') standardH2: ElementRef;
    standardH2Styles: StyleDisplay;
    @ViewChild('standardH3') standardH3: ElementRef;
    standardH3Styles: StyleDisplay;
    @ViewChild('standardH4') standardH4: ElementRef;
    standardH4Styles: StyleDisplay;
    @ViewChild('standardH5') standardH5: ElementRef;
    standardH5Styles: StyleDisplay;
    @ViewChild('standardH6') standardH6: ElementRef;
    standardH6Styles: StyleDisplay;

    @ViewChild('matH1') matH1: ElementRef;
    matH1Styles: StyleDisplay;
    @ViewChild('matH2') matH2: ElementRef;
    matH2Styles: StyleDisplay;
    @ViewChild('matH3') matH3: ElementRef;
    matH3Styles: StyleDisplay;
    @ViewChild('matH4') matH4: ElementRef;
    matH4Styles: StyleDisplay;
    @ViewChild('matH5') matH5: ElementRef;
    matH5Styles: StyleDisplay;
    @ViewChild('matH6') matH6: ElementRef;
    matH6Styles: StyleDisplay;

    @ViewChild('bootstrapH1') bootstrapH1: ElementRef;
    bootstrapH1Styles: StyleDisplay;
    @ViewChild('bootstrapH2') bootstrapH2: ElementRef;
    bootstrapH2Styles: StyleDisplay;
    @ViewChild('bootstrapH3') bootstrapH3: ElementRef;
    bootstrapH3Styles: StyleDisplay;
    @ViewChild('bootstrapH4') bootstrapH4: ElementRef;
    bootstrapH4Styles: StyleDisplay;
    @ViewChild('bootstrapH5') bootstrapH5: ElementRef;
    bootstrapH5Styles: StyleDisplay;
    @ViewChild('bootstrapH6') bootstrapH6: ElementRef;
    bootstrapH6Styles: StyleDisplay;

    constructor() { }

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
        this.standardH1Styles = this.computeStyles(this.standardH1);
        this.standardH2Styles = this.computeStyles(this.standardH2);
        this.standardH3Styles = this.computeStyles(this.standardH3);
        this.standardH4Styles = this.computeStyles(this.standardH4);
        this.standardH5Styles = this.computeStyles(this.standardH5);
        this.standardH6Styles = this.computeStyles(this.standardH6);
        this.matH1Styles = this.computeStyles(this.matH1);
        this.matH2Styles = this.computeStyles(this.matH2);
        this.matH3Styles = this.computeStyles(this.matH3);
        this.matH4Styles = this.computeStyles(this.matH4);
        this.matH5Styles = this.computeStyles(this.matH5);
        this.matH6Styles = this.computeStyles(this.matH6);
        this.bootstrapH1Styles = this.computeStyles(this.bootstrapH1);
        this.bootstrapH2Styles = this.computeStyles(this.bootstrapH2);
        this.bootstrapH3Styles = this.computeStyles(this.bootstrapH3);
        this.bootstrapH4Styles = this.computeStyles(this.bootstrapH4);
        this.bootstrapH5Styles = this.computeStyles(this.bootstrapH5);
        this.bootstrapH6Styles = this.computeStyles(this.bootstrapH6);
    }

    private computeStyles(el: ElementRef): StyleDisplay {
        const map: StyleDisplay = {};
        Object.keys(this.keymap).forEach((key: string, index: number) => {
            map[key] = getComputedStyle(el.nativeElement).getPropertyValue(key);

        });
        return map;
    }

}

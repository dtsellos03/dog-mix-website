/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './contribute.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/forms';
import * as import3 from '../../../../assets/app/contribute/contribute.component';
import * as import4 from '@angular/common';
import * as import5 from '../../../../assets/app/mixes.service';
import * as import6 from '@angular/router';
var styles_ContributeComponent = [import0.styles];
export var RenderType_ContributeComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_ContributeComponent,
    data: {}
});
function View_ContributeComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 3, 'option', [], null, null, null, null, null)),
        import1.ɵdid(147456, null, 0, import2.NgSelectOption, [
            import1.ElementRef,
            import1.Renderer,
            [
                2,
                import2.SelectControlValueAccessor
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import1.ɵdid(147456, null, 0, import2.ɵq, [
            import1.ElementRef,
            import1.Renderer,
            [
                8,
                null
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        (l()(), import1.ɵted(null, [
            '\n    \n    ',
            '\n  '
        ]))
    ], function (ck, v) {
        var currVal_0 = import1.ɵinlineInterpolate(1, '', v.context.$implicit, '');
        ck(v, 1, 0, currVal_0);
        var currVal_1 = import1.ɵinlineInterpolate(1, '', v.context.$implicit, '');
        ck(v, 2, 0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit;
        ck(v, 3, 0, currVal_2);
    });
}
function View_ContributeComponent_2(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 3, 'option', [], null, null, null, null, null)),
        import1.ɵdid(147456, null, 0, import2.NgSelectOption, [
            import1.ElementRef,
            import1.Renderer,
            [
                2,
                import2.SelectControlValueAccessor
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import1.ɵdid(147456, null, 0, import2.ɵq, [
            import1.ElementRef,
            import1.Renderer,
            [
                8,
                null
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        (l()(), import1.ɵted(null, [
            '\n    \n    ',
            '\n  '
        ]))
    ], function (ck, v) {
        var currVal_0 = import1.ɵinlineInterpolate(1, '', v.context.$implicit, '');
        ck(v, 1, 0, currVal_0);
        var currVal_1 = import1.ɵinlineInterpolate(1, '', v.context.$implicit, '');
        ck(v, 2, 0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit;
        ck(v, 3, 0, currVal_2);
    });
}
function View_ContributeComponent_3(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 6, 'div', [[
                'class',
                'ui container'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Uh oh. It seems like this mix already exists. Please submit another one.'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null))
    ], null, null);
}
function View_ContributeComponent_4(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 6, 'div', [[
                'class',
                'ui container'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Success!'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null))
    ], null, null);
}
export function View_ContributeComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 96, 'div', [[
                'class',
                'contribute-form'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 93, 'form', [
            [
                'class',
                'ui form'
            ],
            [
                'novalidate',
                ''
            ],
            [
                'style',
                'width: 100%;'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (import1.ɵnov(v, 4).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import1.ɵnov(v, 4).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(16384, null, 0, import2.ɵbf, [], null, null),
        import1.ɵdid(540672, null, 0, import2.FormGroupDirective, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { form: [
                0,
                'form'
            ]
        }, { ngSubmit: 'ngSubmit' }),
        import1.ɵprd(2048, null, import2.ControlContainer, null, [import2.FormGroupDirective]),
        import1.ɵdid(16384, null, 0, import2.NgControlStatusGroup, [import2.ControlContainer], null, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'field'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Mix name'])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'input', [
            [
                'formControlName',
                'mixName'
            ],
            [
                'name',
                'mixName'
            ],
            [
                'placeholder',
                'e.g. Puguaua'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import1.ɵnov(v, 14)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 14).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import1.ɵnov(v, 14)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import1.ɵnov(v, 14)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import1.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import1.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import1.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import1.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n  \n   '])),
        (l()(), import1.ɵeld(0, null, null, 27, 'div', [[
                'class',
                'two fields'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n  \n  '])),
        (l()(), import1.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'field'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Image URL'])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'input', [
            [
                'formControlName',
                'mixURL'
            ],
            [
                'name',
                'mixURL'
            ],
            [
                'placeholder',
                'e.g. http://i.imgur.com/qtnuAiI.jpg'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import1.ɵnov(v, 29)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 29).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import1.ɵnov(v, 29)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import1.ɵnov(v, 29)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import1.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import1.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import1.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import1.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n  \n    '])),
        (l()(), import1.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'field'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Image Source'])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'input', [
            [
                'formControlName',
                'imageURL'
            ],
            [
                'name',
                'imageURL'
            ],
            [
                'placeholder',
                'e.g. http://life.barkpost.com/corgi-mixes/'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import1.ɵnov(v, 42)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 42).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import1.ɵnov(v, 42)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import1.ɵnov(v, 42)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import1.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import1.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import1.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import1.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n  \n  '])),
        (l()(), import1.ɵted(null, ['\n\n \n  '])),
        (l()(), import1.ɵeld(0, null, null, 35, 'div', [[
                'class',
                'two fields'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 15, 'div', [[
                'class',
                'field'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Breed'])),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵeld(0, null, null, 9, 'select', [
            [
                'class',
                'ui fluid dropdown'
            ],
            [
                'formControlName',
                'breed1'
            ],
            [
                'name',
                'breed1'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'change'
            ],
            [
                null,
                'blur'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('change' === en)) {
                var pd_0 = (import1.ɵnov(v, 58).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 58).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(16384, null, 0, import2.SelectControlValueAccessor, [
            import1.Renderer,
            import1.ElementRef
        ], null, null),
        import1.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.SelectControlValueAccessor]),
        import1.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import1.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import1.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵand(16777216, null, null, 1, null, View_ContributeComponent_1)),
        import1.ɵdid(802816, null, 0, import4.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 15, 'div', [[
                'class',
                'field'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Breed'])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 9, 'select', [
            [
                'class',
                'ui fluid dropdown'
            ],
            [
                'formControlName',
                'breed2'
            ],
            [
                'name',
                'breed2'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'change'
            ],
            [
                null,
                'blur'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('change' === en)) {
                var pd_0 = (import1.ɵnov(v, 75).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 75).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(16384, null, 0, import2.SelectControlValueAccessor, [
            import1.Renderer,
            import1.ElementRef
        ], null, null),
        import1.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.SelectControlValueAccessor]),
        import1.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import1.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import1.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵand(16777216, null, null, 1, null, View_ContributeComponent_2)),
        import1.ɵdid(802816, null, 0, import4.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n  \n  '])),
        (l()(), import1.ɵand(16777216, null, null, 1, null, View_ContributeComponent_3)),
        import1.ɵdid(16384, null, 0, import4.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵand(16777216, null, null, 1, null, View_ContributeComponent_4)),
        import1.ɵdid(16384, null, 0, import4.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n  \n  \n  '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'ui button'
            ],
            [
                'type',
                'submit'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, ['Submit'])),
        (l()(), import1.ɵted(null, ['\n \n'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.submitMix;
        ck(v, 4, 0, currVal_7);
        var currVal_15 = 'mixName';
        ck(v, 16, 0, currVal_15);
        var currVal_23 = 'mixURL';
        ck(v, 31, 0, currVal_23);
        var currVal_31 = 'imageURL';
        ck(v, 44, 0, currVal_31);
        var currVal_39 = 'breed1';
        ck(v, 60, 0, currVal_39);
        var currVal_40 = co.breedchoices;
        ck(v, 65, 0, currVal_40);
        var currVal_48 = 'breed2';
        ck(v, 77, 0, currVal_48);
        var currVal_49 = co.breedchoices;
        ck(v, 82, 0, currVal_49);
        var currVal_50 = (co.breederror == 1);
        ck(v, 88, 0, currVal_50);
        var currVal_51 = (co.successmessage == 1);
        ck(v, 91, 0, currVal_51);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import1.ɵnov(v, 6).ngClassUntouched;
        var currVal_1 = import1.ɵnov(v, 6).ngClassTouched;
        var currVal_2 = import1.ɵnov(v, 6).ngClassPristine;
        var currVal_3 = import1.ɵnov(v, 6).ngClassDirty;
        var currVal_4 = import1.ɵnov(v, 6).ngClassValid;
        var currVal_5 = import1.ɵnov(v, 6).ngClassInvalid;
        var currVal_6 = import1.ɵnov(v, 6).ngClassPending;
        ck(v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = import1.ɵnov(v, 18).ngClassUntouched;
        var currVal_9 = import1.ɵnov(v, 18).ngClassTouched;
        var currVal_10 = import1.ɵnov(v, 18).ngClassPristine;
        var currVal_11 = import1.ɵnov(v, 18).ngClassDirty;
        var currVal_12 = import1.ɵnov(v, 18).ngClassValid;
        var currVal_13 = import1.ɵnov(v, 18).ngClassInvalid;
        var currVal_14 = import1.ɵnov(v, 18).ngClassPending;
        ck(v, 13, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_16 = import1.ɵnov(v, 33).ngClassUntouched;
        var currVal_17 = import1.ɵnov(v, 33).ngClassTouched;
        var currVal_18 = import1.ɵnov(v, 33).ngClassPristine;
        var currVal_19 = import1.ɵnov(v, 33).ngClassDirty;
        var currVal_20 = import1.ɵnov(v, 33).ngClassValid;
        var currVal_21 = import1.ɵnov(v, 33).ngClassInvalid;
        var currVal_22 = import1.ɵnov(v, 33).ngClassPending;
        ck(v, 28, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);
        var currVal_24 = import1.ɵnov(v, 46).ngClassUntouched;
        var currVal_25 = import1.ɵnov(v, 46).ngClassTouched;
        var currVal_26 = import1.ɵnov(v, 46).ngClassPristine;
        var currVal_27 = import1.ɵnov(v, 46).ngClassDirty;
        var currVal_28 = import1.ɵnov(v, 46).ngClassValid;
        var currVal_29 = import1.ɵnov(v, 46).ngClassInvalid;
        var currVal_30 = import1.ɵnov(v, 46).ngClassPending;
        ck(v, 41, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);
        var currVal_32 = import1.ɵnov(v, 62).ngClassUntouched;
        var currVal_33 = import1.ɵnov(v, 62).ngClassTouched;
        var currVal_34 = import1.ɵnov(v, 62).ngClassPristine;
        var currVal_35 = import1.ɵnov(v, 62).ngClassDirty;
        var currVal_36 = import1.ɵnov(v, 62).ngClassValid;
        var currVal_37 = import1.ɵnov(v, 62).ngClassInvalid;
        var currVal_38 = import1.ɵnov(v, 62).ngClassPending;
        ck(v, 57, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38);
        var currVal_41 = import1.ɵnov(v, 79).ngClassUntouched;
        var currVal_42 = import1.ɵnov(v, 79).ngClassTouched;
        var currVal_43 = import1.ɵnov(v, 79).ngClassPristine;
        var currVal_44 = import1.ɵnov(v, 79).ngClassDirty;
        var currVal_45 = import1.ɵnov(v, 79).ngClassValid;
        var currVal_46 = import1.ɵnov(v, 79).ngClassInvalid;
        var currVal_47 = import1.ɵnov(v, 79).ngClassPending;
        ck(v, 74, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47);
        var currVal_52 = !co.submitMix.valid;
        ck(v, 93, 0, currVal_52);
    });
}
function View_ContributeComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-contribute', [], null, null, null, View_ContributeComponent_0, RenderType_ContributeComponent)),
        import1.ɵdid(114688, null, 0, import3.ContributeComponent, [
            import5.MixesService,
            import6.Router
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var ContributeComponentNgFactory = import1.ɵccf('app-contribute', import3.ContributeComponent, View_ContributeComponent_Host_0, {}, {}, []);
//# sourceMappingURL=contribute.component.ngfactory.js.map
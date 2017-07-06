/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './show-mixes.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
import * as import4 from '../../../../assets/app/show-mixes/pipes';
import * as import5 from '../../../../assets/app/show-mixes/show-mixes.component';
import * as import6 from '@angular/forms';
import * as import7 from '../../../../assets/app/mixes.service';
var styles_ShowMixesComponent = [import0.styles];
export var RenderType_ShowMixesComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_ShowMixesComponent,
    data: {}
});
function View_ShowMixesComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵted(null, ['\n              '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'a', [
            [
                'class',
                'item'
            ],
            [
                'ng-class',
                'queryString == breed.name ? \'active\' : \'item\''
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onClickMe(v.context.$implicit.name) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'img', [[
                'class',
                'ui avatar image hide-if'
            ]
        ], [[
                8,
                'src',
                4
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, [
            ' ',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n            ']))
    ], null, function (ck, v) {
        var currVal_0 = import1.ɵinlineInterpolate(1, '', v.context.$implicit.image, '');
        ck(v, 2, 0, currVal_0);
        var currVal_1 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_1);
    });
}
function View_ShowMixesComponent_2(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 27, 'div', [[
                'class',
                'card'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n\n        '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'a', [[
                'class',
                'image'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import1.ɵnov(v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(671744, null, 0, import2.RouterLinkWithHref, [
            import2.Router,
            import2.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import1.ɵpad(2),
        (l()(), import1.ɵted(null, ['\n\n          '])),
        (l()(), import1.ɵeld(0, null, null, 0, 'img', [], [[
                8,
                'src',
                4
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 17, 'div', [[
                'class',
                'content'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [' \n        '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'a', [[
                'class',
                'right floated noCursor labelColor'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ' '
        ])),
        (l()(), import1.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'arrow down icon'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [' \n        '])),
        (l()(), import1.ɵeld(0, null, null, 2, 'a', [[
                'class',
                'right floated noCursor labelColor'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ' '
        ])),
        (l()(), import1.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'arrow up icon'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n          '])),
        (l()(), import1.ɵeld(0, null, null, 3, 'a', [[
                'class',
                'header'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import1.ɵnov(v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(671744, null, 0, import2.RouterLinkWithHref, [
            import2.Router,
            import2.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import1.ɵpad(2),
        (l()(), import1.ɵted(null, [
            ' ',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n\n          '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'meta'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n            ',
            ' | ',
            '\n          '
        ])),
        (l()(), import1.ɵted(null, ['\n\n        '])),
        (l()(), import1.ɵted(null, ['\n\n\n      ']))
    ], function (ck, v) {
        var currVal_2 = ck(v, 4, 0, '/mixes', v.context.$implicit.id);
        ck(v, 3, 0, currVal_2);
        var currVal_8 = ck(v, 21, 0, '/mixes', v.context.$implicit.id);
        ck(v, 20, 0, currVal_8);
    }, function (ck, v) {
        var currVal_0 = import1.ɵnov(v, 3).target;
        var currVal_1 = import1.ɵnov(v, 3).href;
        ck(v, 2, 0, currVal_0, currVal_1);
        var currVal_3 = import1.ɵinlineInterpolate(1, '', v.context.$implicit.image, '');
        ck(v, 6, 0, currVal_3);
        var currVal_4 = v.context.$implicit.downvote;
        ck(v, 12, 0, currVal_4);
        var currVal_5 = v.context.$implicit.upvote;
        ck(v, 16, 0, currVal_5);
        var currVal_6 = import1.ɵnov(v, 20).target;
        var currVal_7 = import1.ɵnov(v, 20).href;
        ck(v, 19, 0, currVal_6, currVal_7);
        var currVal_9 = v.context.$implicit.Name;
        ck(v, 22, 0, currVal_9);
        var currVal_10 = v.context.$implicit.breed1;
        var currVal_11 = v.context.$implicit.breed2;
        ck(v, 25, 0, currVal_10, currVal_11);
    });
}
export function View_ShowMixesComponent_0(l) {
    return import1.ɵvid(0, [
        import1.ɵpid(0, import4.FilterPipe, []),
        (l()(), import1.ɵeld(0, null, null, 46, 'div', [
            [
                'class',
                'flex-container'
            ],
            [
                'style',
                'display: flex;'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n\n\n  '])),
        (l()(), import1.ɵeld(0, null, null, 33, 'div', [[
                'class',
                'fixed column'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n\n    '])),
        (l()(), import1.ɵeld(0, null, null, 30, 'div', [[
                'style',
                'position: sticky; top: 20px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n\n      '])),
        (l()(), import1.ɵeld(0, null, null, 27, 'div', [
            [
                'class',
                'ui vertical menu'
            ],
            [
                'id',
                'sidemenu'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 9, 'div', [[
                'class',
                'item'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n          '])),
        (l()(), import1.ɵeld(0, null, null, 6, 'div', [[
                'class',
                'ui input'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 5, 'input', [
            [
                'autocomplete',
                'off'
            ],
            [
                'class',
                'prompt smaller-font'
            ],
            [
                'id',
                'search'
            ],
            [
                'placeholder',
                'Search breed'
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
                'ngModelChange'
            ],
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
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import1.ɵnov(v, 13)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 13).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import1.ɵnov(v, 13)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import1.ɵnov(v, 13)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.queryString = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(16384, null, 0, import6.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef,
            [
                2,
                import6.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import1.ɵprd(1024, null, import6.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import6.DefaultValueAccessor]),
        import1.ɵdid(671744, null, 0, import6.NgModel, [
            [
                8,
                null
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
                import6.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import1.ɵprd(2048, null, import6.NgControl, null, [import6.NgModel]),
        import1.ɵdid(16384, null, 0, import6.NgControlStatus, [import6.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'a', [[
                'class',
                'item'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onClickMe('') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['\n    All mixes\n  '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'item'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n          Breeds\n        '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 7, 'div', [[
                'style',
                'height: 700px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n          '])),
        (l()(), import1.ɵeld(0, null, null, 4, 'div', [
            [
                'class',
                'menu'
            ],
            [
                'style',
                'height: 100%;\noverflow: scroll;'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n\n            '])),
        (l()(), import1.ɵand(16777216, null, null, 1, null, View_ShowMixesComponent_1)),
        import1.ɵdid(802816, null, 0, import3.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n\n          '])),
        (l()(), import1.ɵted(null, ['\n\n\n        '])),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵted(null, ['\n\n    '])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n\n  '])),
        (l()(), import1.ɵeld(0, null, null, 8, 'div', [
            [
                '_',
                ''
            ],
            [
                'class',
                'flex column'
            ],
            [
                'style',
                'flex: 1; min-width: 0px; padding-left: 5px'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n\n    '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'div', [[
                'class',
                'ui doubling fluid link cards'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n\n      '])),
        (l()(), import1.ɵand(16777216, null, null, 2, null, View_ShowMixesComponent_2)),
        import1.ɵdid(802816, null, 0, import3.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import1.ɵppd(2),
        (l()(), import1.ɵted(null, ['\n\n    '])),
        (l()(), import1.ɵted(null, ['\n\n\n\n  '])),
        (l()(), import1.ɵted(null, ['\n\n\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.queryString;
        ck(v, 15, 0, currVal_7);
        var currVal_8 = co.breeds;
        ck(v, 31, 0, currVal_8);
        var currVal_9 = import1.ɵunv(v, 43, 0, ck(v, 44, 0, import1.ɵnov(v, 0), co.mixes, co.queryString));
        ck(v, 43, 0, currVal_9);
    }, function (ck, v) {
        var currVal_0 = import1.ɵnov(v, 17).ngClassUntouched;
        var currVal_1 = import1.ɵnov(v, 17).ngClassTouched;
        var currVal_2 = import1.ɵnov(v, 17).ngClassPristine;
        var currVal_3 = import1.ɵnov(v, 17).ngClassDirty;
        var currVal_4 = import1.ɵnov(v, 17).ngClassValid;
        var currVal_5 = import1.ɵnov(v, 17).ngClassInvalid;
        var currVal_6 = import1.ɵnov(v, 17).ngClassPending;
        ck(v, 12, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_ShowMixesComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-show-mixes', [], null, null, null, View_ShowMixesComponent_0, RenderType_ShowMixesComponent)),
        import1.ɵdid(114688, null, 0, import5.ShowMixesComponent, [import7.MixesService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var ShowMixesComponentNgFactory = import1.ɵccf('app-show-mixes', import5.ShowMixesComponent, View_ShowMixesComponent_Host_0, {}, {}, []);
//# sourceMappingURL=show-mixes.component.ngfactory.js.map
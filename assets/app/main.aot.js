import './polyfills';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/assets/app/app.module.ngfactory';
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.aot.js.map
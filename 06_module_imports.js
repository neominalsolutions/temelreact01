// default kullanımda direkt olarak isimden erişim sağlandı.
import multiply, { division, sum } from './07_module_exports.js'; // ecmascript module import yöntemi. react ecmascript module import yöntemini kullanır.
import * as math from './07_module_exports.js'; // namespace tanımı yapıp ilgili isim üzeinden de export olan değerlere erişim yapabiliyoruz.
// Not: pure js de export import işlemlerini yönetirken .js suffix dikkat ediyoruz.

sum(10, 4);
division(10, 2);

math.division(45, 5);

multiply(7, 5);

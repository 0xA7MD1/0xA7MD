# موقع أحمد الشخصي

## قرارات أحمد المعتمدة — 2026-10-10

- العمل داخل هذا المشروع `0xA7MD`، والثيم المرجعي في `../cloud job automation` للقراءة فقط.
- اعمل على `dev` وارفع الجولة المختبرة إلى `main` بكوميت واضح. لا تنشئ برانشًا لكل ميزة.
- الموقع صفحة واحدة عربية للبرمجة حاليًا. التنقل داخلي إلى المشاريع، ما أبنيه، عنّي والتواصل. لا تضف صفحات جرافيك أو خدمات أخرى دون طلب.
- الشعار المعتمد في `public/brand/`؛ اعرض رمز «أ» وحده في الهيدر والفوتر وباقي الموقع، ولا تعرض كتابة «أحمد» كشعار. لا تغيّر paths ولا تستخدم الاستكشافات المولدة سابقًا.
- حافظ على عرض المشاريع الكبير. معاينة الهبوط داخل إطار متصفح؛ الضغط يفعّل التصفح المتجاوب داخل نفس الكارد مع رابط فتح مستقل. لا تعِد شبكة بطاقات صغيرة.
- تألق هو امتداد Intlaq. الرابط الحالي `https://talluq.vercel.app/`، والريبو خاص. لا تستخدم روابط Intlaq القديم لتألق، ولا تعرض مستودعًا عامًا له.
- البرمجة هي التركيز الوظيفي؛ التصميم مهارة مساعدة. أبقِ تواصل التوظيف والمشروع البرمجي واضحين.
- بيانات الموقع في `src/data/portfolio.ts`. استخدم معلومات أحمد الفعلية ولا تختلق نتائج أو أرقامًا أو شهادات.
- تجربة متجر عزم مكتملة وليست وظيفة حالية. التعليم ثانوي مسار عام، وتصحيح أحمد يتقدم على التصنيف القديم في CV.
- Line of Survival مشروع إنتاجي بمستودع خاص؛ اعرض رابط الموقع دون GitHub. لا تكرر Verba ولا تعِد مشروع Abdat المحذوف.
- أحمد وافق على عرض صفحات المشاريع الحية في 2026-10-11. حمّل المعاينات قرب الظهور وأزل البعيدة، واسمح بتصفح مشروع واحد فقط. لا تتجاوز منع التضمين إن تغيّر؛ أبقِ رابط الفتح المباشر. الشات بوت اقتراح فقط.
- حركة الموقع عبر GSAP في PageMotion مؤجلة مع احترام reduced motion وتنظيف المستمع والمراقب والسياق. حافظ على المحتوى ظاهرًا افتراضيًا والتنقل الأصلي عند تعطل الحركة، ولا تضف مؤثرات مستمرة أو تحميلًا لكل مشاريع iframe. أحمد طلب قصور التمرير في 2026-10-11: ScrollSmoother بزمن 1.1s على الأجهزة غير اللمسية، smoothTouch: 0 وnormalizeScroll: false. الهيدر والـskip-link خارج smooth-wrapper؛ main-content هو المحتوى المتحرك، ويُلغى التأثير مع reduced-motion.
- خطوط Thmanyah محلية فقط؛ ترخيص المصدر يمنع توزيعها أو استضافتها. البديل المستضاف IBM Plex Sans Arabic.
- لا تنسخ backend أو secrets من مشروع الثيم. الموقع الحالي لا يحتاج backend أو `.env`.

## التسليم والتشغيل

راجع `README.md` للتشغيل وبنية الملفات. سجّل المهام النشطة في `_AGENT_HUB/<وسم>.md` طبقًا لتعليمات أحمد؛ احذف سجل المهمة عند اكتمالها دون بنود مفتوحة، وانقل القرارات الدائمة هنا وإلى `CLAUDE.md` المطابق.

- رابط مهام إكسبو https://mahamexpo.sa/. متجر عزم يبقى عملًا منجزًا بلا رابط لأن الوجهة تغيرت. أزيلت عبارة الخبرة العملية مع Laravel من النبذة، مع إبقاء تقنيات الخبرة الفعلية.
- suppressHydrationWarning على body يعالج خصائص إضافات المتصفح فقط؛ لا تستخدمه لإخفاء اختلاف المكونات.

- Hero logo (requested by Ahmed on 2026-10-26, made still on 2026-10-28): `public/brand/ahmed-icon-metal.webp` is a still frame baked from Paper Shaders `LiquidMetal` (tint `#2760f5`, repetition 1.5, softness 0.45, shiftRed 0.12, shiftBlue 0.35, distortion 0.05, contour 0.7, angle 70, scale 0.82, frame 2700). It is used on the hero logo only, through CSS. No runtime shader and no continuous effect.

- Graphic works page (requested by Ahmed on 2026-10-28): `/graphic` shows design works, featured first and then all works with category filters. It is not linked from the home page and is shared by direct link only. Data lives in `src/data/graphic-works.json`; images are `webp` files in `public/graphic/`.
- Default theme (requested by Ahmed on 2026-10-29): the site opens dark for every visitor, whatever the device setting. `enableSystem` is off in `src/app/layout.tsx`; the toggle still works.

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="flex max-w-lg flex-col items-center gap-6 text-center">
        <p
          aria-hidden="true"
          className="font-mono text-8xl font-medium tracking-tighter text-muted-foreground/40 sm:text-9xl"
        >
          404
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          الصفحة غير موجودة
        </h1>
        <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
          يبدو أن هذا الرابط غير صحيح أو أن الصفحة انتقلت. تقدر ترجع للرئيسية
          وتتصفح أعمالي.
        </p>
        <Link href="/" className="button button-glass">
          <ArrowRight className="size-4" aria-hidden="true" />
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}

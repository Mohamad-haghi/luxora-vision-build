import { useState } from "react";
import { ArrowLeft, Check, Loader2 } from "lucide-react";
import { serviceOptionsFa, timeOptionsFa } from "@/content/data";
import { cta } from "@/content/site";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  phone: string;
  service: string;
  time: string;
  message: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  service: "",
  time: "",
  message: "",
};

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 3) errors.name = "نام و نام خانوادگی را کامل وارد کنید.";
  if (!/^0?9\d{9}$/.test(values.phone.replace(/[\s-]/g, "")))
    errors.phone = "شماره موبایل معتبر وارد کنید (مثال: ۰۹۱۲۱۲۳۴۵۶۷).";
  if (!values.service) errors.service = "یک خدمت را انتخاب کنید.";
  if (!values.time) errors.time = "زمان ترجیحی را انتخاب کنید.";
  return errors;
}

/**
 * Submission handler placeholder.
 * Replace the body with a real integration (WhatsApp / email / CRM / backend).
 */
async function submitBooking(values: FormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1100));
  if (import.meta.env.DEV) console.info("[LUXORA] booking request", values);
}

const fieldClass =
  "min-h-12 w-full rounded-sm border bg-card px-4 text-sm font-light text-foreground transition-[border-color,box-shadow] duration-300 placeholder:text-muted-foreground focus:border-gold focus:outline-none";

export function BookingForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      await submitBooking(values);
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="booking" className="section-y scroll-mt-20 bg-ink text-ink-foreground">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            index="08"
            latin="START YOUR JOURNEY"
            titleFa="شروع مسیر شما"
            descriptionFa="فرم را تکمیل کنید؛ همکاران ما برای تعیین وقت مشاوره با شما تماس می‌گیرند."
            tone="dark"
          />
          <div className="mt-8">
            <WhatsAppButton variant="light" />
          </div>
          <p className="mt-8 max-w-sm text-xs font-light text-ink-muted">
            این فرم نمایشی است و اطلاعات آن در جایی ذخیره نمی‌شود.
          </p>
        </div>

        <div className="lg:col-span-7">
          {status === "success" ? (
            <div
              role="status"
              className="flex flex-col items-start gap-5 border border-accent/40 p-8 md:p-12"
            >
              <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-5" aria-hidden="true" />
              </span>
              <h3 className="fa-title text-ink-foreground">درخواست شما ثبت شد</h3>
              <p className="fa-body text-ink-muted">
                در نخستین ساعت کاری با شما تماس می‌گیریم تا زمان مشاوره را نهایی کنیم.
              </p>
              <Button variant="light" onClick={() => setStatus("idle")}>
                ثبت درخواست جدید
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-sm font-light">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(fieldClass, errors.name ? "border-destructive" : "border-input")}
                  placeholder="نام شما"
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-2 block text-sm font-light">
                  شماره تماس
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  dir="ltr"
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={cn(
                    fieldClass,
                    "text-start",
                    errors.phone ? "border-destructive" : "border-input",
                  )}
                  placeholder="09121234567"
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-xs text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="service" className="mb-2 block text-sm font-light">
                  خدمت موردنظر
                </label>
                <select
                  id="service"
                  name="service"
                  value={values.service}
                  onChange={(e) => update("service", e.target.value)}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  className={cn(
                    fieldClass,
                    errors.service ? "border-destructive" : "border-input",
                  )}
                >
                  <option value="">انتخاب کنید</option>
                  {serviceOptionsFa.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-2 text-xs text-destructive">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="time" className="mb-2 block text-sm font-light">
                  زمان ترجیحی
                </label>
                <select
                  id="time"
                  name="time"
                  value={values.time}
                  onChange={(e) => update("time", e.target.value)}
                  aria-invalid={Boolean(errors.time)}
                  aria-describedby={errors.time ? "time-error" : undefined}
                  className={cn(fieldClass, errors.time ? "border-destructive" : "border-input")}
                >
                  <option value="">انتخاب کنید</option>
                  {timeOptionsFa.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p id="time-error" className="mt-2 text-xs text-destructive">
                    {errors.time}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-light">
                  پیام (اختیاری)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={cn(fieldClass, "border-input py-3 leading-8")}
                  placeholder="اگر نکته‌ای هست که بهتر است پیش از مشاوره بدانیم، بنویسید."
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-destructive sm:col-span-2">
                  ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.
                </p>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="light"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      در حال ارسال…
                    </>
                  ) : (
                    <>
                      {cta.bookFa}
                      <ArrowLeft className="size-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

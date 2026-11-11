import { getSettings } from "@/lib/settings";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { PricingForm } from "@/components/admin/PricingForm";

export default async function AdminPricingPage() {
  const settings = await getSettings();

  return (
    <>
      <AdminPageHeader
        title="Pricing"
        description="Shown on the book page next to the purchase button."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <PricingForm initialPrices={settings.prices} />
      </div>
    </>
  );
}

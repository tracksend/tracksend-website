import { redirect } from "next/navigation";

export default function SolutionsPage() {
  // No top-level solutions page for now — redirect to the first subpage
  redirect("/solutions/product-managers");
}

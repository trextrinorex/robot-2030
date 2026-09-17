// Structured source database for ROBOT 2030
// Every major claim in the report should link to one or more of these entries.
// Source type: primary | secondary | company-claim | analysis | government | academic

export type SourceType =
  | "primary"
  | "secondary"
  | "company-claim"
  | "analysis"
  | "government"
  | "academic"
  | "filing";

export interface Source {
  id: string;
  title: string;
  organization: string;
  date: string; // YYYY-MM or YYYY-MM-DD
  url?: string;
  type: SourceType;
  supports: string[]; // short descriptions of what it supports
  notes?: string;
}

export const sources: Source[] = [
  {
    id: "agility-digit5-2026-09",
    title: "Agility Robotics Reveals Digit 5",
    organization: "Business Insider / Agility announcements",
    date: "2026-09",
    type: "secondary",
    supports: [
      "Digit 5 announcement",
      "Safety-focused design for human coexistence",
      "Payload increase to 50 lb",
      "Early access H1 2027 target",
    ],
    notes: "Secondary reporting of company announcement.",
  },
  {
    id: "agility-gxo-hours",
    title: "Digit commercial deployments and operating hours",
    organization: "Agility Robotics / GXO Logistics reporting",
    date: "2025-2026",
    type: "company-claim",
    supports: [
      ">65,000 operating hours across nine facilities",
      ">100,000 totes moved at GXO site",
      "Multi-year RaaS agreement",
    ],
    notes: "Company-reported metrics; independent audit limited.",
  },
  {
    id: "figure-bmw-deployment",
    title: "Figure robots at BMW Spartanburg",
    organization: "Figure AI / BMW Group / secondary analyses",
    date: "2025-2026",
    type: "company-claim",
    supports: [
      "Structured part-loading over multi-month period",
      "Support for production of >30,000 vehicles claimed",
      "~1,250+ operating hours reported in some analyses",
    ],
    notes: "Key early industrial proof point; still a controlled pilot environment.",
  },
  {
    id: "counterpoint-shipments-h1-2026",
    title: "Global humanoid shipment estimates H1 2026",
    organization: "Counterpoint Research (via secondary reports)",
    date: "2026",
    type: "analysis",
    supports: [
      ">22,000 global humanoid shipments in H1 2026",
      "Chinese firms (AgiBot, Unitree) leading volume",
    ],
    notes: "Market research estimates; methodology not fully public in secondary coverage.",
  },
  {
    id: "unitree-pricing",
    title: "Unitree G1 and related pricing",
    organization: "Unitree Robotics public listings / IPO-related disclosures",
    date: "2025-2026",
    type: "company-claim",
    supports: [
      "G1 base pricing in ~$13,500–$16,000 range",
      "Significant 2025 shipment volume claimed",
    ],
  },
  {
    id: "agility-sec-filing-2026",
    title: "Agility Robotics SEC / SPAC-related disclosures",
    organization: "Agility Robotics filings",
    date: "2026",
    type: "filing",
    supports: [
      "> $300M multi-year orders for Digit 5 (as of May 2026)",
      "Illustrative BOM and RaaS pricing discussion",
      "Operating loss and revenue figures for prior periods",
    ],
    notes: "Primary regulatory disclosure; forward-looking statements are illustrative.",
  },
  {
    id: "tesla-optimus-status-2026",
    title: "Tesla Optimus production and status comments",
    organization: "Tesla earnings calls / shareholder updates",
    date: "2025-2026",
    type: "company-claim",
    supports: [
      "Internal factory use and production ramp descriptions",
      "Repeated $20–30k volume cost target",
      "Acknowledgement of manufacturing difficulty",
    ],
    notes: "External commercial deployment evidence thinner than internal claims.",
  },
  {
    id: "boston-dynamics-atlas-product",
    title: "Electric Atlas product launch and commitments",
    organization: "Boston Dynamics / Hyundai",
    date: "2026",
    type: "company-claim",
    supports: [
      "Product version of electric Atlas",
      "Manufacturing start and committed 2026 deployments",
    ],
  },
];

export function getSource(id: string): Source | undefined {
  return sources.find((s) => s.id === id);
}

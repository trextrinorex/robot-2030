import type { ScenarioId } from "./scenarios";

export type EvidenceLevel = "documented" | "modeled" | "scenario" | "assumption";

export interface PeriodMetrics {
  fleetSize: number;
  costPerHour: number;
  interventionRate: number;
  structuredTaskShare: number;
  locomotion: number;
  manipulation: number;
  autonomy: number;
  safety: number;
  economics: number;
  status: string;
}

export interface TimelinePeriod {
  id: string;
  label: string;
  yearLabel: string;
  title: string;
  framing: string;
  body: string[];
  evidence: EvidenceLevel;
  metricsByScenario: Record<ScenarioId, PeriodMetrics>;
}

const base2025: PeriodMetrics = {
  fleetSize: 800,
  costPerHour: 28,
  interventionRate: 0.45,
  structuredTaskShare: 95,
  locomotion: 55,
  manipulation: 28,
  autonomy: 22,
  safety: 35,
  economics: 30,
  status: "Narrow commercial pilots · high supervision",
};

export const TIMELINE: TimelinePeriod[] = [
  {
    id: "2025",
    label: "2025 Baseline",
    yearLabel: "2025",
    title: "The machines that already work a little",
    framing: "By late 2025 the question is no longer whether a bipedal robot can move a tote. It is whether the economics and reliability justify a second, third, and hundredth unit.",
    body: [
      "Agility Digit units accumulate tens of thousands of operating hours under RaaS contracts. Figure systems run structured part-loading cells at BMW. Chinese manufacturers ship thousands of lower-cost platforms whose real-world duty cycles remain less transparent to Western observers. Boston Dynamics begins limited product deployment of the electric Atlas.",
      "What is proven: locomotion on flat industrial floors, repetitive material handling in mapped environments, and the commercial willingness of some logistics and automotive operators to pay for capability rather than hardware ownership.",
      "What is not proven: reliable dexterity across varied objects, long-horizon autonomy without frequent intervention, safe continuous coexistence with untrained humans, and a fully loaded cost per useful hour that clearly beats alternatives once supervision and downtime are included.",
    ],
    evidence: "documented",
    metricsByScenario: {
      slow: { ...base2025 },
      industrial: { ...base2025 },
      intelligence: { ...base2025 },
      constraint: { ...base2025 },
    },
  },
  {
    id: "2026",
    label: "2026",
    yearLabel: "2026",
    title: "More hours, still narrow tasks",
    framing: "Fleets grow. Task scope does not expand at the same rate. The industry learns how often humans still have to step in.",
    body: [
      "Digit 5 and successor platforms emphasize higher payload, faster recharge, and design features aimed at human coexistence. Figure continues multi-shift industrial work. Additional automotive and warehouse pilots appear. Public claims about unit cost and utilization remain ahead of independently audited fleet data.",
      "The critical operational metrics — mean time between interventions, percentage of shifts completed without human assist, energy per useful cycle, and true maintenance cost — begin to separate marketing from accounting. Early adopters discover that integration and process redesign often dominate hardware price.",
      "Chinese volume continues to lead unit counts. Western operators focus on reliability and supportability. The gap between demonstration video and 24/7 industrial duty cycle remains the central tension.",
    ],
    evidence: "documented",
    metricsByScenario: {
      slow: { fleetSize: 2200, costPerHour: 26, interventionRate: 0.38, structuredTaskShare: 93, locomotion: 60, manipulation: 32, autonomy: 28, safety: 40, economics: 35, status: "Slow fleet growth · intervention still high" },
      industrial: { fleetSize: 4500, costPerHour: 22, interventionRate: 0.28, structuredTaskShare: 90, locomotion: 65, manipulation: 38, autonomy: 35, safety: 48, economics: 48, status: "Industrial pilots expanding · cost trending down" },
      intelligence: { fleetSize: 3800, costPerHour: 23, interventionRate: 0.25, structuredTaskShare: 85, locomotion: 64, manipulation: 42, autonomy: 45, safety: 46, economics: 45, status: "Early generalization gains visible in pilots" },
      constraint: { fleetSize: 1800, costPerHour: 29, interventionRate: 0.42, structuredTaskShare: 94, locomotion: 58, manipulation: 30, autonomy: 26, safety: 38, economics: 28, status: "Supply & certification friction slowing rollout" },
    },
  },
  {
    id: "2027",
    label: "2027",
    yearLabel: "2027",
    title: "The utilization test",
    framing: "Orders grow only if robots stay useful for most of a shift. Utilization and intervention rate become the numbers that matter more than peak demo performance.",
    body: [
      "In the Industrial Acceleration path, automotive and large logistics operators expand from single cells to multi-robot zones. Data from thousands of hours begins to improve policies for the specific tasks being run. Cost per useful hour moves closer to fully loaded human labor in high-turnover roles.",
      "In the Slow Adoption path, reliability plateaus, insurance and certification remain expensive, and most potential buyers wait for clearer TCO evidence. Chinese platforms continue higher unit volume but face the same physical limits on dexterity and autonomy.",
      "The Intelligence Breakthrough path shows early signs that better world models and vision-language-action systems reduce the engineering cost of adding new SKUs or slight environment variations. The Unexpected Constraint path surfaces shortages or cost spikes in high-performance actuators, precision reducers, or certifiable battery systems.",
    ],
    evidence: "modeled",
    metricsByScenario: {
      slow: { fleetSize: 6000, costPerHour: 24, interventionRate: 0.32, structuredTaskShare: 91, locomotion: 68, manipulation: 38, autonomy: 34, safety: 48, economics: 42, status: "Niche growth · economics still marginal" },
      industrial: { fleetSize: 18000, costPerHour: 16, interventionRate: 0.14, structuredTaskShare: 82, locomotion: 78, manipulation: 52, autonomy: 55, safety: 62, economics: 68, status: "Multi-cell deployments · feedback loop starting" },
      intelligence: { fleetSize: 14000, costPerHour: 15, interventionRate: 0.11, structuredTaskShare: 70, locomotion: 76, manipulation: 62, autonomy: 68, safety: 60, economics: 70, status: "Broader task coverage · less custom engineering" },
      constraint: { fleetSize: 3500, costPerHour: 27, interventionRate: 0.35, structuredTaskShare: 92, locomotion: 62, manipulation: 34, autonomy: 30, safety: 42, economics: 32, status: "Hardware or insurance bottleneck binds" },
    },
  },
  {
    id: "2028",
    label: "2028",
    yearLabel: "2028",
    title: "Scale or stall",
    framing: "Either manufacturing and software compound, or the industry discovers a hard limit that demos never revealed.",
    body: [
      "Industrial Acceleration sees dedicated production lines for humanoid platforms and component suppliers racing to meet actuator and gearbox demand. Fleet sizes move from thousands to tens of thousands in logistics and automotive. Homes and general public spaces remain rare.",
      "Intelligence Breakthrough begins to push beyond pure industrial cells into light manufacturing, inspection, and some retail back-of-house work because the cost of teaching new tasks has fallen. Safety cases become more complex as environments grow less structured.",
      "Slow Adoption and Unexpected Constraint keep most Western commercial fleets in the low thousands. The technology continues to improve in labs and selected sites, but the economic threshold for broad replacement of human labor is not crossed for most tasks.",
    ],
    evidence: "scenario",
    metricsByScenario: {
      slow: { fleetSize: 12000, costPerHour: 21, interventionRate: 0.25, structuredTaskShare: 88, locomotion: 74, manipulation: 45, autonomy: 42, safety: 55, economics: 50, status: "Steady niche · no cascade" },
      industrial: { fleetSize: 75000, costPerHour: 11, interventionRate: 0.07, structuredTaskShare: 75, locomotion: 85, manipulation: 65, autonomy: 70, safety: 72, economics: 82, status: "Industrial scale-up underway" },
      intelligence: { fleetSize: 95000, costPerHour: 9, interventionRate: 0.05, structuredTaskShare: 55, locomotion: 86, manipulation: 78, autonomy: 82, safety: 70, economics: 85, status: "Task generality expanding rapidly" },
      constraint: { fleetSize: 7000, costPerHour: 25, interventionRate: 0.28, structuredTaskShare: 90, locomotion: 68, manipulation: 40, autonomy: 36, safety: 48, economics: 38, status: "Scale blocked by secondary constraint" },
    },
  },
  {
    id: "2029-30",
    label: "2029–2030",
    yearLabel: "2030",
    title: "Four different worlds",
    framing: "By 2030 the same starting technology has produced sharply different outcomes depending on which constraints loosened and which remained tight.",
    body: [
      "Slow Adoption: Humanoids are real tools in a limited set of high-wage logistics and manufacturing roles. Global commercial fleets remain modest. Traditional automation and human labor continue to dominate. The technology is impressive but not transformative at societal scale.",
      "Industrial Acceleration: Tens to low hundreds of thousands of units operate in factories and warehouses. Cost per useful hour undercuts human labor for a growing set of structured tasks. Labor markets in specific occupations feel pressure. Homes and streets are still mostly human.",
      "Intelligence Breakthrough: Broader capability has pulled humanoids into more environments. The limiting factors shift from 'can it do the task' toward safety certification, public acceptance, energy, and institutional adaptation. Economic and social effects are larger and more visible.",
      "Unexpected Constraint: Despite continued research progress, a bottleneck in actuators, energy storage, insurance, or regulation has kept deployment far below earlier optimistic trajectories. The gap between laboratory capability and scaled real-world impact remains wide.",
    ],
    evidence: "scenario",
    metricsByScenario: {
      slow: { fleetSize: 25000, costPerHour: 18, interventionRate: 0.18, structuredTaskShare: 84, locomotion: 80, manipulation: 52, autonomy: 50, safety: 62, economics: 58, status: "Useful niche · limited systemic impact" },
      industrial: { fleetSize: 220000, costPerHour: 7, interventionRate: 0.04, structuredTaskShare: 65, locomotion: 90, manipulation: 75, autonomy: 80, safety: 78, economics: 90, status: "Industrial infrastructure layer" },
      intelligence: { fleetSize: 480000, costPerHour: 5, interventionRate: 0.025, structuredTaskShare: 40, locomotion: 92, manipulation: 88, autonomy: 90, safety: 75, economics: 92, status: "Broad physical capability emerging" },
      constraint: { fleetSize: 12000, costPerHour: 22, interventionRate: 0.22, structuredTaskShare: 88, locomotion: 72, manipulation: 48, autonomy: 44, safety: 55, economics: 45, status: "Progress real · scale deferred" },
    },
  },
];

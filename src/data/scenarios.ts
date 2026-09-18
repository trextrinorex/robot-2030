export type ScenarioId = "slow" | "industrial" | "intelligence" | "constraint";

export interface Scenario {
  id: ScenarioId;
  name: string;
  short: string;
  color: string;
  description: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: "slow",
    name: "Slow Adoption",
    short: "Constrained Scale",
    color: "var(--accent-steel)",
    description:
      "Reliability, certification, maintenance cost, and limited task generality keep fleets small. Humanoids remain niche tools in high-wage, high-turnover settings through 2030.",
  },
  {
    id: "industrial",
    name: "Industrial Acceleration",
    short: "Factories First",
    color: "var(--accent-amber)",
    description:
      "Cost-per-useful-hour crosses thresholds in automotive and logistics. Data feedback loops improve industrial policies. Manufacturing scale follows orders. Homes stay largely out of scope.",
  },
  {
    id: "intelligence",
    name: "Intelligence Breakthrough",
    short: "Generalization Jump",
    color: "var(--accent-success)",
    description:
      "Embodied foundation models and world models dramatically improve generalization. Task engineering costs fall. Adoption broadens beyond the narrow industrial set earlier than pure hardware scaling would suggest.",
  },
  {
    id: "constraint",
    name: "Unexpected Constraint",
    short: "Bottleneck Bites",
    color: "var(--accent-danger)",
    description:
      "A secondary bottleneck — actuators, batteries, insurance, safety certification, or energy — prevents expected scaling even if demos continue to look impressive.",
  },
];

export const DEFAULT_SCENARIO: ScenarioId = "industrial";

"use client";

import type { PeriodMetrics } from "@/data/timeline";
import type { ScenarioId } from "@/data/scenarios";
import { SCENARIOS } from "@/data/scenarios";

function Bar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="mb-2.5">
      <div className="flex justify-between text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1">
        <span>{label}</span>
        <span className="font-mono">{value}</span>
      </div>
      <div className="h-1.5 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${Math.min(100, Math.max(0, value))}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}

export function StickyDashboard({
  metrics,
  periodLabel,
  scenarioId,
  onScenarioChange,
}: {
  metrics: PeriodMetrics;
  periodLabel: string;
  scenarioId: ScenarioId;
  onScenarioChange: (id: ScenarioId) => void;
}) {
  const scenario = SCENARIOS.find((s) => s.id === scenarioId)!;

  return (
    <aside className="sticky top-6 space-y-4">
      {/* Scenario switcher */}
      <div className="card p-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2">
          Active Scenario
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onScenarioChange(s.id)}
              className={`text-left px-2 py-1.5 rounded text-[11px] leading-tight transition-colors border ${
                s.id === scenarioId
                  ? "border-[var(--accent-amber)] bg-[var(--bg-elevated)] text-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
              }`}
            >
              {s.short}
            </button>
          ))}
        </div>
      </div>

      {/* Period + status */}
      <div className="card p-4">
        <div className="flex items-baseline justify-between mb-1">
          <span className="font-mono text-xs tracking-widest text-[var(--accent-amber)] uppercase">
            {periodLabel}
          </span>
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-snug mb-4">
          {metrics.status}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <div className="metric-value text-lg">
              {metrics.fleetSize >= 1000
                ? `${(metrics.fleetSize / 1000).toFixed(metrics.fleetSize >= 10000 ? 0 : 1)}k`
                : metrics.fleetSize}
            </div>
            <div className="metric-label">Est. fleet</div>
          </div>
          <div>
            <div className="metric-value text-lg">${metrics.costPerHour}</div>
            <div className="metric-label">Cost / useful hr</div>
          </div>
          <div>
            <div className="metric-value text-lg">
              {(metrics.interventionRate * 100).toFixed(0)}%
            </div>
            <div className="metric-label">Intervention / hr*</div>
          </div>
          <div>
            <div className="metric-value text-lg">
              {metrics.structuredTaskShare}%
            </div>
            <div className="metric-label">Narrow tasks</div>
          </div>
        </div>

        <div className="border-t border-[var(--border-subtle)] pt-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2">
            Capability profile
          </div>
          <Bar label="Locomotion" value={metrics.locomotion} color="var(--accent-steel)" />
          <Bar label="Manipulation" value={metrics.manipulation} color="var(--accent-amber)" />
          <Bar label="Autonomy" value={metrics.autonomy} color="var(--accent-success)" />
          <Bar label="Safety case" value={metrics.safety} color="var(--accent-steel)" />
          <Bar label="Unit economics" value={metrics.economics} color="var(--accent-amber)" />
        </div>
      </div>

      <div className="text-[10px] text-[var(--text-muted)] leading-relaxed px-1">
        <span className="label label-scenario mr-1">Scenario</span>
        Metrics are illustrative trajectories under the selected scenario, not forecasts.
        Intervention rate shown as interventions per robot-hour (simplified).
      </div>
    </aside>
  );
}

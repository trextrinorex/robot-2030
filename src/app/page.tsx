"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { TIMELINE } from "@/data/timeline";
import { SCENARIOS, DEFAULT_SCENARIO, type ScenarioId } from "@/data/scenarios";
import { StickyDashboard } from "@/components/StickyDashboard";
import { Expandable } from "@/components/Expandable";

export default function Home() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>(DEFAULT_SCENARIO);
  const [activePeriodId, setActivePeriodId] = useState(TIMELINE[0].id);
  const periodRefs = useRef<Record<string, HTMLElement | null>>({});

  const activePeriod = TIMELINE.find((p) => p.id === activePeriodId) ?? TIMELINE[0];
  const metrics = activePeriod.metricsByScenario[scenarioId];

  const setPeriodRef = useCallback((id: string) => (el: HTMLElement | null) => {
    periodRefs.current[id] = el;
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    TIMELINE.forEach((period) => {
      const el = periodRefs.current[period.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActivePeriodId(period.id);
          });
        },
        { rootMargin: "-20% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen">
      <header className="relative min-h-[100vh] flex flex-col justify-between border-b border-[var(--border-subtle)]">
        <div className="container pt-8 pb-4 flex items-center justify-between">
          <div className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">
            Scenario Investigation · 2026
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-[var(--text-secondary)]">
            <a href="#question" className="hover:text-[var(--text-primary)] transition-colors">The Question</a>
            <a href="#timeline" className="hover:text-[var(--text-primary)] transition-colors">Timeline</a>
            <a href="#mechanisms" className="hover:text-[var(--text-primary)] transition-colors">Mechanisms</a>
            <a href="#scenarios-detail" className="hover:text-[var(--text-primary)] transition-colors">Scenarios</a>
          </nav>
        </div>

        <div className="container flex-1 flex flex-col justify-center py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent-amber)] uppercase mb-6">
              Not a prediction · A structured scenario investigation
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-primary)] mb-6 leading-[1.05]">
              ROBOT 2030
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10">
              What happens if humanoid robots become economically useful,
              technically capable, and scalable enough to move from
              demonstrations into ordinary workplaces by around 2030?
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="label label-scenario">Four coherent futures</span>
              <span className="label label-documented">Evidence labeled</span>
              <span className="label label-assumption">Assumptions explicit</span>
            </div>
          </div>
        </div>

        <div className="container pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--border-subtle)] pt-8">
            <div>
              <div className="metric-value text-2xl">~65k+</div>
              <div className="metric-label mt-1">Documented Digit operating hours</div>
            </div>
            <div>
              <div className="metric-value text-2xl">$13.5k–$30/hr</div>
              <div className="metric-label mt-1">Observed / claimed cost range</div>
            </div>
            <div>
              <div className="metric-value text-2xl">Narrow</div>
              <div className="metric-label mt-1">Task scope of current deployments</div>
            </div>
            <div>
              <div className="metric-value text-2xl">4</div>
              <div className="metric-label mt-1">Scenarios examined side-by-side</div>
            </div>
          </div>
        </div>
      </header>

      <section id="question" className="section">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">01 · The Question</p>
            <h2>A machine on the floor</h2>
            <p>
              In a distribution center outside Atlanta, a bipedal robot named
              Digit moves plastic totes from one conveyor line to another. It
              does this for hours at a stretch. Human supervisors monitor the
              fleet. The task is narrow, the environment structured, the
              economics still being proven. This is not a laboratory demo. It
              is paid work under a multi-year robots-as-a-service agreement.
            </p>
            <p>
              <span className="label label-documented mr-2">Documented</span>
              Agility Robotics reports that Digit units have accumulated more
              than 65,000 operating hours across nine customer facilities and
              moved over 100,000 totes at a GXO site with high reported
              accuracy. Independent verification of every claim is limited, but
              the existence of ongoing commercial deployments is no longer in
              dispute.
            </p>
            <p>
              At BMW’s Spartanburg plant, Figure AI robots have performed
              structured part-loading tasks across shifts that supported the
              production of tens of thousands of vehicles. Chinese manufacturers
              have shipped humanoid units in the thousands. Tesla continues to
              iterate Optimus inside its own factories while targeting far lower
              unit costs at volume.
            </p>
            <p>
              The central question of this report is not whether any particular
              company will succeed. It is mechanical and economic:{" "}
              <strong>
                What would have to be true for humanoid-form robots to move from
                constrained pilots into ordinary industrial and logistical work
                at meaningful scale by the early 2030s — and what would follow
                if they did?
              </strong>
            </p>
            <p>
              This is a scenario investigation. It is not a forecast that
              humanoids will transform the economy by 2030. It maps the
              mechanisms that could produce rapid adoption, the evidence that
              currently exists, the bottlenecks that could stop the process, and
              several coherent alternative futures. Readers should leave with a
              clearer model of the system, not a sense of inevitability.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">How to read this</p>
            <h2 className="mt-0">Labels, side panel, and scenarios</h2>
            <p>
              Every substantive claim is tagged.{" "}
              <span className="label label-documented">Documented</span> means grounded in public deployments, filings, or credible reporting.{" "}
              <span className="label label-modeled">Modeled</span> means derived from explicit assumptions and available data.{" "}
              <span className="label label-scenario">Scenario</span> marks internally consistent future pathways.{" "}
              <span className="label label-assumption">Assumption</span> flags inputs that, if wrong, change the conclusion.
            </p>
            <p>
              On larger screens a sticky dashboard tracks the active period and the selected scenario.
              Switch scenarios at any time; the metrics and capability bars update to show how the same starting point can diverge.
              The numbers are illustrative trajectories, not forecasts.
            </p>
          </div>
        </div>
      </section>

      <section id="timeline" className="section">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">02 · Chronological Spine</p>
            <h2 className="mt-0">From pilots to possible scale</h2>
            <p className="text-[var(--text-secondary)]">
              The following periods are not a prediction of what will happen.
              They are a structured way to watch the same variables — fleet size, cost per useful hour, intervention rate, task breadth —
              evolve under four different causal stories. Scroll; the dashboard follows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 xl:gap-14">
            <div className="min-w-0 space-y-20">
              {TIMELINE.map((period) => (
                <article
                  key={period.id}
                  id={`period-${period.id}`}
                  ref={setPeriodRef(period.id)}
                  className="prose-report scroll-mt-24"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-xs tracking-widest text-[var(--accent-amber)] uppercase">{period.label}</span>
                    <span className={`label label-${period.evidence}`}>{period.evidence}</span>
                  </div>
                  <h2 className="mt-0 mb-3">{period.title}</h2>
                  <p className="text-lg text-[var(--text-primary)] border-l-2 border-[var(--border-strong)] pl-4 mb-6">{period.framing}</p>
                  {period.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </article>
              ))}
            </div>

            <div className="hidden lg:block">
              <StickyDashboard
                metrics={metrics}
                periodLabel={activePeriod.label}
                scenarioId={scenarioId}
                onScenarioChange={setScenarioId}
              />
            </div>
          </div>

          <div className="lg:hidden mt-12 card p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2">Scenario</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {SCENARIOS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setScenarioId(s.id)}
                  className={`px-3 py-1.5 rounded text-xs border transition-colors ${
                    s.id === scenarioId
                      ? "border-[var(--accent-amber)] bg-[var(--bg-elevated)] text-[var(--text-primary)]"
                      : "border-[var(--border-subtle)] text-[var(--text-muted)]"
                  }`}
                >
                  {s.short}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="metric-value text-base">
                  {metrics.fleetSize >= 1000 ? `${(metrics.fleetSize / 1000).toFixed(1)}k` : metrics.fleetSize}
                </div>
                <div className="metric-label">Est. fleet · {activePeriod.label}</div>
              </div>
              <div>
                <div className="metric-value text-base">${metrics.costPerHour}</div>
                <div className="metric-label">Cost / useful hr</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mechanisms" className="section border-t border-[var(--border-subtle)]">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">03 · Mechanisms</p>
            <h2>What has to go right — and what can stop it</h2>
            <p>Rapid adoption is not a single breakthrough. It is a chain. Each link can hold or fail.</p>

            <h3>The positive feedback loop</h3>
            <p>
              Lower hardware cost and higher reliability → more pilot hours → more real-world data →
              better control policies and foundation models → higher autonomy and lower intervention rates →
              better utilization → stronger unit economics → larger orders → manufacturing scale → further cost reduction.
            </p>
            <p>
              <span className="label label-assumption mr-2">Assumption</span>
              This loop only compounds if intervention rates fall fast enough that supervision cost does not erase the hardware advantage,
              and if manufacturing can actually scale the hard components (actuators, precision gearboxes, batteries, compute).
            </p>

            <Expandable title="Why cost per useful hour is the only number that matters">
              <p className="mb-3">
                Purchase price is a distraction. What determines adoption is the fully loaded cost of delivering a unit of useful physical work —
                capital recovery, energy, maintenance, downtime, supervision, integration, insurance, and the opportunity cost of space and process changes.
              </p>
              <p className="mb-0">
                Public data remains sparse. Secondary analyses have associated some industrial pilots with roughly $25 per robot-operating-hour.
                RaaS pricing aims to undercut fully loaded human labor in high-turnover logistics roles. Chinese platforms list at far lower hardware prices;
                capability, support, and longevity differ. A transparent model must let the reader vary utilization, intervention frequency, and wage benchmarks.
              </p>
            </Expandable>

            <Expandable title="The humanoid form-factor bet">
              <p className="mb-3">
                Factories, warehouses, and homes were built for human bodies. Stairs, door handles, shelves at arm height, tools with human-scale grips —
                the physical world is saturated with interfaces designed for people. A robot that can use those interfaces without redesigning the environment
                has a theoretical advantage over a specialized machine that requires custom fixtures.
              </p>
              <p className="mb-0">
                The counter-case is strong: specialized robots are often cheaper, faster, more reliable, and safer for any single narrow task.
                The humanoid bet is a bet on breadth and on the value of not rebuilding the world.
              </p>
            </Expandable>

            <h3>Hard bottlenecks</h3>
            <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] mb-6">
              <li><strong className="text-[var(--text-primary)]">Actuators & precision powertrain</strong> — high-torque, high-bandwidth, efficient actuators at acceptable cost and volume remain a binding constraint for many designs.</li>
              <li><strong className="text-[var(--text-primary)]">Energy & thermal</strong> — continuous industrial duty cycles stress batteries and heat rejection. Endurance and recharge logistics affect utilization.</li>
              <li><strong className="text-[var(--text-primary)]">Dexterous manipulation</strong> — reliable grasping and force control across varied objects and clutter is still far from human-level generality.</li>
              <li><strong className="text-[var(--text-primary)]">Safety certification & insurance</strong> — sharing space with untrained humans raises the bar for provable safety and insurable risk.</li>
              <li><strong className="text-[var(--text-primary)]">Long-horizon autonomy</strong> — reducing intervention rate without brittle task-specific engineering is the software half of the problem.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="scenarios-detail" className="section border-t border-[var(--border-subtle)]">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">04 · Alternative Futures</p>
            <h2>Four coherent scenarios</h2>
            <p>
              Rather than assign arbitrary probabilities, this report develops four internally consistent pathways.
              Each has its own causal chain. None is presented as the most likely. Use the dashboard switcher to see how metrics diverge.
            </p>

            <div className="grid gap-4 mt-8">
              {SCENARIOS.map((s) => (
                <div
                  key={s.id}
                  className={`card p-5 border-l-4 cursor-pointer transition-colors ${
                    scenarioId === s.id
                      ? "border-l-[var(--accent-amber)] bg-[var(--bg-elevated)]"
                      : "border-l-transparent hover:bg-[var(--bg-elevated)]"
                  }`}
                  onClick={() => setScenarioId(s.id)}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg mt-0 mb-0">{s.name}</h3>
                    {scenarioId === s.id && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-amber)]">Active</span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-0">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--border-subtle)]">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">05 · Falsifiability</p>
            <h2>What evidence would move the scenarios</h2>
            <p>A scenario investigation is only useful if it can be updated. The following observables would shift weight between the four pathways:</p>
            <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] mb-6">
              <li>Independently reported fleet utilization and intervention rates at multi-site scale (not single-cell pilots).</li>
              <li>Transparent total cost of ownership including supervision, maintenance, and integration — not just hardware list price.</li>
              <li>Demonstrated generalization: the same platform handling materially new tasks or environments with limited additional engineering.</li>
              <li>Actuator, battery, and reducer supply-chain capacity and pricing at tens-of-thousands unit volumes.</li>
              <li>Safety certification progress and insurance underwriting for human-shared industrial and semi-public spaces.</li>
              <li>Divergence or convergence between Chinese volume platforms and Western industrial reliability metrics.</li>
            </ul>
            <p>
              If intervention rates stay high and utilization stays low through 2027–28, Slow Adoption and Unexpected Constraint gain weight.
              If multi-cell industrial fleets show clear cost-per-useful-hour advantages and expanding task sets, Industrial Acceleration and Intelligence Breakthrough become harder to dismiss.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border-subtle)] py-16">
        <div className="container">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase mb-4">ROBOT 2030</p>
            <p className="text-[var(--text-secondary)] mb-6">
              A scenario investigation of humanoid machines in ordinary places.
              Original research and writing. Not affiliated with any robotics company.
              Claims are labeled; sources are tracked; assumptions are meant to be challenged.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              This is a living document. Metrics and narrative will be revised as new primary evidence appears.
              Interactive unit-economics calculator, robot schematic, and expanded source database are in active development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

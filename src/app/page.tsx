export default function Home() {
  return (
    <div className="min-h-screen">
      {/* COVER */}
      <header className="relative min-h-[100vh] flex flex-col justify-between border-b border-[var(--border-subtle)]">
        <div className="container pt-8 pb-4 flex items-center justify-between">
          <div className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">
            Scenario Investigation · 2026
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-[var(--text-secondary)]">
            <a href="#question" className="hover:text-[var(--text-primary)] transition-colors">The Question</a>
            <a href="#today" className="hover:text-[var(--text-primary)] transition-colors">World Today</a>
            <a href="#economics" className="hover:text-[var(--text-primary)] transition-colors">Economics</a>
            <a href="#scenarios" className="hover:text-[var(--text-primary)] transition-colors">Scenarios</a>
          </nav>
        </div>

        <div className="container flex-1 flex flex-col justify-center py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent-amber)] uppercase mb-6">
              Not a prediction · A structured scenario
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
              <span className="label label-scenario">Scenario Analysis</span>
              <span className="label label-documented">Evidence-Based</span>
              <span className="label label-assumption">Assumptions Explicit</span>
            </div>
          </div>
        </div>

        <div className="container pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--border-subtle)] pt-8">
            <div>
              <div className="metric-value text-2xl">~65k+</div>
              <div className="metric-label mt-1">Documented operating hours (Digit fleets)</div>
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
              <div className="metric-label mt-1">Coherent future scenarios examined</div>
            </div>
          </div>
        </div>
      </header>

      {/* THE QUESTION */}
      <section id="question" className="section">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">
              01 · The Question
            </p>
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

      {/* WORLD TODAY */}
      <section id="today" className="section">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">
              02 · The World Today
            </p>
            <h2>Capability reality check</h2>
            <p>
              Public demonstrations still dominate the conversation. A robot
              folds a shirt, opens a door, or walks across uneven terrain under
              carefully controlled conditions. These clips are useful for
              fundraising and recruiting. They are poor evidence of economic
              viability.
            </p>
            <p>
              What matters more are sustained operating hours, intervention
              rates, mean time between failures, cost per useful hour, and the
              breadth of tasks a single platform can perform without extensive
              re-engineering. On those metrics the picture is more modest.
            </p>

            <h3>What is working in constrained settings</h3>
            <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] mb-6">
              <li>
                <strong className="text-[var(--text-primary)]">Locomotion on flat industrial floors</strong> —
                bipedal and wheeled-bipedal platforms can navigate structured
                warehouses and factory aisles at useful speeds.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">Repetitive material handling</strong> —
                tote transfer, specific part positioning, and machine tending
                in well-mapped cells.
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">RaaS commercial models</strong> —
                customers can pay for capability without owning hardware and
                maintenance risk.
              </li>
            </ul>

            <h3>What remains difficult</h3>
            <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] mb-6">
              <li>Reliable dexterous manipulation across varied objects and force regimes.</li>
              <li>Long-horizon autonomy without frequent human intervention.</li>
              <li>Generalization to new environments without extensive task-specific engineering or teleoperation data.</li>
              <li>Safe, continuous operation in the presence of untrained humans.</li>
              <li>Battery endurance and thermal management under continuous load.</li>
              <li>Total cost of ownership that clearly beats human labor once supervision, downtime, and integration are included.</li>
            </ul>

            <div className="card p-6 my-8">
              <p className="text-sm text-[var(--text-muted)] mb-3 font-mono uppercase tracking-wider">
                Confidence framing
              </p>
              <p className="text-[var(--text-secondary)] mb-0">
                <span className="label label-documented mr-2">High confidence</span>
                Commercial deployments of humanoid or humanoid-adjacent robots
                for narrow logistics and manufacturing tasks exist in 2026.
                <br /><br />
                <span className="label label-modeled mr-2">Medium confidence</span>
                These deployments are still limited in task variety, geographic
                spread, and fleet size relative to traditional industrial robots.
                <br /><br />
                <span className="label label-speculative mr-2">Low / Speculative</span>
                Claims of near-term general-purpose capability or rapid
                consumer-home deployment remain weakly supported by independent evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HUMANOID */}
      <section id="why" className="section">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">
              03 · Why Humanoid?
            </p>
            <h2>Form factor as a bet on existing infrastructure</h2>
            <p>
              Factories, warehouses, offices, and homes were built for human
              bodies. Stairs, door handles, shelves at arm height, tools with
              grips designed for hands — the physical world is saturated with
              human-scale interfaces. A robot that can use those interfaces
              without redesigning the environment has a theoretical advantage
              over a specialized machine that requires custom fixtures.
            </p>
            <p>
              That is the core argument for the humanoid form. It is also the
              argument most vulnerable to the counter-case: specialized robots
              are often cheaper, faster, more reliable, and safer for any single
              narrow task.
            </p>
            <p>
              The humanoid bet is therefore a bet on breadth and on the value
              of not having to rebuild the world. Whether that bet pays depends
              on how quickly general-purpose manipulation and locomotion improve
              relative to the continued refinement of task-specific automation.
            </p>
          </div>
        </div>
      </section>

      {/* ECONOMICS */}
      <section id="economics" className="section">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">
              04 · Economics
            </p>
            <h2>Cost per useful hour is the only number that matters</h2>
            <p>
              Purchase price is a distraction. What determines adoption is the
              fully loaded cost of delivering a unit of useful physical work —
              including capital recovery, energy, maintenance, downtime,
              supervision, integration, insurance, and the opportunity cost of
              space and process changes.
            </p>
            <p>
              Public data remains sparse. Figure has been associated in
              secondary analyses with roughly $25 per robot-operating-hour in
              the BMW context. Agility’s filings and statements point toward
              RaaS pricing that aims to undercut fully loaded human labor costs
              in high-turnover logistics roles. Chinese platforms list at far
              lower hardware prices, though capability, support, and longevity
              differ.
            </p>
            <p>
              A transparent unit-economics model must let the reader vary:
              acquisition or RaaS cost, utilization rate, intervention
              frequency, energy, maintenance reserve, useful life, and the
              human wage + burden rate being compared. Every input will be
              labeled with its source or explicit assumption. The output is a
              scenario tool, not a prediction.
            </p>
            <div className="card p-6 mt-8 border-l-4 border-[var(--accent-amber)]">
              <p className="font-mono text-xs text-[var(--accent-amber)] uppercase tracking-wider mb-2">
                Assumption to watch
              </p>
              <p className="text-[var(--text-secondary)] mb-0">
                Many optimistic narratives implicitly assume utilization rates
                and intervention rates that have not yet been demonstrated at
                fleet scale in mixed human-robot environments. If those rates
                remain poor, even low hardware costs fail to produce attractive
                economics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section id="scenarios" className="section">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">
              05 · Alternative Futures
            </p>
            <h2>Four coherent scenarios</h2>
            <p>
              Rather than assign arbitrary probabilities, this report develops
              four internally consistent pathways. Each has its own causal
              chain. None is presented as the most likely.
            </p>

            <div className="grid gap-4 mt-8">
              <div className="card p-5">
                <h3 className="text-lg mt-0 mb-2">Slow Adoption</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-0">
                  Reliability, certification, maintenance cost, and limited
                  task generality keep fleets small. Humanoids remain niche
                  tools in high-wage, high-turnover settings through 2030.
                  Traditional automation continues to absorb most structured work.
                </p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg mt-0 mb-2">Industrial Acceleration</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-0">
                  Cost-per-useful-hour crosses thresholds in automotive and
                  logistics. Data feedback loops improve policies for
                  industrial tasks. Manufacturing scale follows orders.
                  Homes stay largely out of scope.
                </p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg mt-0 mb-2">Intelligence Breakthrough</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-0">
                  Embodied foundation models and world models dramatically
                  improve generalization. Task engineering costs fall. Adoption
                  broadens beyond the narrow industrial set earlier than pure
                  hardware scaling would suggest.
                </p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg mt-0 mb-2">Unexpected Constraint</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-0">
                  A secondary bottleneck — actuators, batteries, insurance,
                  safety incidents, supply-chain chokepoints, or energy —
                  prevents the scaling that demos appear to promise. Progress
                  continues but the 2030 numbers stay far below the most
                  optimistic public claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section">
        <div className="container">
          <div className="container-narrow prose-report mx-auto">
            <p className="font-mono text-xs tracking-widest text-[var(--accent-steel)] uppercase mb-4">
              Methodology & Sources
            </p>
            <h2>How this report is built</h2>
            <p>
              Every major factual claim is tied to a source or explicitly
              labeled as modeled or scenario. Company announcements are treated
              as claims, not verified capabilities, unless independent evidence
              exists. Historical industrial-robot adoption provides context but
              is not assumed to dictate humanoid trajectories. Uncertainty is
              stated rather than hidden behind precise-looking numbers.
            </p>
            <p>
              A full source database, assumption tracker, bottleneck map, and
              interactive unit-economics calculator are part of the complete
              experience. This is a living research artifact, not a static essay.
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-8">
              Research current as of September 2026. The landscape moves quickly;
              claims should be re-checked against primary sources.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-[var(--border-subtle)]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-[var(--text-muted)]">
            <div>
              <div className="font-semibold text-[var(--text-secondary)] mb-1">ROBOT 2030</div>
              <div>A scenario investigation · Not a prediction</div>
            </div>
            <div className="font-mono text-xs">
              Built as an original research publication.
              <br />
              Independent of any single company’s roadmap.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

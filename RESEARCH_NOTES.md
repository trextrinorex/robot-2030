# ROBOT 2030 — Internal Research & Design Notes

## 1. AI 2027 Analysis (Principles Extracted, Not Copied)

**What makes AI 2027 compelling:**
- Concrete, year-by-year (or period-by-period) narrative that feels like a documentary unfolding.
- Explicit fictional company names (OpenBrain, DeepCent) to avoid legal/PR issues while modeling real dynamics.
- Heavy use of footnotes and expandable technical explanations for progressive disclosure.
- Clear separation of near-term (more grounded) vs later (higher uncertainty).
- Metrics dashboards that appear at key moments.
- Dual endings / alternative branches.
- Author credibility + methodology transparency + invitation to critique.
- Clean, readable typography; restrained visual system; focus on text + selective diagrams.
- Scroll-based reading experience with sticky elements and section markers.
- Source-heavy; claims are often quantified even when speculative.

**What we will deliberately do differently:**
- Focus on physical embodiment and industrial/economic systems rather than pure software intelligence race.
- Stronger emphasis on hardware bottlenecks, manufacturing scale, unit economics, and physical reliability.
- Interactive tools (unit economics calculator, robot schematic, bottleneck map, scenario switcher) rather than primarily linear narrative.
- Explicit DOCUMENTED / MODELED / SCENARIO / ASSUMPTION labels on every major claim.
- Multiple coherent scenarios of equal weight rather than one primary + alternative ending.
- Industrial/engineering visual language (schematics, engineering drawings, sensor grids, factory floors) instead of abstract AI aesthetics.
- Original title, structure, and visual identity.

## 2. Current State Snapshot (as of ~Sept 2026 research)

### Documented Commercial Activity
- Agility Robotics Digit: Multi-year RaaS with GXO; >65,000 operating hours across 9 facilities; >100,000 totes moved at one site with ~98% accuracy claims. Digit 5 announced Sept 2026 with higher payload (50 lb), faster charging, and human-coexistence safety features. Early access targeted H1 2027.
- Figure AI: Figure 02 at BMW Spartanburg supported production of >30,000 X3 vehicles over ~10 months / 1,250+ hours. Transition to Figure 03; paid pilot economics reported around $25/robot-operating-hour in some analyses.
- Boston Dynamics Electric Atlas: Product version launched; manufacturing underway; committed deployments to Hyundai and Google DeepMind for 2026.
- Apptronik Apollo: Pilots with Mercedes-Benz, GXO, others.
- Chinese volume leaders: AgiBot and Unitree shipping thousands of units in 2025–H1 2026 (Counterpoint estimates >22k global shipments H1 2026, Chinese firms dominant). UBTECH opening higher-capacity factories (claims of 10k/year class).
- Tesla Optimus: Internal use and production ramp claims; external commercial evidence thinner; cost target repeatedly stated $20–30k at volume; manufacturing described as extremely difficult.

### Cost Reality
- Entry Chinese platforms (Unitree G1 etc.): ~$13.5k–$25k list.
- Industrial Western: Often RaaS ($8.5k/month illustrative for Digit 5, or $10–30/hr operating). BOM for some still high ($150k+ range before scale).
- Target long-run hardware cost for capable units frequently discussed in $20–50k range under optimistic supply-chain assumptions.
- TCO includes maintenance, downtime, supervision, integration, energy, insurance — often underestimated.

### Capability Reality Check
- Strongest evidence is for narrow, structured tasks (tote transfer, specific part loading) in controlled industrial environments.
- Generalization across environments, long-horizon autonomy, reliable dexterity in unstructured settings, and robust human coexistence remain open challenges.
- Battery endurance, thermal management of actuators, mean time between failures, and intervention rates are critical operational metrics still maturing.
- Teleoperation and heavy human supervision common in early deployments.

## 3. Core Causal Model

Lower hardware cost + improved reliability → more pilot hours → more real-world data → better policies / foundation models → higher autonomy / lower intervention → better utilization → stronger unit economics → larger orders → manufacturing scale → further cost reduction.

Break points: actuator supply, battery energy density/safety, safety certification, insurance underwriting, regulatory clarity, data quality for physical tasks, software generalization.

## 4. Four Scenarios (Internally Coherent)

1. **Slow Adoption / Constrained Scale**: Reliability, maintenance costs, and safety certification keep utilization low; economics only work in high-wage, high-turnover niches; Chinese volume stays higher but capability gap persists; Western deployment stays in low thousands through 2030.

2. **Industrial Acceleration**: Factories and warehouses (especially automotive, logistics) adopt rapidly once cost-per-useful-hour crosses human labor thresholds in specific tasks. Feedback loop of data + scale kicks in for industrial form factors. Homes remain distant.

3. **Intelligence Breakthrough**: Embodied foundation models (VLA-style + world models) enable rapid generalization. Robots become useful across many more tasks with less task-specific engineering. Adoption accelerates beyond pure industrial.

4. **Unexpected Constraint**: A secondary bottleneck (actuators, precision gearboxes, high-quality batteries at scale, liability/insurance, cybersecurity incidents, or energy infrastructure) prevents the expected scaling even if demos look good.

## 5. Visual & Interaction Principles

- Palette: Deep slate / charcoal backgrounds, off-white text, steel-blue and amber accents, muted industrial greens. Avoid neon, glassmorphism, generic AI gradients.
- Typography: Geist / system sans for body; mono for metrics, code, technical labels.
- Labels: Persistent visual language for DOCUMENTED (solid), MODELED (dashed), SCENARIO (distinct color/treatment), ASSUMPTION (callout).
- Components: Evidence cards, source cards, metric cards with confidence, interactive schematic, unit-econ calculator with explicit assumptions, horizontal/vertical timeline with real vs scenario distinction, bottleneck map, assumption tracker.
- Motion: Purposeful only (timeline progress, diagram reveal, number counters). Respect prefers-reduced-motion.

## 6. Title Decision

Working title: **ROBOT 2030**
Subtitle: A Scenario Investigation of Humanoid Machines in Ordinary Places

## 7. Next Implementation Steps

- Build content data layer (sources, timeline events, scenarios, metrics).
- Implement core layout + cover + navigation.
- Write evidence-backed chapters in order of narrative strength.
- Add interactives last once content is solid.
- Continuous audit of claims vs sources.

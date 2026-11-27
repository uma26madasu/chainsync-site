import { useState } from "react";
import {
  BrainCircuit,
  Cable,
  Network,
  Radio,
  UsersRound,
  FileCheck2,
} from "lucide-react";
const layers = [
  {
    name: "Connect",
    title: "Keep your existing monitoring.",
    text: "SCADA, BMS, and monitoring APIs provide agreed incident events through an authorized integration.",
    Icon: Cable,
  },
  {
    name: "Understand",
    title: "Build context around the alert.",
    text: "17 specialized agents are organized around analysis, incident context, coordination, and supporting documentation.",
    Icon: BrainCircuit,
  },
  {
    name: "Coordinate",
    title: "Give the response a shared structure.",
    text: "Bring personnel, ownership, scheduling, and incident state into an agreed workflow with human oversight.",
    Icon: UsersRound,
  },
];
export default function HeroArchitecture() {
  const [active, setActive] = useState(0);
  const layer = layers[active];
  return (
    <figure className="cs-schematic">
      <figcaption>
        <span className="cs-schematic-label">System architecture</span>
        <span className="cs-schematic-caption">Illustrative workflow</span>
      </figcaption>
      <div className="cs-schematic-canvas">
        <div className="cs-source-nodes">
          <div>
            <Radio size={19} />
            <span>SCADA</span>
          </div>
          <div>
            <Network size={19} />
            <span>BMS</span>
          </div>
          <div>
            <Cable size={19} />
            <span>Monitoring APIs</span>
          </div>
        </div>
        <div
          className={`cs-schematic-route ${active === 0 ? "is-selected" : ""}`}
          aria-hidden="true"
        >
          <span />
        </div>
        <div className={`cs-core-node ${active === 1 ? "is-selected" : ""}`}>
          <div className="cs-core-symbol">
            <img src="/logo-icon.png" alt="" width="42" height="46" />
          </div>
          <div>
            <strong>ChainSync</strong>
            <span>Incident coordination layer</span>
          </div>
          <BrainCircuit
            size={28}
            className="cs-core-brain"
            aria-hidden="true"
          />
        </div>
        <div
          className={`cs-schematic-route ${active === 2 ? "is-selected" : ""}`}
          aria-hidden="true"
        >
          <span />
        </div>
        <div className="cs-output-nodes">
          <div>
            <UsersRound size={20} />
            <span>Response teams</span>
          </div>
          <div>
            <FileCheck2 size={20} />
            <span>Incident records</span>
          </div>
        </div>
      </div>
      <div
        className="cs-layer-controls"
        role="group"
        aria-label="Explore the architecture layers"
      >
        {layers.map(({ name, Icon }, i) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === i}
            aria-controls="architecture-detail"
            onClick={() => setActive(i)}
          >
            <Icon size={16} aria-hidden="true" />
            {name}
          </button>
        ))}
      </div>
      <div
        className="cs-schematic-detail"
        id="architecture-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <h2>{layer.title}</h2>
        <p>{layer.text}</p>
      </div>
      <p className="cs-schematic-disclaimer">
        Architecture illustration. No live incident data or product interface.
      </p>
    </figure>
  );
}

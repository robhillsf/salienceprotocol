import React, { useState } from 'react';
import { Layers, Share2, Database, TrendingUp, Lock, Zap } from 'lucide-react';

const SalienceProtocolDoc = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: "The Problem",
      icon: Share2,
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Everyone talks about AI systems "sharing memories," but there's no actual format or protocol to do it. 
            Current approaches fail because:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Vector coordinates are meaningless across different organizations' databases</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Shared memories lose context, perspective, and temporal structure</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>No way to negotiate compatibility before transfer</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Memories are flat—missing the layered, evolving nature of human memory</span>
            </li>
          </ul>
        </div>
      )
    },
    solution: {
      title: "The Solution",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600">Salience Protocol</h3>
          <p className="text-lg leading-relaxed">
            A rich media container format and negotiation protocol that preserves the full experiential 
            structure of memories across AI systems.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold mb-3">Key Innovation: Salience as Universal Metric</h4>
            <p className="leading-relaxed">
              Instead of trying to translate vector coordinates, we use <strong>salience</strong>—what matters 
              in a memory—as the common language. Human memories aren't overwritten; they're layered with newer, 
              more salient experiences on top. We replicate this structure.
            </p>
          </div>
        </div>
      )
    },
    format: {
      title: "The .slnc Format",
      icon: Database,
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed mb-4">
            The <code className="bg-gray-100 px-2 py-1 rounded">.slnc</code> (Salience Container) file format:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm space-y-2">
            <div className="text-purple-700">📁 .slnc Container</div>
            <div className="ml-4">
              <div className="text-blue-600">├── Salience Stratigraphy</div>
              <div className="ml-8 text-gray-600">
                <div>├── Layer manifest [L0...Ln with timestamps]</div>
                <div>├── Salience trajectory curve</div>
                <div>├── Peak salience markers</div>
                <div>└── Occlusion events (what overshadowed this)</div>
              </div>
              <div className="text-blue-600 mt-2">├── Multimodal Sensory Tracks</div>
              <div className="ml-8 text-gray-600">
                <div>├── Visual stream(s) - multiple POVs</div>
                <div>├── Audio stream(s) - spatial</div>
                <div>├── Haptic data</div>
                <div>├── Affect/emotional timeline</div>
                <div>└── Future: olfactory markers</div>
              </div>
              <div className="text-blue-600 mt-2">├── Semantic Layer</div>
              <div className="ml-8 text-gray-600">
                <div>├── Entity graph</div>
                <div>├── Narrative structure</div>
                <div>└── Causal/temporal relationships</div>
              </div>
              <div className="text-blue-600 mt-2">└── Metadata + Signatures</div>
              <div className="ml-8 text-gray-600">
                <div>├── Source organization</div>
                <div>├── Cryptographic provenance</div>
                <div>└── Access controls</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    layers: {
      title: "Salience Layers",
      icon: Layers,
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed mb-4">
            Like MRI slices, memories exist in layers. Navigate through salience thresholds to access 
            different temporal depths:
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <strong>Layer 5 (Newest):</strong>
                <span className="ml-2 text-sm bg-red-100 px-2 py-1 rounded">Salience: 0.95</span>
              </div>
              <p className="text-sm ml-5">"Bob promoted to manager" — Dominates current recall</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                <strong>Layer 4:</strong>
                <span className="ml-2 text-sm bg-orange-100 px-2 py-1 rounded">Salience: 0.67</span>
              </div>
              <p className="text-sm ml-5">"Bob led successful project" — Accessible with effort</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <strong>Layer 3:</strong>
                <span className="ml-2 text-sm bg-yellow-100 px-2 py-1 rounded">Salience: 0.34</span>
              </div>
              <p className="text-sm ml-5">"Bob gave presentation" — Mostly occluded</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <strong>Layer 2:</strong>
                <span className="ml-2 text-sm bg-green-100 px-2 py-1 rounded">Salience: 0.12</span>
              </div>
              <p className="text-sm ml-5">"Bob made coffee that morning" — Rarely accessed</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <strong>Layer 1 (Oldest):</strong>
                <span className="ml-2 text-sm bg-blue-100 px-2 py-1 rounded">Salience: 0.08</span>
              </div>
              <p className="text-sm ml-5">"Bob joined company" — Nearly invisible but still exists</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm leading-relaxed">
              <strong>Key insight:</strong> Nothing is deleted. Adjust your salience threshold slider 
              (like scrolling through MRI slices) to access different temporal depths. Lower thresholds 
              reveal ancient, buried memories. Higher thresholds show only the most vivid, recent experiences.
            </p>
          </div>
        </div>
      )
    },
    protocol: {
      title: "Negotiation Protocol",
      icon: TrendingUp,
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed mb-4">
            Three-phase handshake before memory transfer:
          </p>
          <div className="space-y-4">
            <div className="border-2 border-blue-300 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Phase 1: Salience Fingerprint</h4>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <p className="font-mono text-xs mb-2">Sender → Receiver:</p>
                <p>"I have a memory with:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Peak salience: 0.91 (2024-03-22)</li>
                  <li>• Current salience: 0.34 (decayed)</li>
                  <li>• Entities: [Alice, Bob, coffee]</li>
                  <li>• Modalities: [visual, audio, haptic]</li>
                  <li>• 5 temporal layers</li>
                </ul>
              </div>
            </div>
            
            <div className="border-2 border-green-300 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">Phase 2: Contextual Fit Analysis</h4>
              <div className="bg-green-50 p-3 rounded text-sm">
                <p className="font-mono text-xs mb-2">Receiver → Sender:</p>
                <p>"In my database, this would:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Align with [workplace_tension_cluster]</li>
                  <li>• Projected salience: 0.67 initially</li>
                  <li>• Integrate into Layer 3 (not dominant)</li>
                  <li>• Compatibility score: 0.88</li>
                  <li>• <strong>→ ACCEPT with layering"</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="border-2 border-purple-300 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 mb-2">Phase 3: Token-Wrapped Transfer</h4>
              <div className="bg-purple-50 p-3 rounded text-sm">
                <p className="font-mono text-xs mb-2">Sender → Receiver:</p>
                <p>Sends full .slnc file in verified chunks:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Cryptographically signed</li>
                  <li>• Streaming validation</li>
                  <li>• Partial acceptance possible</li>
                  <li>• Micropayments per token</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    marketplace: {
      title: "Tokenized Markets",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Decentralized memory exchange with cryptographic provenance:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Personal Archives</h4>
              <p className="text-sm">Share life experiences with family. Navigate their salience layers to see what mattered most at different times.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Training Data</h4>
              <p className="text-sm">Purchase high-salience experiential memories for AI training. Quality measured by salience metrics.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Evidence/Witness</h4>
              <p className="text-sm">Multi-perspectival memories of events. Compare salience profiles to understand different viewpoints.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Creative Markets</h4>
              <p className="text-sm">Artists sell dreams, emotions, experiences as raw creative material. Tokenized inspiration.</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold mb-2">Why Tokenization Works</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ <strong>Provenance:</strong> Cryptographic signature traces memory to source</li>
              <li>✓ <strong>Quality metric:</strong> High salience = more valuable</li>
              <li>✓ <strong>Micropayments:</strong> Pay per salience query or navigation</li>
              <li>✓ <strong>Privacy control:</strong> Token-gated access to sensitive layers</li>
              <li>✓ <strong>Verification:</strong> Stake reputation on memory authenticity</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  const SectionIcon = sections[activeSection].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Salience Protocol
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            A format and protocol for sharing memories between AI systems
          </p>
          <p className="text-sm text-gray-500 italic">
            "Everyone talks about sharing memories. This is how we actually do it."
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.entries(sections).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                {section.title}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
            <SectionIcon size={32} className="text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              {sections[activeSection].title}
            </h2>
          </div>
          {sections[activeSection].content}
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Looking for Collaborators</h3>
          <p className="text-lg mb-4 max-w-3xl mx-auto">
            This is a conceptual framework ready for implementation. Seeking technical co-founders, 
            protocol designers, or researchers interested in building the infrastructure for genuine 
            AI memory exchange.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Ideal backgrounds:</strong> Protocol design, vector databases, distributed systems, 
            neuroscience-inspired AI, blockchain/tokenization</p>
            <p className="mt-4 text-blue-100">
              Contact: [Your preferred contact method here]
            </p>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg text-sm text-gray-700">
          <h4 className="font-semibold mb-2">Technical Implementation Notes:</h4>
          <ul className="space-y-1 ml-4">
            <li>• Can be built with existing technology: Vector DBs, blockchain, IPFS, multimodal models</li>
            <li>• Only missing piece: .slnc format specification and SEP protocol RFC</li>
            <li>• Salience maps already generated by attention mechanisms in transformers</li>
            <li>• Compatible with current AI memory architectures (LangChain, LlamaIndex, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalienceProtocolDoc;
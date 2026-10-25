/**
 * Central portfolio data — generated from Prasad Gawas's CV, research publications,
 * and engineering documentation.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const base = import.meta.env.BASE_URL.replace(/\/$/, '') + '/';

export const profile = {
  fullName: 'Prasad S. Gawas',
  displayName: 'Prasad Gawas',
  firstName: 'PRASAD',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A GAWAS ORIGINAL',
  role: 'PCBA Test Engineer',
  tagline: ['PCBA Test Engineer @ Siemens', 'Hardware & PCBA Test Validation', 'Industrial Automation & Robotics'],
  intro:
    'PCBA Test Engineer (On-Role) at Siemens Verna and Electronics & Communication Engineer (Honours in IoT). Leading automated board-level testing, In-Circuit Testing (ICT), Flying Probe diagnostics, and autonomous robotic systems with Python, C++, Edge ML, and KiCad.',
  location: 'Sanquelim, Goa, India',
  email: 'prasadgawas501@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0',
    github: 'https://github.com/BreadBoard-Dev',
  },
  resumePdf: `${base}assets/Prasad_Gawas_Resume.pdf`,
  portrait: {
    src: `${base}assets/portrait-720.webp`,
    srcSet: `${base}assets/portrait-420.webp 420w, ${base}assets/portrait-720.webp 720w, ${base}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Prasad Gawas',
  },
  interests: ['Robotics & Mechatronics', 'Test Automation & Hardware Validation', 'Embedded Systems & Edge AI'],
};

export const education = [
  {
    school: 'Agnel Institute of Technology And Design',
    place: 'Assagao, Goa',
    degree: 'Bachelor in Engineering — Electronics & Communication Engineering',
    period: '2021 – 2025',
    score: 'Honours in IoT',
  },
  {
    school: 'Shri Bhumika Higher Secondary School',
    place: 'Parye, Goa',
    degree: 'HSSC — Science',
    period: '2019 – 2021',
    score: 'Goa Board',
  },
  {
    school: 'Shri Ganesh Vidhyalaya',
    place: 'Harvalem, Goa',
    degree: 'SSC — Secondary School Certificate',
    period: 'Completed 2019',
    score: 'Goa Board',
  },
];

export const experience = [
  {
    company: 'Siemens (Technology Dept)',
    role: 'PCBA Test Engineer (On-Role)',
    place: 'Verna, Goa, India',
    period: 'February 2026 – Present',
    points: [
      'Promoted to full On-Role PCBA Test Engineer leading board-level testing, diagnostic strategies, and test coverage planning across SMT and THT production lines.',
      'Directing In-Circuit Testing (ICT), Flying Probe testing workflows, and JTAG / Boundary Scan configurations for high-reliability manufacturing.',
      'Integrating automated test sequencing, live machine telemetry, and machine learning defect inspection into standard operating procedures.',
      'Ensuring zero-defect shipment standards through automated root-cause analysis, signal tracing, and net-level fault isolation.',
    ],
  },
  {
    company: 'Siemens (Technology Dept)',
    role: 'Apprentice',
    place: 'Verna, Goa, India',
    period: 'September 2025 – February 2026',
    points: [
      'Developed software to evaluate cycle time and track downtime for DEK SMT stencil printer.',
      'Created Bulk Program Generators for Ersa Three/20 and Seho Reflow machines with precise parameter mapping (heating, cooling, convection, and CBS/Park positions).',
      'Implemented Python-based analytics tool to report daily operational downtime of production lines.',
      'Refined Live Parameters Comparison tool to guarantee zero parameter drift in Seho reflow and Wave soldering machines.',
      'Engineered an Alert Generation system indicating missing/corrupted programs and machine anomalies against daily schedules.',
      'Deployed ETHON.AI machine learning models on THT production lines to accelerate PCBA visual inspection.',
    ],
  },
  {
    company: 'Siemens (Technology Dept)',
    role: 'Intern',
    place: 'Verna, Goa, India',
    period: 'July 2024 – August 2024',
    points: [
      'Designed and implemented software for Saki AOI optical machine to diagnose defects in SMT-manufactured PCBs, achieving a 30% increase in operational efficiency.',
      'Collaborated with engineering interns to architect scalable automation solutions for machine processes, stencil inventory, and shelf management.',
      'Developed custom on-demand software for Conformal Coating Machine verifying PCB-palette configurations, automating coating, and generating inspection reports.',
      'Acquired hands-on experience in collaborative robotic arms (cobots), SMT-THT industrial workflows, and automated assembly equipment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'vortex-download-manager',
    title: 'Vortex Download Manager (VDM)',
    year: '2026',
    genre: 'Systems • Concurrency • Desktop Architecture',
    logline: 'An independent, clean-room, production-grade download accelerator with dynamic midpoint work-stealing and 16-sector visualizer.',
    stack: ['Python 3.12', 'PyQt6', 'SQLite WAL', 'Native Messaging', 'HMAC-SHA256'],
    build: [
      'Engineered high-throughput segmented accelerator with dynamic midpoint work-stealing algorithm, in-flight Turbo multi-stream toggling, and 1 to 32 parallel socket workers.',
      'Designed zero-copy sparse file pre-allocation and atomic transactional journals (.vdm.meta) to eliminate disk fragmentation and ensure instant crash recovery.',
      'Created cross-browser Native Messaging bridge (Chrome, Edge, Brave, Firefox) and an embedded loopback REST & SSE server (port 9095) for reactive UI updates.',
      'Built full dark studio PyQt6 desktop UI featuring 16-sector rising level fills, vector QIcon rendering, and an offline HMAC-SHA256 cryptographic licensing engine.',
    ],
    features: [
      'Dynamic midpoint work-stealing algorithm',
      '1 to 32 parallel socket workers with TCP_NODELAY & 8MB buffers',
      'Figma modern dark studio PyQt6 desktop GUI',
      '16-sector rising fill level telemetry visualizer',
      'Native Messaging browser integration (Manifest V3 + Firefox)',
      'Atomic .vdm.meta transactional journals & crash recovery',
      'Offline HMAC-SHA256 mathematical license verification',
      '76-unit automated test suite executing in under 30 seconds',
    ],
    metrics: [
      { value: '32', label: 'parallel socket streams' },
      { value: '16', label: 'sector live telemetry visualizer' },
      { value: '76', label: 'automated unit tests' },
      { value: '4MB', label: 'batched memory stream buffer' },
      { value: '0', label: 'external runtime bloat (pure Python 3.12)' },
    ],
    palette: { from: '#021326', via: '#0369a1', to: '#020b14', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'firefighting-terrain-rover',
    title: 'Autonomous Fire Fighting Rover',
    year: '2025',
    genre: 'Robotics • Computer Vision • Autonomous Systems',
    logline: 'An all-terrain firefighting robot combining 2D-SLAM LiDAR navigation, Raspberry Pi 5, and custom CNN flame/smoke detection.',
    stack: ['Raspberry Pi 5', 'YDLIDAR X2', 'TensorFlow / TFLite', 'OpenCV', 'Python'],
    build: [
      'Researched, designed, and published a peer-reviewed research paper in International Scientific Journal of Engineering and Management (ISJEM Vol. 4 Issue 5, DOI: 10.55041/ISJEM03608).',
      'Fabricated custom mild-steel chassis supporting up to 80 KG payload, powered by dual high-torque 24V 350W E-bike motors and 60A brushed ESCs with a custom 36-cell 24V 5500mAh BMS pack.',
      'Trained a Convolutional Neural Network (CNN) with ResNet backbone on COCO fire/smoke datasets, exporting to TFLite for real-time edge inference on Raspberry Pi 5.',
      'Implemented 360-degree YDLIDAR X2 2D-SLAM autonomous obstacle navigation and automated flame suppression triggering mechanism verified by 12MP Sony IMX710 camera.',
    ],
    features: [
      'Peer-reviewed published paper in ISJEM (DOI: 10.55041/ISJEM03608)',
      'ResNet CNN fire & smoke detection deployed via TFLite',
      '2D-SLAM real-time path planning using 360° YDLIDAR X2',
      'Heavy-duty mild steel chassis capable of 80 KG payload',
      'Custom 24V 5500mAh 36-cell Lithium-Ion battery with onboard BMS',
      'Automated fire extinguisher trigger & optical extinguishment verification',
    ],
    metrics: [
      { value: 'ISJEM', label: 'peer-reviewed publication (May 2025)' },
      { value: '100%', label: 'extinguish rate for small fires' },
      { value: '80 KG', label: 'maximum chassis payload capacity' },
      { value: '360°', label: 'LiDAR 2D-SLAM autonomous mapping' },
      { value: '12 MP', label: 'Sony IMX710 optical verification' },
    ],
    palette: { from: '#2b0707', via: '#991b1b', to: '#0d0202', accent: '#ef4444' },
    motif: 'shield',
  },
  {
    id: 'siemens-pcba-automation',
    title: 'Siemens PCBA & Machine Automation',
    year: '2024–2026',
    genre: 'Industrial Automation • Machine Vision • SMT/THT',
    logline: 'Production-line software solutions for Saki AOI optical inspection, conformal coating validation, and reflow machine programming.',
    stack: ['Python', 'ETHON.AI', 'Saki AOI', 'Industrial Vision', 'PLC & SMT Workflows'],
    build: [
      'Developed automated defect diagnostic software for Saki AOI optical machines at Siemens Verna, increasing operational efficiency by 30% with non-invasive database integration.',
      'Engineered custom on-demand software for Conformal Coating Machines verifying PCB-palette configurations and running final image-based validation.',
      'Created Bulk Program Generators for Ersa Three/20 and Seho Reflow machines with exact heating, cooling, convection, and CBS/Park parameters.',
      'Implemented ETHON.AI machine learning models on THT assembly lines to enhance defect inspection precision and automated alert dispatch.',
    ],
    features: [
      '30% operational efficiency increase on Saki AOI machines',
      'Custom verification software for Conformal Coating processes',
      'Bulk program generation for Ersa & Seho reflow systems',
      'ETHON.AI deep learning inspection on THT lines',
      'Live parameter comparison preventing thermal drift',
      'Automated early alert generation for missing/corrupted programs',
    ],
    metrics: [
      { value: '+30%', label: 'inspection operational efficiency' },
      { value: '100%', label: 'non-invasive server integration' },
      { value: '6+', label: 'reflow & soldering machines automated' },
      { value: 'SMT & THT', label: 'production line test coverage' },
      { value: '0', label: 'parameter drift tolerance achieved' },
    ],
    palette: { from: '#022119', via: '#0f766e', to: '#020d09', accent: '#14b8a6' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'isjem-research',
    title: 'Published Researcher',
    org: 'ISJEM Journal (May 2025)',
    detail: 'Author of "Autonomous Fire Fighting Terrain Rover" in International Scientific Journal of Engineering and Management (DOI: 10.55041/ISJEM03608).',
    laurel: 'Peer-Reviewed Research',
  },
  {
    id: 'siemens-automation',
    title: 'Industrial Automation Specialist',
    org: 'Siemens Technology Dept – Verna',
    detail: 'Engineered critical test automation, Saki AOI optical defect software (+30% efficiency), reflow bulk generators, and ETHON.AI THT inspection.',
    laurel: 'Siemens Industrial Impact',
  },
  {
    id: 'iot-honours',
    title: 'B.E. Honours in IoT',
    org: 'Agnel Institute of Technology & Design',
    detail: 'Specialized graduation honours in Internet of Things, embedded hardware architectures, and sensor integration.',
    laurel: 'Academic Distinction',
  },
  {
    id: 'vdm-systems',
    title: 'High-Concurrency Systems Architect',
    org: 'Vortex Download Manager',
    detail: 'Architected complete 32-stream work-stealing download accelerator with 76 unit tests, SQLite WAL, and Native Messaging IPC.',
    laurel: 'Clean-Room Architecture',
  },
  {
    id: 'astronomy-enthusiast',
    title: 'Stargazer & Astrophotographer',
    org: 'Observational Astronomy',
    detail: 'Active explorer of deep-sky objects and constellations using telescopes and sky-tracking tools.',
    laurel: 'Personal Passion',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'ISJEM', name: 'Published Research: Autonomous Fire Fighting Terrain Rover (DOI: 10.55041/ISJEM03608)', link: 'https://doi.org/10.55041/ISJEM03608' },
  { issuer: 'Siemens', name: 'Industrial PCBA Inspection & Machine Process Automation', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'AITD', name: 'Bachelor of Engineering — Honours in Internet of Things (IoT)', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Hardware', name: 'KiCad PCB Design & Component-Level Hardware Bring-up', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Robotics', name: '2D-SLAM LiDAR & Autonomous Navigation with Raspberry Pi 5', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Embedded', name: 'Microcontroller Architecture: ARM Cortex, 8051 & PIC Firmware', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Testing', name: 'PCBA Testing: In-Circuit Testing (ICT), Flying Probe & JTAG Boundary Scan', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'AI & ML', name: 'Roboflow & TensorFlow Edge Inference (TFLite) for Computer Vision', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'hardware-pcb',
    title: 'Hardware & PCB',
    subtitle: 'Design, Bring-Up & Diagnostics',
    skills: [
      { name: 'PCB Design (KiCad)', mono: 'Kc', note: 'Primary' },
      { name: 'Schematic Interpretation', mono: 'Sc' },
      { name: 'Component Debugging', mono: 'Db' },
      { name: 'Signal Tracing', mono: 'St' },
      { name: 'Oscilloscope / Logic Analyzer', mono: 'La' },
      { name: 'SMT & THT Workflows', mono: 'Sm' },
      { name: 'Reflow & Wave Soldering', mono: 'Rf' },
    ],
  },
  {
    id: 'pcba-testing',
    title: 'PCBA Testing & Validation',
    subtitle: 'Quality & Test Workflows',
    skills: [
      { name: 'In-Circuit Testing (ICT)', mono: 'Ic' },
      { name: 'Flying Probe Testing', mono: 'Fp' },
      { name: 'Boundary Scan (JTAG)', mono: 'Jt' },
      { name: 'Net-Level Fault Isolation', mono: 'Fi' },
      { name: 'Saki AOI Inspection', mono: 'Ai' },
      { name: 'ETHON.AI Vision Quality', mono: 'Et' },
    ],
  },
  {
    id: 'programming-automation',
    title: 'Programming & Automation',
    subtitle: 'Software & Test Scripting',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C / C++', mono: 'Cp' },
      { name: 'Embedded C', mono: 'Ec' },
      { name: 'VB.NET', mono: 'Vb' },
      { name: 'LabVIEW / LabWindows', mono: 'Lv' },
      { name: 'Script-Based Automation', mono: 'Au' },
    ],
  },
  {
    id: 'microcontrollers',
    title: 'Microcontrollers & Embedded',
    subtitle: 'Processors & Firmware',
    skills: [
      { name: 'Raspberry Pi 5', mono: 'Pi' },
      { name: 'ARM Cortex', mono: 'Am' },
      { name: '8051 Family', mono: '80' },
      { name: 'PIC Microcontrollers', mono: 'Pc' },
      { name: 'I2C, SPI & UART Protocols', mono: 'Pr' },
      { name: 'PWM & Motor Controllers', mono: 'Pw' },
    ],
  },
  {
    id: 'robotics-ai',
    title: 'Robotics, IoT & Edge AI',
    subtitle: 'Autonomous Systems',
    skills: [
      { name: '2D-SLAM LiDAR (YDLIDAR)', mono: 'Ld' },
      { name: 'TensorFlow & TFLite', mono: 'Tf' },
      { name: 'OpenCV Computer Vision', mono: 'Cv' },
      { name: 'Robotic Arms & Cobots', mono: 'Rb' },
      { name: 'Internet of Things (IoT)', mono: 'It' },
      { name: 'Additive Manufacturing (3D)', mono: '3D' },
    ],
  },
  {
    id: 'desktop-systems',
    title: 'Systems & Architecture',
    subtitle: 'Desktop & IPC Engines',
    skills: [
      { name: 'PyQt6 Desktop GUI', mono: 'Qt' },
      { name: 'Multi-Socket Concurrency', mono: 'Ms' },
      { name: 'Native Messaging IPC', mono: 'Nm' },
      { name: 'SQLite WAL Persistence', mono: 'Sq' },
      { name: 'HMAC Cryptographic Auth', mono: 'Cr' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Vortex Download Manager', 'Autonomous Fire Fighting Rover', 'Siemens Production Downtime Tool'],
  'C / C++': ['Embedded Firmware', 'Autonomous Fire Fighting Rover', 'Hardware Interfacing'],
  'Embedded C': ['ARM Cortex & 8051 Microcontroller Architecture', 'Firmware Debugging'],
  'PCB Design (KiCad)': ['Circuit Schematic Interpretation', 'Hardware Bring-up & Component Debugging'],
  'Raspberry Pi 5': ['Autonomous Fire Fighting Rover (ISJEM Paper)', 'Camera & LiDAR CSI/I2C Integration'],
  '2D-SLAM LiDAR (YDLIDAR)': ['Autonomous Fire Fighting Rover', 'Real-Time Path Planning'],
  'TensorFlow & TFLite': ['Fire & Smoke CNN Edge Detection', 'ISJEM May 2025 Paper'],
  'OpenCV Computer Vision': ['Fire & Smoke Detection Pipeline', 'Image-Based Inspection Validation'],
  'Saki AOI Inspection': ['Siemens AOI Defect Diagnosis (+30% Efficiency)', 'SMT Quality Assurance'],
  'ETHON.AI Vision Quality': ['Siemens THT Production Line Deep Learning Inspection'],
  'In-Circuit Testing (ICT)': ['PCBA Test Workflows', 'Net-Level Fault Isolation'],
  'Boundary Scan (JTAG)': ['TAP Chain Configuration', 'Hardware Bring-up'],
  'PyQt6 Desktop GUI': ['Vortex Download Manager Desktop GUI', '16-Sector Telemetry Visualizer'],
  'Multi-Socket Concurrency': ['Vortex Midpoint Work-Stealing Accelerator (32 Streams)'],
  'Native Messaging IPC': ['Vortex Browser Integration (Chrome, Edge, Brave, Firefox)'],
  'SQLite WAL Persistence': ['Vortex Crash Recovery & Task State Machine'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2021',
    synopsis: 'Secondary and higher secondary schooling in Goa — laying the mathematical, scientific, and electronics groundwork.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'School Days & Curiosity',
        description: 'SSC at Shri Ganesh Vidhyalaya, Harvalem followed by HSSC Science at Shri Bhumika Higher Secondary School, Parye, Goa.',
        tags: ['Goa Board', 'Science', 'Curiosity'],
        runtime: '2019 – 2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering & IoT',
    period: '2021 – 2025',
    synopsis: 'Bachelor in Engineering in Electronics & Communication at Agnel Institute of Technology and Design with Honours in IoT.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Hardware Explorer',
        description: 'Mastered PCB design in KiCad, component-level debugging, signal tracing, oscilloscopes, and microcontroller architectures.',
        tags: ['KiCad', 'Oscilloscopes', 'Signal Tracing'],
        runtime: '4 Years',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Honours in IoT',
        description: 'Graduated with Honours in Internet of Things, programming ARM Cortex, 8051, PIC, and edge sensor telemetry.',
        tags: ['IoT Honours', 'ARM Cortex', '8051', 'PIC'],
        runtime: 'Graduation',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Stargazer',
        description: 'Exploring deep-sky constellations and celestial mechanics using telescopes and tracking apps.',
        tags: ['Astronomy', 'Telescopes', 'Sky Tracking'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Autonomous Rover (ISJEM)',
    period: '2024 – 2025',
    synopsis: 'Conception, fabrication, machine learning training, and journal publication of the Autonomous Fire Fighting Terrain Rover.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Chassis & Power Fabrication',
        description: 'Designed mild-steel welded chassis (80 KG payload) with dual 24V 350W E-bike motors and custom 36-cell 5500mAh BMS battery pack.',
        tags: ['Chassis Fabrication', 'E-Bike Motors', 'BMS'],
        runtime: 'Chassis Build',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: '2D-SLAM & Edge ML',
        description: 'Integrated 360° YDLIDAR X2 SLAM path generation with Raspberry Pi 5 and trained a ResNet CNN model deployed via TFLite.',
        tags: ['Raspberry Pi 5', 'YDLIDAR X2', 'TFLite', 'ResNet'],
        runtime: 'SLAM & Vision',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The Published Paper',
        description: 'Published in International Scientific Journal of Engineering and Management (ISJEM Vol. 4 Issue 5, DOI: 10.55041/ISJEM03608).',
        tags: ['ISJEM Publication', 'Peer-Reviewed', 'DOI Indexing'],
        runtime: 'May 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Industrial Scale at Siemens',
    period: '2024 – Present',
    synopsis: 'From intern to apprentice to On-Role PCBA Test Engineer at Siemens Verna — leading automated PCBA testing, Saki AOI, and reflow automation.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Saki AOI Diagnostic (+30% Efficiency)',
        description: 'Implemented defect diagnosis software for Saki AOI machines on SMT production lines, boosting efficiency by 30%.',
        tags: ['Siemens', 'Saki AOI', '+30% Efficiency'],
        runtime: 'Jul – Aug 2024',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'The Apprentice & Telemetry Architect',
        description: 'Built bulk program generators for Ersa & Seho reflow machines and engineered production telemetry & alert systems.',
        tags: ['Ersa Reflow', 'Seho', 'Python Telemetry'],
        runtime: 'Sep 2025 – Feb 2026',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'PCBA Test Engineer (On-Role)',
        description: 'Promoted to full On-Role PCBA Test Engineer at Siemens Verna, leading board-level testing, ICT, Flying Probe, and test coverage planning.',
        tags: ['Siemens On-Role', 'PCBA Testing', 'ICT', 'JTAG'],
        runtime: 'Feb 2026 – Present',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'High-Concurrency Systems (VDM)',
    period: '2026',
    synopsis: 'Designing Vortex Download Manager — clean-room Python 3.12 multi-stream accelerator with dynamic work-stealing & desktop GUI.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Work-Stealing Core',
        description: 'Implemented midpoint chunk splitting algorithm across 32 socket workers with atomic journals and zero disk fragmentation.',
        tags: ['Python 3.12', 'Sockets', 'Work-Stealing'],
        runtime: 'Engine Core',
        palette: ocean,
      },
      {
        code: 'S05 E02',
        title: 'PyQt6 Studio & Native Browser IPC',
        description: 'Engineered 16-sector telemetry visualizer, 32-bit Native Messaging IPC for Chrome/Edge/Firefox, and HMAC-SHA256 licensing.',
        tags: ['PyQt6', 'Native Messaging', 'HMAC-SHA256'],
        runtime: 'Desktop Studio',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'PCBA Test Engineer', detail: 'On-Role at Siemens Verna (Promoted Feb 2026)', palette: ocean },
  { label: 'Primary languages', title: 'Python & C++', detail: 'Systems, test automation & embedded firmware', palette: amber },
  { label: 'Published research', title: 'ISJEM Journal', detail: 'Autonomous Fire Fighting Rover (DOI: 10.55041/ISJEM03608)', palette: crimson },
  { label: 'Industrial stage', title: 'Siemens Verna', detail: 'On-Role Engineer • Technology Department', palette: ocean },
  { label: 'Systems project', title: 'Vortex Accelerator', detail: '32 parallel socket workers • Dynamic work-stealing', palette: violet },
  { label: 'Academic honour', title: 'Honours in IoT', detail: 'B.E. in Electronics & Communication Engineering', palette: jade },
  { label: 'Hardware bring-up', title: 'KiCad & PCBA', detail: 'Schematic interpretation • Signal tracing • Debugging', palette: amber },
  { label: 'Inspection software', title: 'Saki AOI (+30%)', detail: 'Defect diagnosis without database disturbance', palette: jade },
  { label: 'Robotics & SLAM', title: '2D-SLAM & Pi 5', detail: '360° YDLIDAR X2 • 80 KG payload chassis', palette: crimson },
  { label: 'AI in manufacturing', title: 'ETHON.AI on THT', detail: 'Machine learning inspection models deployed on lines', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Current Role',
    title: 'PCBA Test Engineer',
    lines: ['Promoted to On-Role PCBA Test Engineer in Feb 2026', 'Technology Department · Siemens Verna, India', 'Leading board testing, In-Circuit Testing (ICT), Flying Probe & Saki AOI'],
    chips: ['Siemens On-Role', 'PCBA Test Engineer', 'ICT / JTAG', 'Saki AOI'],
  },
  {
    kicker: 'Education',
    title: 'B.E. · Honours in IoT',
    lines: ['Agnel Institute of Technology and Design, Assagao, Goa', 'Electronics and Communication Engineering'],
    chips: ['Honours in IoT', 'AITD Goa'],
  },
  {
    kicker: 'Published Research',
    title: 'ISJEM Journal Paper',
    lines: ['Autonomous Fire Fighting Terrain Rover', 'Volume 04 Issue 05 | May 2025 | DOI: 10.55041/ISJEM03608', '2D-SLAM LiDAR, Raspberry Pi 5 & ResNet Edge CNN'],
    chips: ['Published Researcher', 'ISJEM', '2D-SLAM', 'Raspberry Pi 5'],
  },
  {
    kicker: 'Software & Systems',
    title: 'Vortex Accelerator',
    lines: ['Independent, clean-room 32-stream download engine', 'Dynamic midpoint work-stealing, PyQt6 studio & Native Messaging browser IPC', '76 automated unit tests, zero external runtime bloat'],
    chips: ['Python 3.12', 'PyQt6', 'Native Messaging', 'SQLite WAL'],
  },
  {
    kicker: 'Technical Core',
    title: 'Hardware & Automation',
    lines: ['KiCad PCB design, signal tracing, oscilloscopes & logic analyzers', 'In-Circuit Testing (ICT), Flying Probe & JTAG Boundary Scan', 'ARM Cortex, 8051, PIC & Raspberry Pi 5'],
    chips: ['KiCad', 'ICT', 'JTAG', 'ARM Cortex', 'Python', 'C++'],
  },
  {
    kicker: 'Beyond Engineering',
    title: 'Deep-Sky Stargazing',
    lines: ['Observational astronomy with telescope & celestial sky-tracking apps', 'Exploring nebulae, star clusters and planetary alignments'],
    chips: ['Telescopes', 'Constellations', 'Astrophotography'],
  },
];

export type ProfileId = 'prasad' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prasad',
    name: 'Prasad',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, Siemens PCBA testing role & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Hardware & Systems',
    blurb: 'Projects, research paper & technical stack first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Robotics & Vision',
    blurb: 'The story arc, rover & research highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Siemens Journey', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Systems & Robotics`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

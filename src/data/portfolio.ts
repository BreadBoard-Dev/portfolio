/**
 * Central portfolio data — generated from Prasad Gawas's Resume (Siemens PCBA Test Engineer,
 * ISJEM Research Publication & Systems Engineering).
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
  tagline: ['PCBA Test Engineer @ Siemens', 'Flying Probe & Test Automation', 'Electronics & Communication Engineer'],
  intro:
    'PCBA Test Engineer at Siemens Verna (Test Technology Department) specializing in automated test-program development, Flying Probe and multimode testing, circuit failure analysis, and manufacturing test automation.',
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
  interests: ['Robotics', 'Mechatronics', 'Machine Learning', 'Additive Manufacturing', 'Cyber-Physical Systems'],
};

export const education = [
  {
    school: 'Agnel Institute of Technology and Design (AITD)',
    place: 'Assagao, Goa',
    degree: 'Bachelor of Engineering, Electronics & Communication Engineering',
    period: '2020 – 2024',
    score: 'Honours: Internet of Things (IoT)',
  },
  {
    school: 'Shri Bhumika Higher Secondary School',
    place: 'Parye, Goa',
    degree: 'HSSC – Science',
    period: '2018 – 2020',
    score: 'Goa Board',
  },
  {
    school: 'Shri Ganesh Vidhyalaya',
    place: 'Harvalem, Goa',
    degree: 'SSC – Goa Board',
    period: 'Completed 2018',
    score: 'Goa Board',
  },
];

export const experience = [
  {
    company: 'Siemens (Test Technology Dept)',
    role: 'PCBA Test Engineer (Full Time)',
    place: 'Verna, Goa',
    period: 'Feb 2026 – Present',
    points: [
      'Develop and maintain PCBA test programs for Flying Probe and multimode test workflows, supporting board-level fault detection and manufacturing validation.',
      'Investigated PCBA test failures to uncover components missing from existing test coverage, applied critical fault-analysis skills and manual test-program modifications to enhance defect detectability, validated physical board failures, and escalated identified test gaps to R&D with technical evidence and actionable recommendations.',
      'Evaluate test data and identify recurring failure patterns to support test-process improvements and manufacturing quality.',
      'ICT/FCT Test Process Optimization: Root-caused silent test-program exits caused by excessive server-side serial-number indexing; implemented a PowerShell script to filter current-financial-year serial numbers into a local copy and modified the FCT program to use it, eliminating false failures, improving FPY from 30% to over 90%, saving 5 minutes per PCBA, and delivering approximately 8,000 INR in savings per PCBA (officially submitted by Siemens in 3i for recognition).',
      'Test Program Optimization & Machine Flexibility: Identified product-specific machine dependencies and failure causes that increased downtime and reduced FPY, optimized test-program logic and corrected parameters on the reference machine to improve cross-machine compatibility, minimize recurring failures, and stabilize production yield.',
    ],
  },
  {
    company: 'Siemens (Technology Dept)',
    role: 'Engineering Apprentice',
    place: 'Verna, Goa',
    period: 'Sep 2025 – Feb 2026',
    points: [
      'Engineered Python-driven production monitoring solutions to track SMT line cycle times, quantify equipment downtime, and automate daily operational reporting.',
      'Reflow Program Generator: Engineered an offline tool for Ersa Three/20 and Seho machines, achieving 100% parameter-mapping accuracy, eliminating manual on-machine program creation, and enabling downtime-free configuration.',
      'Optimized live-parameter comparison tools for Seho reflow and wave-soldering machines to improve machine parameter verification.',
      'SMT Line Alert Monitoring System: Engineered real-time monitoring of machine logs, test results, and PLC warning signals to detect program errors and operational abnormalities, automatically alert CFTs, and enable proactive intervention to prevent production-line disruptions.',
      'ETHON.AI PCBA Inspection Optimization: Trained AI models using custom PCBA-specific datasets with jig and pallet configurations, improving missing-component and reverse-mount detection across SMT/THT assemblies by 68% and reducing inspection time by 50% before wave soldering.',
    ],
  },
  {
    company: 'Siemens',
    role: 'Engineering Intern',
    place: 'Verna, Goa',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Developed software for Saki AOI machines to analyze pass/fail results and diagnose defects in SMT-manufactured PCBs, contributing to a reported 30% improvement in operational efficiency without database disruption.',
      'Engineered software for conformal-coating operations to validate PCB-palette configurations, automate coating workflows, and perform image-based final inspection with on-site report generation.',
      'Collaborated with three engineering interns to develop automation solutions for machine processes, stencil inventory, and shelf management.',
      'Gained hands-on experience in robotic arms, SMT/THT manufacturing processes, and collaborative robot programming.',
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
    id: 'siemens-pcba-test-automation',
    title: 'PCBA Test Automation & FCT Optimization',
    year: '2024–2026',
    genre: 'Test Engineering • Industrial Automation • Quality',
    logline: 'Automated PCBA test programs, Flying Probe workflows, and ICT/FCT optimization saving ₹8,000 per PCBA with 90%+ FPY.',
    stack: ['Flying Probe', 'ICT / FCT', 'PowerShell', 'Python', 'AOI', 'ETHON.AI'],
    build: [
      'Engineered ICT/FCT test optimization resolving silent program crashes, boosting First Pass Yield (FPY) from 30% to over 90%, saving 5 minutes per board, and delivering ~8,000 INR savings per PCBA (officially submitted in Siemens 3i).',
      'Developed and maintained production test programs for Flying Probe and multimode workflows, diagnosing board-level failures and escalating missing coverage gaps to R&D.',
      'Built offline Reflow Program Generator for Ersa Three/20 and Seho machines with 100% parameter accuracy, eliminating downtime during recipe changeovers.',
      'Trained ETHON.AI deep learning models on custom jig/pallet datasets, boosting missing-component detection by 68% and cutting pre-wave inspection time by 50%.',
    ],
    features: [
      'FPY improvement from 30% to over 90% on critical FCT lines',
      '₹8,000 per PCBA cost savings officially recognized in Siemens 3i',
      'Flying Probe & multimode automated test program maintenance',
      'Saki AOI optical defect diagnosis with +30% operational efficiency',
      'ETHON.AI neural visual inspection cutting cycle times by 50%',
      'Real-time machine log & PLC warning alert engine for CFTs',
    ],
    metrics: [
      { value: '90%+', label: 'FPY achieved (up from 30%)' },
      { value: '₹8,000', label: 'cost savings per PCBA' },
      { value: '5 min', label: 'test cycle saved per board' },
      { value: '+68%', label: 'defect detection accuracy' },
      { value: 'Siemens 3i', label: 'official recognition submission' },
    ],
    palette: { from: '#022119', via: '#0f766e', to: '#020d09', accent: '#14b8a6' },
    motif: 'tenants',
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
    id: 'siemens-3i',
    title: 'Siemens 3i Recognition',
    org: 'Siemens Innovation Program',
    detail: 'ICT/FCT Test Optimization eliminating false failures, raising FPY from 30% to 90%+, and delivering ~8,000 INR savings per PCBA.',
    laurel: 'Corporate Innovation',
  },
  {
    id: 'isjem-research',
    title: 'Published Robotics Researcher',
    org: 'ISJEM Journal (May 2025)',
    detail: 'Author of "Autonomous Fire Fighting Terrain Rover" in International Scientific Journal of Engineering and Management (DOI: 10.55041/ISJEM03608).',
    laurel: 'Peer-Reviewed Research',
  },
  {
    id: 'siemens-on-role',
    title: 'On-Role PCBA Test Engineer',
    org: 'Siemens Test Technology Dept',
    detail: 'Promoted to full On-Role PCBA Test Engineer in Feb 2026, directing Flying Probe, ICT, multimode test programs, and manufacturing validation.',
    laurel: 'Career Milestone',
  },
  {
    id: 'iot-honours',
    title: 'B.E. Honours in IoT',
    org: 'Agnel Institute of Technology & Design (AITD)',
    detail: 'Bachelor of Engineering in Electronics & Communication with specialized Honours in Internet of Things (2020 – 2024).',
    laurel: 'Academic Distinction',
  },
  {
    id: 'vdm-systems',
    title: 'High-Concurrency Architect',
    org: 'Vortex Download Manager',
    detail: 'Clean-room 32-stream socket concurrency engine with dynamic work-stealing, 76 unit tests, SQLite WAL, and Native Messaging IPC.',
    laurel: 'Systems Engineering',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'ISJEM', name: 'Published Research: Autonomous Fire Fighting Terrain Rover (DOI: 10.55041/ISJEM03608)', link: 'https://doi.org/10.55041/ISJEM03608' },
  { issuer: 'Siemens', name: 'PCBA Test Program Development, Flying Probe & Multimode Testing', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Siemens 3i', name: 'ICT/FCT Optimization Award Submission: FPY 30% → 90%+', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'AITD', name: 'Bachelor of Engineering — Honours in Internet of Things (IoT)', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Hardware', name: 'PCB Debugging, Circuit Analysis & Hardware Bring-up', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Robotics', name: '2D-SLAM LiDAR Autonomous Navigation with Raspberry Pi 5', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Testing', name: 'In-Circuit Testing (ICT), Flying Probe & JTAG Boundary Scan', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
  { issuer: 'Automation', name: 'Reflow Program Generation & Machine Parameter Validation', link: 'https://www.linkedin.com/in/prasad-gawas-a2a3631a0' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'test-engineering',
    title: 'Test Engineering',
    subtitle: 'Validation, Diagnostics & Coverage',
    skills: [
      { name: 'Flying Probe Testing', mono: 'Fp', note: 'Primary' },
      { name: 'Multimode Testing', mono: 'Mm' },
      { name: 'Test-Program Development', mono: 'Tp' },
      { name: 'Test Validation', mono: 'Tv' },
      { name: 'Fault Isolation', mono: 'Fi' },
      { name: 'Failure Analysis', mono: 'Fa' },
    ],
  },
  {
    id: 'hardware-manufacturing',
    title: 'Hardware & Manufacturing',
    subtitle: 'SMT/THT Production & Board Debugging',
    skills: [
      { name: 'PCB Debugging', mono: 'Pd', note: 'Primary' },
      { name: 'Circuit Analysis', mono: 'Ca' },
      { name: 'SMT/THT Processes', mono: 'St' },
      { name: 'AOI Inspection', mono: 'Ai' },
      { name: 'ICT Concepts', mono: 'Ic' },
      { name: 'Reflow & Wave Soldering', mono: 'Rf' },
      { name: 'JTAG Concepts', mono: 'Jt' },
    ],
  },
  {
    id: 'programming-automation',
    title: 'Programming & Automation',
    subtitle: 'Engineering Tools & Test Scripting',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C / C++', mono: 'Cp' },
      { name: 'Embedded C', mono: 'Ec' },
      { name: 'VB.NET', mono: 'Vb' },
      { name: 'LabVIEW / LabWindows', mono: 'Lv' },
      { name: 'PLC Logic', mono: 'Pl' },
      { name: 'Test Sequencing & Logging', mono: 'Sq' },
    ],
  },
  {
    id: 'test-equipment-embedded',
    title: 'Test Equipment & Embedded',
    subtitle: 'Instruments & Microcontrollers',
    skills: [
      { name: 'Oscilloscope', mono: 'Os' },
      { name: 'Multimeter & Logic Analyzer', mono: 'La' },
      { name: '8051 Family', mono: '80' },
      { name: 'ARM Cortex', mono: 'Am' },
      { name: 'PIC Family', mono: 'Pc' },
      { name: 'Firmware Debugging', mono: 'Fd' },
      { name: 'Peripheral Interfacing', mono: 'Pi' },
    ],
  },
  {
    id: 'specializations-interests',
    title: 'Specializations & Interests',
    subtitle: 'Advanced Cyber-Physical Domains',
    skills: [
      { name: 'Robotics & Mechatronics', mono: 'Rb' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Cyber-Physical Systems', mono: 'Cp' },
      { name: 'Additive Manufacturing', mono: '3D' },
      { name: '2D-SLAM LiDAR', mono: 'Ld' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Flying Probe Testing': ['Siemens Test Technology Department', 'Multimode Test Program Development'],
  'Multimode Testing': ['Board-level fault detection and manufacturing validation at Siemens'],
  'Test-Program Development': ['Siemens FCT program modification', 'Reference machine parameter optimization'],
  'Test Validation': ['Missing test coverage investigation', 'Board failure escalation to R&D'],
  'Fault Isolation': ['Net-level fault isolation', 'Silent test exit root-cause analysis'],
  'Failure Analysis': ['Recurring failure pattern analysis', 'Physical board failure validation'],
  'PCB Debugging': ['Component-level signal tracing', 'Hardware bring-up & schematics'],
  'Circuit Analysis': ['Board failure root-cause analysis', 'Coverage gap escalation'],
  'SMT/THT Processes': ['Siemens production lines', 'DEK SMT printers, Ersa & Seho reflow'],
  'AOI Inspection': ['Saki AOI defect diagnosis (+30% efficiency)', 'Conformal coating inspection'],
  'ICT Concepts': ['ICT/FCT process optimization (FPY 30% → 90%+)', 'Siemens 3i recognition'],
  'Reflow & Wave Soldering': ['Reflow bulk program generator', 'Live parameter comparison'],
  'JTAG Concepts': ['Boundary scan configuration', 'Board bring-up & TAP chains'],
  Python: ['SMT line downtime analytics', 'Autonomous Fire Fighting Rover', 'Vortex Download Manager'],
  'C / C++': ['Embedded firmware', 'Hardware-software interaction debugging'],
  'Embedded C': ['ARM Cortex & 8051 firmware', 'Peripheral interfacing (I2C, SPI, UART)'],
  'LabVIEW / LabWindows': ['Test automation', 'Instrumentation data logging'],
  'PLC Logic': ['SMT line alert monitoring system', 'Machine error detection'],
  Oscilloscope: ['Waveform analysis', 'Signal tracing & hardware verification'],
  'Robotics & Mechatronics': ['Autonomous Fire Fighting Terrain Rover (ISJEM)', 'Cobot programming'],
  'Machine Learning': ['ETHON.AI PCBA inspection (+68% detection)', 'Fire & smoke ResNet CNN'],
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
    period: '2018 – 2020',
    synopsis: 'Secondary and higher secondary schooling in Goa — laying the scientific, mathematical, and electronics groundwork.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'School Days & Curiosity',
        description: 'SSC at Shri Ganesh Vidhyalaya, Harvalem followed by HSSC Science at Shri Bhumika Higher Secondary School, Parye, Goa.',
        tags: ['Goa Board', 'Science', 'Curiosity'],
        runtime: '2018 – 2020',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering & IoT',
    period: '2020 – 2024',
    synopsis: 'Bachelor of Engineering in Electronics & Communication at Agnel Institute of Technology and Design (AITD) with Honours in IoT.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Hardware Explorer',
        description: 'Mastered PCB debugging, circuit analysis, oscilloscopes, signal tracing, and microcontroller architectures.',
        tags: ['AITD Goa', 'Circuit Analysis', 'Signal Tracing'],
        runtime: '4 Years',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Honours in IoT',
        description: 'Graduated with Honours in Internet of Things, programming ARM Cortex, 8051, PIC, and sensor telemetry.',
        tags: ['IoT Honours', 'ARM Cortex', '8051', 'PIC'],
        runtime: 'Graduation',
        palette: ocean,
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
        tags: ['Chassis Build', 'E-Bike Motors', 'BMS'],
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
    synopsis: 'From intern to apprentice to full On-Role PCBA Test Engineer at Siemens Verna — leading automated PCBA testing and ICT/FCT optimization.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Saki AOI Diagnostic (+30% Efficiency)',
        description: 'Developed defect diagnosis software for Saki AOI optical machines on SMT production lines, boosting efficiency by 30%.',
        tags: ['Siemens', 'Saki AOI', '+30% Efficiency'],
        runtime: 'Jul – Aug 2024',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'The Apprentice & Telemetry Architect',
        description: 'Built reflow bulk program generators, SMT downtime analytics, and trained ETHON.AI models cutting inspection time by 50%.',
        tags: ['Ersa Reflow', 'Seho', 'ETHON.AI', 'SMT Alert'],
        runtime: 'Sep 2025 – Feb 2026',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'PCBA Test Engineer & Siemens 3i',
        description: 'Promoted to On-Role PCBA Test Engineer. Optimized ICT/FCT test process, improving FPY from 30% to 90%+ and delivering ~₹8,000 savings per PCBA.',
        tags: ['Siemens 3i', 'FPY 90%+', 'Flying Probe', 'ICT/FCT'],
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
  { label: 'Current role', title: 'PCBA Test Engineer', detail: 'On-Role at Siemens Verna (Test Technology Dept)', palette: ocean },
  { label: 'Siemens 3i Recognition', title: 'FPY 30% → 90%+', detail: 'ICT/FCT optimization saving ₹8,000 per PCBA', palette: crimson },
  { label: 'Primary testing', title: 'Flying Probe & ICT', detail: 'Multimode test workflows & board fault isolation', palette: jade },
  { label: 'Published research', title: 'ISJEM Journal', detail: 'Autonomous Fire Fighting Rover (DOI: 10.55041/ISJEM03608)', palette: crimson },
  { label: 'Primary languages', title: 'Python, C & C++', detail: 'Engineering automation, test scripts & firmware', palette: amber },
  { label: 'Inspection AI', title: 'ETHON.AI on SMT/THT', detail: '+68% defect detection & 50% faster inspection', palette: ocean },
  { label: 'Academic honour', title: 'Honours in IoT', detail: 'B.E. in Electronics & Communication (AITD Goa)', palette: jade },
  { label: 'Optical diagnosis', title: 'Saki AOI (+30%)', detail: 'Pass/fail evaluation without database disturbance', palette: violet },
  { label: 'Robotics & SLAM', title: '2D-SLAM & Pi 5', detail: '360° YDLIDAR X2 • 80 KG payload chassis', palette: crimson },
  { label: 'Systems project', title: 'Vortex Accelerator', detail: '32 parallel socket workers • Dynamic work-stealing', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Current Role',
    title: 'PCBA Test Engineer',
    lines: ['Full-Time On-Role · Test Technology Department', 'Siemens Verna, Goa · Feb 2026 – Present', 'Flying Probe, multimode testing, ICT/FCT optimization & fault isolation'],
    chips: ['Siemens On-Role', 'Flying Probe', 'ICT / FCT', 'FPY 90%+'],
  },
  {
    kicker: 'Major Impact',
    title: 'Siemens 3i Recognition',
    lines: ['Root-caused silent test exits & indexed serial caching', 'Boosted FPY from 30% to over 90%', 'Delivered ~₹8,000 savings and saved 5 mins per PCBA'],
    chips: ['Siemens 3i', '₹8,000 Savings/PCBA', 'FPY > 90%'],
  },
  {
    kicker: 'Published Research',
    title: 'ISJEM Journal Paper',
    lines: ['Autonomous Fire Fighting Terrain Rover', 'Volume 04 Issue 05 | May 2025 | DOI: 10.55041/ISJEM03608', '2D-SLAM LiDAR, Raspberry Pi 5 & ResNet Edge CNN'],
    chips: ['Published Researcher', 'ISJEM', '2D-SLAM', 'Raspberry Pi 5'],
  },
  {
    kicker: 'Education',
    title: 'B.E. · Honours in IoT',
    lines: ['Agnel Institute of Technology and Design, Assagao, Goa', 'Electronics and Communication Engineering (2020 – 2024)'],
    chips: ['Honours in IoT', 'AITD Goa'],
  },
  {
    kicker: 'Software & Systems',
    title: 'Vortex Accelerator',
    lines: ['Independent, clean-room 32-stream download engine', 'Dynamic midpoint work-stealing, PyQt6 studio & Native Messaging browser IPC', '76 automated unit tests, zero external runtime bloat'],
    chips: ['Python 3.12', 'PyQt6', 'Native Messaging', 'SQLite WAL'],
  },
  {
    kicker: 'Technical Core',
    title: 'Test Engineering & Automation',
    lines: ['Flying Probe, SMT/THT, AOI, Reflow & Wave Soldering', 'Oscilloscopes, Logic Analyzers, ARM Cortex, 8051 & PIC', 'Python, C, C++, Embedded C, LabVIEW & PLC Logic'],
    chips: ['Flying Probe', 'JTAG', 'Python', 'C++', 'LabVIEW'],
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
    name: 'Tech Geek',
    blurb: 'Flying Probe, test automation, ICT/FCT & projects first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Curious Viewer',
    blurb: 'The story arc, rover research & highlights first',
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

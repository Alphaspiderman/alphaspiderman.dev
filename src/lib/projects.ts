import type { Project } from "@/lib/types";

export const projectData: Project[] = [
  {
    name: "MAHE Open House 2025",
    year: "2025",
    description:
      "Project for the MAHE Open House 2025 event, providing information and resources.",
    extended: `Built on a tight pre-event timeline as a Progressive Web App for MAHE-BLR's Open House. The goal was to give visitors an app-like experience without requiring an app-store install.

  Key highlights:
  - Mobile-first navigation and responsive layouts
  - Offline support and caching (PWA service worker)
  - Checklist-style event tracking and QR-based access across campus

  **Role:** Lead developer — handled PWA setup, offline caching, and mobile UX optimizations.`,
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Alphaspiderman/mahe-openhouse-2025",
      },
      {
        label: "Live Site",
        url: "https://mit-openhouse.alphaspiderman.dev/",
      },
    ],
  },
  {
    name: "Coursera Assignment Share Link Extension",
    year: "2025",
    description:
      "A browser extension to easily extract & share Coursera assignment links.",
    extended: `This extension addresses a common student pain point: peer-reviewed Coursera assignments often miss internal deadlines because review links are hard to find.

  What it does:
  - Extracts the peer review share link from the submissions flow in one click
  - Copies the link to clipboard or opens a share dialog

  **Technical notes:** implemented as a Manifest V3 extension using content scripts and background messaging.`,
    tech: ["JavaScript", "Chrome Extension", "Manifest V3"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Alphaspiderman/coursera-assignment-share-link-extension",
      },
      {
        label: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/fedhlkjnidambfcefgagpfpjakbhgncj",
      },
    ],
  },
  {
    name: "Accreditation and Reporting System",
    year: "2024-25",
    description:
      "Portal and API for managing and exporting accreditation data for colleges.",
    extended: `Developed as a flagship effort for the AppDev Cell at MIT-BLR: a full end-to-end platform to prepare accreditation submissions for bodies such as NAAC and NBA.

  Highlights:
  - Large normalized PostgreSQL schema (50+ tables)
  - API lifecycle planning and versioning
  - Docker-based deployment with reverse proxy and CI/CD

  **Impact:** Designed so future student teams could extend and maintain the platform with minimal friction.`,
    tech: ["Next.js", "Python", "PostgreSQL"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/YCN-club/accreditation-website",
      },
      { label: "API", url: "https://github.com/YCN-club/accreditation-api" },
    ],
  },
  {
    name: "Laundry Tracker",
    year: "2024",
    description: "A simple app to track laundry status and history.",
    extended: `Laundry Tracker is a small mobile app to simplify wardrobe management.

  Features:
  - Organize items by state: Ready to wear, Waiting to be washed, In wash
  - Image-backed entries for quick visual identification
  - Incremental data-model design that evolved from a single table to categorized records

  **Note:** focused on a minimal, offline-first UX for quick daily use.`,
    tech: ["Flutter", "SQLite"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Alphaspiderman/Laundry-Tracker",
      },
    ],
  },
  {
    name: "NSS App",
    year: "2023",
    description:
      "Platform for NSS volunteers to log hours, apply for events, and manage data. Includes mobile app, API, and static config.",
    extended: `Originally taken forward after Team SKARR placed at the HackNXS hackathon, this six-month project aimed to centralize volunteer operations for NSS MIT-BLR.

Core features:
- Volunteer hour logging and export
- Event applications and approvals
- Chapter/member directory and role-based access
- Lightweight static config for offline/mobile sync

**Outcome:** Served as a production-proof prototype that reduced administrative overhead for the committee. The work prioritized low-cost hosting options and maintainability so campus chapters could adopt it without large recurring expenses.`,
    tech: ["Flutter", "Python", "PostgreSQL", "Sanic"],
    links: [
      { label: "API", url: "https://github.com/YCN-club/nss-api" },
      { label: "Mobile App", url: "https://github.com/YCN-club/nss-app" },
      { label: "Static Config", url: "https://github.com/YCN-club/nss-config" },
    ],
  },
  {
    name: "HelpDesk System",
    year: "2023-24",
    description:
      "A helpdesk portal for student support, ticketing, and knowledge base, with a backend API.",
    extended: `Built for TAPMI Bengaluru, this helpdesk combined a user-facing portal with a role-aware backend API to support student, staff, and admin workflows.

Key capabilities:
- Ticket creation, assignment, and SLA tracking
- Dynamic categories, subcategories and workflows
- Role-based access control and admin dashboards
- Backend using PostgreSQL and S3-compatible object storage for attachments

**Delivery notes:** Included regular stakeholder demos and iterative refinements; the project emphasized real-world workflows and auditability.`,
    tech: ["Next.js", "Python", "PostgreSQL", "MinIO (S3)"],
    links: [
      { label: "Website", url: "https://github.com/YCN-club/helpdesk-website" },
      { label: "API", url: "https://github.com/YCN-club/helpdesk-api" },
    ],
  },
  {
    name: "Website Templates",
    year: "2022-23",
    description:
      "Website templates for student clubs and communities, supporting various tiers and Notion blog integration.",
    extended: `A collection of starter templates aimed at helping student clubs get online quickly with minimal technical overhead.

Features:
- Tiered templates (Tier 1/2/3) with increasing customization
- Optional Notion-powered blog and event integration
- Single-file config and a config generator to reduce setup errors

**Adoption:** Hosted on Vercel and widely adopted across campus; prioritized simplicity and low-maintenance hosting for student maintainers.`,
    tech: ["Next.js", "React", "Notion API", "Tailwind CSS"],
    links: [
      { label: "Tier 1", url: "https://github.com/YCN-club/redirect" },
      { label: "Tier 2", url: "https://github.com/YCN-club/linkedlist" },
      { label: "Tier 3", url: "https://github.com/YCN-club/template" },
    ],
  },
  {
    name: "Noticeboard & Logistics",
    year: "2022-24",
    description:
      "Centralized platform for college events, notices, and logistics. Includes mobile apps and backend API for students to access and register for activities.",
    extended: `The original core of mitblr.club: a centralized noticeboard and logistics platform for campus events and registrations.

Highlights:
- Unified event publishing and discovery
- Mobile apps for student registration and reminders
- Shared API to power multiple client apps

**Legacy:** Provided critical lessons in scaling, governance, and long-term maintenance for student-run infrastructure; many ideas were later adopted elsewhere on campus.`,
    tech: ["Flutter", "Python", "MongoDB", "Sanic"],
    links: [
      { label: "Mobile Apps", url: "https://github.com/YCN-club/noticeboard" },
      { label: "API", url: "https://github.com/YCN-club/api" },
    ],
  },
];

export default projectData;

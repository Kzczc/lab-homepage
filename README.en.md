# AIDE Lab · HKUST(GZ)

[Website](https://kzczc.github.io/lab-homepage/) · [中文](README.md) · [Design references](planning/DESIGN.md)

A six-page bilingual academic website for **AIDE Lab — AI, Decisions & Economics** at HKUST(GZ).

![Homepage preview](preview-cover.png)

**Home · Research · Team · Publications · News · Join us**

The visual structure follows Westlake MedAI, the team sidebar follows MobiX, and project presentation and open-source typefaces draw on CIS. The original AIDE mark represents four decision paths converging on a central node. Features include a dark-blue animated wireframe, orange accents, gray/white content sections, locally hosted Inter, and reduced-motion support. See [BRAND.md](planning/BRAND.md) for the rationale.

The site presents three research areas with six project stories, 17 published or accepted papers, 11 acceptance updates dated by official conference author-notification schedules, eight current students, and 22 completed-degree records. Agents & decisions features BizSage and Mechanism Alignment; Caught in the Story remains in related work and publications. English is the default for first-time visitors, and an explicit language choice persists across pages. Figures open in a zoomable viewer. Publication filters support shareable URLs, author links, citation copying, and a complete BibTeX download. See [News date sources](planning/NEWS-DATES.md).

## Run locally

Node.js 18+; no third-party build dependencies.

```sh
npm run build
npm start
```

Open http://127.0.0.1:61332 . Edit `content/site.json`, rebuild, and commit the source and `docs/`. GitHub Pages publishes `main:/docs`.

See `planning/DESIGN.md` for the design mapping, `planning/SOURCES.md` for verification distinctions, and `content/asset-sources.json` for image/font origins. Academic images retain their original rights; font licenses are included. Credentials are confined to the local publishing process. The preview is public and carries noindex metadata.

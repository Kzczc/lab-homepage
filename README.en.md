# Guang Zhang Research Group · HKUST(GZ)

[Website](https://kzczc.github.io/lab-homepage/) · [中文](README.md) · [Design references](planning/DESIGN.md)

A six-page bilingual academic website. The formal lab name is still being discussed; the header identifies the PI and university.

![Homepage preview](preview-cover.png)

**Home · Research · Team · Publications · News · Join us**

The visual structure follows Westlake MedAI, the team sidebar follows MobiX, and project presentation and open-source typefaces draw on CIS. Features include a dark-blue animated wireframe, orange accents, gray/white content sections, locally hosted Mulish/Open Sans, and reduced-motion support.

Three research themes, four selected projects, 15 research records, eight current students, and 22 completed-degree records. Language preference persists across pages. Publication filters support shareable URLs, author links, citation copying, and a complete BibTeX download.

## Run locally

Node.js 18+; no third-party build dependencies.

```sh
npm run build
npm start
```

Open http://127.0.0.1:61332 . Edit `content/site.json`, rebuild, and commit the source and `docs/`. GitHub Pages publishes `main:/docs`.

See `planning/DESIGN.md` for the design mapping, `planning/SOURCES.md` for verification distinctions, and `content/asset-sources.json` for image/font origins. Academic images retain their original rights; font licenses are included. Credentials are confined to the local publishing process. The preview is public and carries noindex metadata.

# Guang Zhang Research Group

[Website](https://kzczc.github.io/lab-homepage/) · [References](https://kzczc.github.io/lab-homepage/references.html) · [中文](README.md)

A bilingual research-group website at HKUST(GZ), connecting learning and reasoning, agents and decisions, and financial modeling.

![Homepage preview](preview-cover.png)

Three research themes, three selected projects, 15 traceable research records, and eight current students. Includes publication search, year/topic filters, author links, completed-degree records, mobile navigation, and persistent language selection.

The formal lab name remains under discussion. GZ is a working identity. Source distinctions and outstanding verification items are documented in [SOURCES.md](planning/SOURCES.md).

## Run locally

Node.js 18+; no third-party build dependencies.

```sh
npm run build
npm start
```

Open http://127.0.0.1:61332 . Edit `content/site.json`, rebuild, and commit both content and `docs/`. GitHub Pages publishes `main:/docs`.

GitHub credentials are used only by the local publishing process. This static site needs no model API key. Original Word files and local review files are excluded from publishing. The preview remains public with noindex metadata. Illustrations are original conceptual diagrams; academic materials and the PI photograph retain their original rights.

# Interface conventions

- Page titles, navigation, section headings, and named research areas use title case: **Join Us**, **Browse by Year**, **Learning & Reasoning**. Articles, coordinating conjunctions, and prepositions stay lowercase inside a title. First and last words are capitalized. This house style follows the Chicago approach; it is not an automatic capitalization transform.
- Descriptive paragraphs, news, and action labels use sentence case: **View publication**, **Email us**. Published paper titles, author names, acronyms, and branded project names keep their source spelling.
- English and Chinese copy are separate language variants. An enlarged figure uses the caption for the selected language, including when its original caption is visually hidden in a carousel.
- Member portrait overrides belong to their member record. Holam Yu and Hanzhi Xiao each use an individually sourced single Minion illustration; these are temporary placeholders. Sources are recorded in `content/asset-sources.json`.

# Motion and backgrounds

Home retains its rotating wireframe and paper carousel. Internal page headers use lightweight SVG motifs: research paths, team nodes, publication sheets, a news timeline, and connection orbits. They share the navy/cyan/gold palette and remain behind the readable content area.

Control feedback takes approximately 140–220 ms. Decorative motion is slow (22–32 seconds) and stops offscreen or when the tab is hidden. Native page transitions are progressive enhancement, with ordinary links retained. Reduced-motion preferences disable nonessential animation and automatic rotation. Paper figures have no tint, dark overlay, or hover zoom that would disturb reading.

Navigation and language changes preserve normal keyboard behavior. Language changes within long lists retain the visible reading block. The research and team navigation indicate the current section without altering browser history.

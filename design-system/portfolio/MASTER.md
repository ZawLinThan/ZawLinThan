# Portfolio design system

Help visitors understand Zaw’s engineering focus, browse his projects, and find his résumé or contact details. Lead with the introduction and projects on the homepage. Use the project index for scanning and detail pages for evidence: features, technologies, screenshots, and demos.

- **Color:** Charcoal background (`#131219`), graphite surfaces (`#1a1920`), warm white text (`#f6f2eb`), and muted lavender-gray secondary text (`#b8b4bd`). Amber (`#ffbd7d`) identifies key actions and labels. Violet (`#b5afff`) distinguishes secondary diagrams; mint (`#a2dbc0`) supports status text. Use the semantic tokens in `src/index.css`.
- **Type:** Space Grotesk for headings, DM Sans for prose, and JetBrains Mono for compact metadata, navigation, and project diagrams.
- **Surfaces:** Use visible borders, modest radii, and generous section spacing. Reserve grids and dot patterns for the hero and workflow diagrams. Project screenshots should show the real interface.
- **Interaction:** Keep links and buttons semantic, give controls visible keyboard focus, and honor reduced motion. Keep the navigation in the same order and allow controls, badges, and diagrams to reflow at narrow widths.

Dark is the default. The header’s Cream toggle applies a warm cream background (`#f6eee1`), pale ivory surfaces (`#fffaf1`), and deep copper accents (`#88421e`). Store the visitor’s choice and restore it before rendering the page.

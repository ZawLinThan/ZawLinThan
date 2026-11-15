# Portfolio design system

The design uses a Swiss-style grid and strong typography from the UI UX Pro Max portfolio recommendation. The implementation adapts those ideas into an engineering notebook: warm paper, dark ink, lime accents, and diagrams that explain the projects.

| Role | Token | Value |
| --- | --- | --- |
| Page | `--background` | `#f7f7ef` |
| Card | `--surface` | `#fefef9` |
| Recessed surface | `--surface-muted` | `#eef0e6` |
| Text | `--ink` | `#181e18` |
| Secondary text | `--muted` | `#505b50` |
| Rules | `--border` | `#cbd1c2` |
| Links and focus | `--accent` | `#365e1f` |
| Primary action fill | `--signal` | `#d6f873` |
| Profile surface | `--panel` | `#20291e` |
| Profile text | `--panel-ink` | `#f1f6eb` |

Use Space Grotesk for headings, DM Sans for prose and controls, and JetBrains Mono for navigation, labels, and system diagrams. Use one page heading and keep labels subordinate to the content they describe.

Use the shared content width and a two-column grid for the desktop introduction and project index. Stack both at 720 px and allow navigation to wrap without hiding destinations. Keep links and buttons at least 44 px tall where they stand alone.

On home, lead with the name, engineering focus, and project action. Put education, location, and availability in the dark profile panel. In the build log, use category, title, summary, and stack as the consistent card structure. Add a system flow only where the steps are supported by the project description. Pair progress colors with explicit text.

Keep motion to short interaction feedback and honor the reduced motion setting. Keep keyboard focus visible against both the light surface and the profile panel. Source the live palette from `src/index.css`, and shared layouts and components from `src/App.css`.

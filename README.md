# CA Race Condition Reproduction (Case 399972)

Minimal project to reproduce the Contextual Analysis race condition
where `applicable_cves_only: true` generates violations on first scan
but not on second scan.

## Design

- **main branch**: Clean project, no vulnerable dependencies
- **PR branch**: Adds pyyaml 5.3.1 + jinja2 3.0.0 (vulnerable, but source uses safe patterns)
- Source uses `yaml.safe_load` and `autoescape=True` so CA marks CVEs as "Not Applicable"
- Policy has `applicable_cves_only: true` so Not Applicable CVEs should be filtered
- First scan (cold): No CA data exists → violations generated (BUG)
- Second scan (warm): CA data cached → violations filtered → 0 violations

+++
date = '2025-05-15T13:07:17+02:00'
draft = true
title = 'Introducing Nessi'
+++

Introducing Nessi.dev: The Delta-Native Data Quality Engine
Modern data teams are drowning in schema drift, broken pipelines, and silent anomalies — especially when working with Delta Lake.

What we needed wasn’t another dashboard or generic data quality tool.
We needed a CLI-first, fast, focused engine that actually understands how Delta Lake works.

That’s why I built Nessi.dev.

What is Nessi.dev?
Nessi.dev is a Delta-native data quality and observability engine built for data engineers. It runs locally or in CI/CD, works across cloud storage layers (S3, Azure Blob, GCS), and gives you real insight into your tables — without requiring Spark, JVM, or endless configuration.

With one command, you can:

Profile Delta tables with stats, nulls, histograms, uniqueness, and type checks

Validate schema consistency and version history

Detect anomalies (outliers, spikes, trend changes, oscillations)

Run custom rules (YAML, SQL, or Python)

Generate clean HTML/PDF reports with quality scoring

Set up alerts via email, Slack, or Prometheus

Integrate with dbt, Airflow, GitHub Actions, or any CI/CD system

Why Nessi.dev Exists
Most data quality tools fall into one of two categories:

Dashboard-heavy platforms: Pretty charts, but disconnected from how engineers actually work.

Rigid rule engines: Limited insight, no profiling, and zero context.

Nessi is different:

Built in Go for performance, simplicity, and portability

Works directly on Delta Lake log files (no black box)

CLI-first, DevOps-friendly, and easy to embed into any pipeline

Optional Python extensions if you want ML-based anomaly detection

Example: Run a Profile Check
bash
Copy
Edit
nessi profile s3://my-datalake/users --report
You get:

Statistical summary (min/max/null/unique per column)

Partition layout and optimization hints

Distribution histograms

HTML report with drill-downs

Quality scorecard

Need validation?

bash
nessi validate --rules rules.yaml s3://my-datalake/users
Supports predefined rules (null, range, regex, enum) and custom logic — via YAML, SQL, or Python.

What Makes Nessi Different
Nessi.dev isn’t just fast. It’s deeply integrated with how real data teams work:

✅ Delta Lake version control

✅ Schema diff and rollback up to 30 days

✅ Anomaly detection using trend deviation, z-score, IQR

✅ Lineage-aware RCA (Root Cause Analysis)

✅ Freshness + SLA checks with alert routing

✅ Grafana + Prometheus integration

✅ Cross-cloud support (AWS, Azure, GCP)

✅ Security-first: RBAC, JWT auth, audit logs, rate limiting

And it’s all containerized with Docker — no Spark, no JVM, no bloat.

orks With What You Already Use
dbt: Run Nessi checks on models, tags, and downstream dependencies

Airflow: Trigger profiling and validation tasks as operators

GitHub Actions: Fail builds if tables drift or rules fail

Grafana: Visualize table health trends in real time

Slack/Email/Teams: Get alerted before downstream consumers complain

What's Coming Next
Freshness SLA dashboard

Public rule and plugin hub

Unity Catalog support

More RCA automation

Community-contributed report templates

eady to Try It?
No signup. No credit card. Just visibility.

bash
docker run nessi/nessi:latest profile s3://my-datalake/users
Or explore the docs and live examples at nessi.dev

Nessi.dev is here to make your data lake less of a mystery — and your pipelines a lot more reliable.

Let me know what you break, what you love, and what you want next.
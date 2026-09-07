# Portfolio v2 — Content Source of Truth

This file is the single source for every word that appears on the site.
Titles must match the resume verbatim. Summaries are shorter and hookier
than the resume — the resume sells the interview, the site sells the resume.

The site does not host a resume PDF. Recruiters get to Prathamesh through
the Contact section or the linked profiles (LinkedIn, GitHub, Email).

---

## Identity

- **Name:** Prathamesh Kulkarni
- **Positioning line (used everywhere):** AI Analytics Engineer
- **Location:** Austin, TX
- **Status:** Open to relocate

---

## Hero section

**Headline (H1):**
AI Analytics Engineer
Shipping production AI where analytics engineering meets applied ML.

**Subheadline (≤ 25 words):**
Built multi-agent systems, RAG pipelines, and LLM-as-judge evaluation frameworks powering analytics platforms with $1M+ in business impact across advertising, SaaS, and finance.

**Above-the-fold metric strip (3 stats, no captions):**
- $1M+ business impact
- Multi-Agents, RAG, Evals, Fine-Tuning
- 4+ years shipping

**Primary CTA:** See Work → `#projects`
**Secondary CTA:** Get in Touch → `#contact`

**Contact affordance in hero (small, not shouted):** LinkedIn · GitHub · Email
No phone number. No email in plain text. Email is behind a `mailto:` icon.

---

## About section

**Section headline:** About

**Body:**

I build production AI systems where analytics engineering meets applied ML. My focus is multi-agent orchestration, LLM evaluation pipelines, and lakehouse-native ML platforms. The systems that move business metrics and hold up under real traffic.

---

## Experience section

**Section headline:** Experience

Titles are verbatim from resume. Summaries are the site version — one line of context, one line of the flagship win. Each entry is ~40 words. If a stakeholder says "tell me more," that's a real conversation, not a wall of text.

### 1. USA Today Co Inc — Texas, USA
**Title:** AI Engineer / Data Scientist
**Dates:** February 2025 — July 2026

Shipped a multi-agent keyword system on LangGraph, Gemini, and SBERT, containerized on Kubernetes. It serves ~1M+ daily queries at ~97% accuracy and cut ad spend by ~14%.

### 2. Mimecast — Massachusetts, USA
**Title:** Analytics Engineer Co-op
**Dates:** January 2024 — June 2024

Architected the AWS ETL/ELT foundation (Glue, Redshift, S3, dbt) that became the single source of truth for analytics and finance. Delivered $150K in annual savings and an 18% data accuracy lift.

### 3. Standard Screws Pvt Ltd — Mumbai, India
**Title:** Data Analytics Engineer
**Dates:** July 2020 — August 2022

Built the production ETL and CI/CD pipelines powering the operations and sales analytics stack. Cut infra spend by ~$20K through workload optimization. Forecasting pipelines improved planning accuracy by 25%.

### 4. Remark Skill Education — Delhi, India
**Title:** Data Science Intern
**Dates:** January 2020 — June 2020

Owned the modeling layer of a choice-based recommendation system built with a five-person team. Repeat visits rose 25%.

---

## Featured Projects

Four projects, ordered by strength. The first two carry full narrative weight. The last two are card-only. This forces the recruiter's eye to Project 1 and 2, which are your best 2026 work.

**Card fields for all projects:** title, one-line pitch, status badge, tech chips, GitHub link, live link (where applicable). No "view code" button that just opens GitHub — the whole card is clickable.

### Project 1 — E-Commerce Intelligence Platform
- **Status:** `Shipped`
- **Featured:** true (rank 1)
- **One-line pitch:** Databricks lakehouse with a LangGraph AI analyst agent, from ingestion to churn insight.
- **Long pitch (site body):**
  A production-grade lakehouse built on Databricks with medallion architecture, Unity Catalog governance, and automated data quality, processing 200K+ customer records across 5 business domains. On top of it, a LangGraph AI agent surfaces churn drivers to non-technical users through a Streamlit app, backed by Feast for feature management, MLflow for tracking (LightGBM, AUC 0.74), and Evidently for drift monitoring.
- **Tech chips:** Databricks, LangGraph, MLflow, Feast, Evidently, Unity Catalog, Streamlit, LightGBM
- **Metrics to display:** 200K+ records · 5 domains · AUC 0.74
- **Links:** GitHub (https://github.com/PrathamHusky07/commerce-intelligence-platform), Live demo (if hosted)

### Project 2 — Healthcare Compliance Investigation Engine
- **Status:** `In Progress`
- **Featured:** true (rank 2)
- **One-line pitch:** Graph-native compliance investigations with a LangGraph agent over dbt-modeled canonical entities.
- **Long pitch (site body):**
  A compliance investigation engine that treats healthcare data as a graph, not a warehouse. dbt/DuckDB models canonical entities and relationships in a staging → mart pipeline; Neo4j stores the resulting graph; a LangGraph agent conducts multi-hop investigations against it. Next.js and FastAPI power the investigator-facing interface.
- **Status note:** In active development. Canonical entity and relationship models are complete, mart layer is next.
- **Tech chips:** dbt, DuckDB, Neo4j, LangGraph, FastAPI, Next.js
- **Links:** GitHub (add URL when public)

### Project 3 — Career Crafter
- **Status:** `Shipped`
- **Featured:** true (rank 3, card-only)
- **One-line pitch:** Retrieval-based job-info assistant with a containerized Airflow + FastAPI backend on AWS.
- **Tech chips:** Airflow, Docker, AWS, FastAPI
- **Links:** GitHub (https://github.com/PrathamHusky07/CareerCrafter)

### Project 4 — Snowpark ML
- **Status:** `Shipped`
- **Featured:** true (rank 4, card-only)
- **One-line pitch:** ML pipelines running natively inside Snowflake via Snowpark, deployed on GCP.
- **Tech chips:** Python, Snowflake, Snowpark, GCP
- **Links:** GitHub (https://github.com/PrathamHusky07/SnowSQL-Streamline)

### Archive (not shown in main grid — hidden behind /archive or omitted for v1)
- OpenAI Chatbot — old tutorial project
- Image Captioning — old tutorial project
- Job Roles Analysis — superseded by newer work
- PDF Evaluator — superseded by newer work
- The Stay Network — non-technical fit

---

## Stack section

**Section headline:** Stack

Group by function so a recruiter's eye can scan. Do not list icons for every logo you've ever touched — that's a beginner move. Twelve well-chosen items > twenty diluted ones.

### Languages
Python · SQL · R

### GenAI & LLMs
LangGraph · LangChain · Gemini · Vertex AI · Hugging Face · OpenAI

### ML & Modeling
PyTorch · Scikit-Learn · XGBoost · TensorFlow

### MLOps & Infrastructure
Databricks · MLflow · Feast · dbt · Docker · Airflow · PySpark · FastAPI · Kubernetes · AWS · GCP

### BI & Analytics
Snowflake · BigQuery · Redshift · Tableau · Power BI · Looker

*(Icons: use simple-icons.org SVGs, not the old .png files from the CRA template. If a tool doesn't have a clean logo, use a text chip. Consistency over completeness.)*

---

## Contact section

**Section headline:** Get in touch

**Copy:**
Open to Analytics Engineer, AI Engineer, and Forward-Deployed Engineer roles. Best reached by email or LinkedIn.

**CTAs (three buttons, no form):**
- Email — mailto:prathamesh.kulkarni2398@gmail.com (primary button, label shows full address)
- LinkedIn — https://www.linkedin.com/in/prathameshkulkarni23/ (secondary, opens new tab)
- GitHub — https://github.com/PrathamHusky07 (secondary, opens new tab)

*(No phone number on the site. No resume link. No form. The three CTA buttons are the entire conversion surface.)*

---

## Footer

Left: © 2026 Prathamesh Kulkarni
Right: Built with Next.js on Vercel · Source

*(No "made with love" line. No sparkle emojis. Restrained.)*

---

## Copy discipline — global rules for the whole site

1. **One positioning line:** "AI Analytics Engineer." Not "Aspiring." Not "Data Scientist." Not "Data Engineer." Everywhere.
2. **Numbers, not adjectives:** "~14% ad spend reduction" ships. "significantly reduced ad spend" does not.
3. **Verbs, not nouns:** "Built," "shipped," "architected." Not "was responsible for."
4. **Present tense for current role, past tense for prior roles.** No exceptions.
5. **No exclamation marks. Ever.**
6. **No emoji in copy.** Emoji in tech chips or icons is fine; emoji in prose is unprofessional.
7. **Contractions are OK in About and Contact copy.** They read human. Avoid in project pitches and experience bullets.
8. **What the site does not say (protected for interviews):**
   - The exact evaluation methodology and edge cases for the LLM-as-judge work.
   - The failure modes discovered during multi-agent orchestration design.
   - The internal stakeholder dynamics behind the Voice AI vs SMS Agent evaluation.
   - The tradeoff conversations for the medallion architecture choices.
   - Anything covered by NDA — proprietary metrics, internal team names, unreleased product details.

## Content changes require CLAUDE.md alignment

If a section's word count grows past what's in this file, that's a red flag. Ask before adding. The whole document should read in under 90 seconds; if a recruiter is spending more time on your site than that, it's usually because they're already convinced and looking for a reason to reach out — not because they need convincing.

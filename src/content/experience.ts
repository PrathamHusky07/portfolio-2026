export type Experience = {
  title: string
  company: string
  location: string
  dates: string
  summary: string
}

export const experience: Experience[] = [
  {
    title: 'AI Engineer / Data Scientist',
    company: 'USA Today Co Inc',
    location: 'Texas, USA',
    dates: 'February 2025 — July 2026',
    summary:
      'Shipped a multi-agent keyword system on LangGraph, Gemini, and SBERT, containerized on Kubernetes. It serves ~1M+ daily queries at ~97% accuracy and cut ad spend by ~14%.',
  },
  {
    title: 'Analytics Engineer Co-op',
    company: 'Mimecast',
    location: 'Massachusetts, USA',
    dates: 'January 2024 — June 2024',
    summary:
      'Architected the AWS ETL/ELT foundation (Glue, Redshift, S3, dbt) that became the single source of truth for analytics and finance. Delivered $150K in annual savings and an 18% data accuracy lift.',
  },
  {
    title: 'Data Analytics Engineer',
    company: 'Standard Screws Pvt Ltd',
    location: 'Mumbai, India',
    dates: 'July 2020 — August 2022',
    summary:
      'Built the production ETL and CI/CD pipelines powering the operations and sales analytics stack. Cut infra spend by ~$20K through workload optimization. Forecasting pipelines improved planning accuracy by 25%.',
  },
  {
    title: 'Data Science Intern',
    company: 'Remark Skill Education',
    location: 'Delhi, India',
    dates: 'January 2020 — June 2020',
    summary:
      'Owned the modeling layer of a choice-based recommendation system built with a five-person team. Repeat visits rose 25%.',
  },
]

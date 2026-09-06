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
      'Shipped a multi-agent keyword system on LangGraph + Gemini + SBERT, containerized on Kubernetes, serving ~1M+ daily queries at ~97% accuracy and reducing ad spend by ~14%. Built the AI analytics platform behind it.',
  },
  {
    title: 'Analytics Engineer Co-op',
    company: 'Mimecast',
    location: 'Massachusetts, USA',
    dates: 'January 2024 — June 2024',
    summary:
      'Architected the AWS ETL/ELT foundation (Glue, Redshift, S3) that became the single reporting source for analytics and finance — $150K in annual savings, 18% data accuracy lift, dbt modeling across staging and mart layers.',
  },
  {
    title: 'Data Analytics Engineer',
    company: 'Standard Screws Pvt Ltd',
    location: 'Mumbai, India',
    dates: 'July 2020 — August 2022',
    summary:
      'Built the production ETL and CI/CD pipelines that ran the operations and sales analytics stack. Cut infra spend by ~$20K through workload optimization; forecasting pipelines improved planning accuracy by 25%.',
  },
  {
    title: 'Data Science Intern',
    company: 'Remark Skill Education',
    location: 'Delhi, India',
    dates: 'January 2020 — June 2020',
    summary:
      'Led a five-person team building a customer choice–based recommendation system. Repeat visits up 25%.',
  },
]

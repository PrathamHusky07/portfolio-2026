export type Metric = {
  value: string
  label: string
}

export type ProjectStatus = 'shipped' | 'in_progress'

export type Project = {
  title: string
  pitch: string
  status: ProjectStatus
  featured: boolean
  rank: number
  longPitch?: string
  metrics?: Metric[]
  tech: readonly string[]
  links: {
    github?: string
    live?: string
  }
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Intelligence Platform',
    pitch:
      'Databricks lakehouse with a LangGraph AI analyst agent, from ingestion to churn insight.',
    longPitch:
      'A production-grade lakehouse built on Databricks with medallion architecture, Unity Catalog governance, and automated data quality — processing 200K+ customer records across 5 business domains. On top of it, a LangGraph AI agent surfaces churn drivers to non-technical users through a Streamlit app, backed by Feast for feature management, MLflow for tracking (LightGBM, AUC 0.74), and Evidently for drift monitoring.',
    status: 'shipped',
    featured: true,
    rank: 1,
    metrics: [
      { value: '200K+', label: 'customer records' },
      { value: '5', label: 'business domains' },
      { value: 'AUC 0.74', label: 'model accuracy' },
    ],
    tech: [
      'Databricks',
      'LangGraph',
      'MLflow',
      'Feast',
      'Evidently',
      'Unity Catalog',
      'Streamlit',
      'LightGBM',
    ],
    links: {},
  },
  {
    title: 'Healthcare Compliance Investigation Engine',
    pitch:
      'Graph-native compliance investigations with a LangGraph agent over dbt-modeled canonical entities.',
    longPitch:
      'A compliance investigation engine that treats healthcare data as a graph, not a warehouse. dbt/DuckDB models canonical entities and relationships in a staging → mart pipeline; Neo4j stores the resulting graph; a LangGraph agent conducts multi-hop investigations against it. Next.js and FastAPI power the investigator-facing interface. Currently at Sprint 3, mart layer in progress.',
    status: 'in_progress',
    featured: true,
    rank: 2,
    metrics: [
      { value: 'Sprint 3', label: 'current phase' },
      { value: 'Complete', label: 'entity models' },
    ],
    tech: ['dbt', 'DuckDB', 'Neo4j', 'LangGraph', 'FastAPI', 'Next.js'],
    links: {},
  },
  {
    title: 'Career Crafter',
    pitch:
      'Retrieval-based job-info assistant with a containerized Airflow + FastAPI backend on AWS.',
    status: 'shipped',
    featured: true,
    rank: 3,
    tech: ['Airflow', 'Docker', 'AWS', 'FastAPI'],
    links: {
      github: 'https://github.com/PrathamHusky07/CareerCrafter',
    },
  },
  {
    title: 'Snowpark ML',
    pitch: 'ML pipelines running natively inside Snowflake via Snowpark, deployed on GCP.',
    status: 'shipped',
    featured: true,
    rank: 4,
    tech: ['Python', 'Snowflake', 'Snowpark', 'GCP'],
    links: {
      github: 'https://github.com/PrathamHusky07/SnowSQL-Streamline',
    },
  },
  {
    title: 'Boston Data Insights',
    pitch: 'Exploratory analysis and predictive modeling on the Boston housing dataset.',
    status: 'shipped',
    featured: true,
    rank: 5,
    tech: ['Pandas', 'Scikit-Learn', 'Plotly'],
    links: {
      github: 'https://github.com/PrathamHusky07/BostonDataPrediction',
    },
  },
]

export type TechGroup = {
  category: string
  items: readonly string[]
}

export const tech: readonly TechGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'R'],
  },
  {
    category: 'GenAI & LLMs',
    items: [
      'LangGraph',
      'LangChain',
      'Gemini',
      'Vertex AI',
      'Hugging Face',
      'OpenAI',
    ],
  },
  {
    category: 'ML & Modeling',
    items: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'TensorFlow'],
  },
  {
    category: 'MLOps & Infrastructure',
    items: [
      'Databricks',
      'MLflow',
      'Feast',
      'dbt',
      'Docker',
      'Airflow',
      'PySpark',
      'FastAPI',
      'Kubernetes',
      'AWS',
      'GCP',
    ],
  },
  {
    category: 'BI & Analytics',
    items: ['Snowflake', 'BigQuery', 'Redshift', 'Tableau', 'Power BI', 'Looker'],
  },
]

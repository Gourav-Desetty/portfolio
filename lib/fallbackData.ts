import { SiteData } from '@/types'

export const fallbackData: SiteData = {
  name: 'Gourav Desetty',
  tagline: 'AI/ML Engineer & Software Developer — building intelligent systems with purpose. CSE student at ITER, SOA University.',
  eyebrow: 'Available for opportunities',
  email: 'dg.kgp10@gmail.com',
  github: 'https://github.com/Gourav-Desetty',
  linkedin: 'https://www.linkedin.com/in/gourav-desetty-828946201/',
  twitter: 'https://x.com/gourav_dg',
  leetcode: 'https://leetcode.com/u/user3174Uq/',
  photo: null,
  aboutHeading: 'Build. Learn. Repeat.',
  aboutBio: [
    'Hello! I\'m <strong>Gourav</strong>, a Computer Science and Engineering student at ITER, SOA University, Bhubaneswar. My journey in tech spans <strong>machine learning</strong>, <strong>web development</strong>, and <strong>artificial intelligence</strong>.',
    'I have a knack for keyboards — both musical and coding. When I\'m not immersed in books, you\'ll find me playing football or exploring new tools at the intersection of AI and software engineering.',
    'I\'m here to push boundaries, foster growth, and bring ideas to life through meaningful innovation. My journey is driven by purpose — and shared with others.',
  ],
  aboutQuote: 'Let\'s make progress possible.',
  traits: [
    { icon: '🚀', title: 'Learn Fast, Build Faster', description: 'Rapid prototyping from idea to working system with modern tools and frameworks.' },
    { icon: '🔧', title: 'Build with Intent', description: 'Every system is designed with a clear purpose — clean, maintainable, and scalable.' },
    { icon: '📈', title: 'Real-World Value', description: 'Projects that solve actual problems — from medical diagnostics to MLOps pipelines.' },
    { icon: '🧠', title: 'Stay Curious', description: 'Continuously exploring the frontier of AI, deep learning, and software engineering.' },
  ],
  skills: [
    { category: 'Languages', tags: ['Python', 'Java', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS'] },
    { category: 'AI / ML / DL', tags: ['PyTorch', 'Transformers', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV'] },
    { category: 'Frameworks & Libraries', tags: ['FastAPI', 'Flask', 'LangChain', 'LangGraph', 'Pandas', 'BeautifulSoup', 'Streamlit'] },
    { category: 'DevOps & Tools', tags: ['Docker', 'Git', 'MLflow', 'Prometheus', 'Grafana', 'DagsHub'] },
    { category: 'Databases & Vector Stores', tags: ['PostgreSQL', 'MySQL', 'Pinecone', 'FAISS', 'Qdrant', 'ChromaDB'] },
    { category: 'Coursework', tags: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Machine Learning', 'Computer Networks'] },
  ],
  projects: [
    {
      number: '01',
      title: 'Acute Lymphoblastic Leukemia CNN Pipeline',
      description: 'End-to-end medical diagnostic system classifying 10,661 blood smear images using fine-tuned DenseNet-121, with LangChain-powered auto-generated clinical reports.',
      highlights: [
        '92.5% accuracy, 0.978 ROC-AUC on imbalanced dataset',
        'Weighted loss functions to handle 7:3 class imbalance',
        'NLP module converts inference outputs to medical reports',
      ],
      tags: ['PyTorch', 'DenseNet', 'LangChain'],
      githubUrl: 'https://github.com/Gourav-Desetty/Acute-Lymphomatic-Leukemia_CNN',
    },
    {
      number: '02',
      title: 'Model Drift Monitoring System',
      description: 'Reusable MLOps observability framework tracking 10K+ inferences with statistical drift detection, real-time Prometheus metrics, and a modular Streamlit dashboard.',
      highlights: [
        'KS-Test drift detection exposed via FastAPI',
        'Grafana dashboards with retraining alerts',
        'Qdrant vector DB for embedding storage',
      ],
      tags: ['Evidently AI', 'Prometheus', 'Grafana'],
      githubUrl: 'Grafana',
    },
    {
      number: '03',
      title: 'Network Security MLOps Pipeline',
      description: 'Modular MLOps pipeline for phishing detection on 10K+ samples, with automated data validation, MLflow experiment tracking, and fully containerized deployment.',
      highlights: [
        'Best F1: 0.94 across Random Forest, GBM, AdaBoost',
        'Scipy KS-Test for schema drift detection',
        'Docker containerization for reproducible deployments',
      ],
      tags: ['MLflow', 'MongoDB', 'Docker'],
      githubUrl: 'https://github.com/Gourav-Desetty/NetworkSecurity',
    },
  ],
  contactHeading: 'Connect',
  contactSub: 'Always open to interesting conversations, collaborations, and new opportunities. Reach out anytime.',
}

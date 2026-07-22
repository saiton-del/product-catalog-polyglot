🛍️ Product Catalog Polyglot
MongoDB Redis PostgreSQL pgvector License
📖 Project Overview
This project demonstrates a polyglot persistence architecture for an e-commerce product catalog using multiple database technologies, where each database is selected based on its strengths.
•	MongoDB stores flexible product documents.
•	Redis provides high-speed caching, leaderboards, and real-time messaging.
•	PostgreSQL with pgvector enables semantic product search using vector embeddings.
The project illustrates how different databases can work together to improve performance, scalability, and user experience.
________________________________________
🏗️ Repository Structure
product-catalog-polyglot/

├── mongodb/
│   ├── products_seed.js
│   ├── product_filters.js
│   └── aggregation_pipeline.js
│
├── redis/
│   ├── cache_commands.txt
│   ├── leaderboard_commands.txt
│   └── pubsub_commands.txt
│
├── pgvector/
│   ├── pgvector_setup.sql
│   └── semantic_search.sql
│
├── docs/
│   ├── architecture.md
│   ├── mongodb_results.md
│   ├── redis_results.md
│   ├── vector_search_results.md
│   └── reflection.md
│
└── README.md
________________________________________
🚀 Technologies Used
•	MongoDB
•	Redis
•	PostgreSQL
•	pgvector
•	MongoDB Shell (mongosh)
•	Redis CLI
•	SQL
________________________________________
⚙️ Prerequisites
Install the following software before running the project:
•	MongoDB Community Server
•	PostgreSQL
•	pgvector extension
•	Redis Server
•	Git
________________________________________
📥 Installation
1. Clone the repository
git clone https://github.com/<your-username>/product-catalog-polyglot.git

cd product-catalog-polyglot
________________________________________
2. MongoDB
Start MongoDB
mongod
Open Mongo Shell
mongosh
Run the seed script
load("mongodb/products_seed.js")
Run the queries
load("mongodb/product_filters.js")

load("mongodb/aggregation_pipeline.js")
________________________________________
3. Redis
Start Redis
redis-server
Open Redis CLI
redis-cli
Execute the commands contained in:
•	redis/cache_commands.txt
•	redis/leaderboard_commands.txt
•	redis/pubsub_commands.txt
________________________________________
4. PostgreSQL
Enable pgvector
CREATE EXTENSION IF NOT EXISTS vector;
Run
psql -d postgres -f pgvector/pgvector_setup.sql

psql -d postgres -f pgvector/semantic_search.sql
________________________________________
📊 Features
MongoDB
•	Product catalog
•	Product filtering
•	Aggregation pipeline
•	Average ratings by category
Redis
•	Product count cache
•	Cache expiration (TTL)
•	Price leaderboard
•	Pub/Sub messaging
PostgreSQL + pgvector
•	Vector embeddings
•	Cosine similarity search
•	Semantic product recommendations
________________________________________
📷 Sample Outputs
MongoDB Query
Nike Air Max
Price: $180

Coffee Maker
Price: $150

Adidas Hoodie
Price: $75
________________________________________
Redis Leaderboard
1. Dell XPS 13          1299

2. iPhone 15             999

3. Samsung Galaxy S24    899

4. HP Pavilion           799

5. Standing Desk         450
________________________________________
Semantic Search
Query Vector
[0.85,0.15,0.05]
Most Similar Products
Product	Distance
iPhone 15	0.01
Samsung Galaxy S24	0.03
________________________________________
🏛️ Architecture
                +----------------------+
                |      Client App      |
                +----------+-----------+
                           |
        +------------------+------------------+
        |                  |                  |
        ▼                  ▼                  ▼
+---------------+   +---------------+   +--------------------+
|   MongoDB     |   |     Redis     |   | PostgreSQL +       |
| Product Store |   | Cache & PubSub|   | pgvector           |
+---------------+   +---------------+   +--------------------+
        |                  |                  |
        +------------------+------------------+
                           |
                           ▼
                   Product Catalog API
________________________________________
📚 Learning Outcomes
This project demonstrates:
•	Document databases
•	Aggregation pipelines
•	Redis caching
•	Redis Sorted Sets
•	Redis Pub/Sub
•	Vector databases
•	Semantic search
•	Polyglot persistence
________________________________________
📄 Documentation
Detailed explanations and outputs are available in the docs/ directory.
________________________________________
👤 Author
Saiton
GitHub: https://github.com/saiton-del

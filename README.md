Product Catalog Polyglot
Overview

This project demonstrates a polyglot persistence architecture using three database technologies, each serving a specific purpose:

MongoDB for storing and querying product catalog data.
Redis for caching, leaderboards, and real-time Pub/Sub messaging.
PostgreSQL with pgvector for semantic similarity search using vector embeddings.

The project showcases how multiple databases can work together to build a scalable and efficient e-commerce application.

Repository Structure
mongodb/ – Product seed data, queries, and aggregation pipeline.
redis/ – Caching, leaderboard, and Pub/Sub commands.
pgvector/ – Database setup and semantic search queries.
docs/ – Architecture, results, and project reflection.
README.md – Project overview and setup guide.
Setup
Create the MongoDB database and run the seed script.
Start Redis and execute the cache, leaderboard, and Pub/Sub commands.
Enable the pgvector extension in PostgreSQL and run the SQL scripts.
Review the documentation in the docs/ folder for outputs and explanations.
Technologies
MongoDB
Redis
PostgreSQL
pgvector
Learning Outcomes

This project demonstrates document storage, aggregation, caching, sorted sets, publish/subscribe messaging, vector similarity search, and the benefits of using multiple databases for different application requirements

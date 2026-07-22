CREATE EXTENSION IF NOT EXISTS vector;

DROP TABLE IF EXISTS product_vectors;

CREATE TABLE product_vectors (
  product_id INTEGER PRIMARY KEY,
  product_name TEXT NOT NULL,
  description TEXT NOT NULL,
  embedding vector(3) NOT NULL
);

INSERT INTO product_vectors (product_id, product_name, description, embedding)
VALUES
  (1, 'Wireless Noise-Canceling Headphones', 'wireless audio and travel listening', '[0.90, 0.10, 0.05]'),
  (2, 'Smartphone 128GB', 'mobile phone with connected features', '[0.80, 0.20, 0.10]'),
  (3, 'Ultrabook Laptop', 'portable computer for productive work', '[0.70, 0.25, 0.15]'),
  (4, 'Ceramic Pour-Over Set', 'manual coffee brewing equipment', '[0.10, 0.80, 0.60]'),
  (5, 'Trail Running Shoes', 'outdoor footwear for running', '[0.20, 0.70, 0.65]');

-- Optional index for larger catalogs:
-- CREATE INDEX product_vectors_embedding_idx
-- ON product_vectors USING hnsw (embedding vector_cosine_ops);

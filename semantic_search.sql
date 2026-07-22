SELECT
  product_id,
  product_name,
  description,
  embedding <=> '[0.85, 0.15, 0.05]'::vector AS cosine_distance
FROM product_vectors
ORDER BY embedding <=> '[0.85, 0.15, 0.05]'::vector
LIMIT 2;

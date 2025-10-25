-- Script simplificado para inicializar o campo 'order' nos produtos existentes
-- Execute este script no seu cliente MySQL (phpMyAdmin, MySQL Workbench, etc.)

-- Atualizar produtos da categoria 'aaaaa'
SET @row_num = 0;
UPDATE products 
SET `order` = (@row_num := @row_num + 1) - 1
WHERE category = 'aaaaa'
ORDER BY product_id;

-- Atualizar produtos da categoria 'Saladas'
SET @row_num = 0;
UPDATE products 
SET `order` = (@row_num := @row_num + 1) - 1
WHERE category = 'Saladas'
ORDER BY product_id;

-- Atualizar produtos da categoria 'teste'
SET @row_num = 0;
UPDATE products 
SET `order` = (@row_num := @row_num + 1) - 1
WHERE category = 'teste'
ORDER BY product_id;

-- Para outras categorias, execute este padrão:
-- SET @row_num = 0;
-- UPDATE products 
-- SET `order` = (@row_num := @row_num + 1) - 1
-- WHERE category = 'NOME_DA_CATEGORIA'
-- ORDER BY product_id;

-- Verificar os resultados
SELECT product_id, name, category, `order` 
FROM products 
ORDER BY category, `order`;

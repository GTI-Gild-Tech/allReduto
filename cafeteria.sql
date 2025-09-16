-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: cafeteria
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `cart_item_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cart_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `qty` int unsigned NOT NULL,
  `unit_price_cents` int unsigned NOT NULL,
  `total_cents` int unsigned GENERATED ALWAYS AS ((`qty` * `unit_price_cents`)) STORED,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `cart_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` bigint unsigned DEFAULT NULL,
  `status` enum('active','abandoned','converted') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(120) NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (8,'teste','uKP7HneBqj',1,'2025-09-09 23:55:38','2025-09-09 23:55:38'),(14,'Saladas','saladas',1,'2025-09-16 00:10:48','2025-09-16 00:10:48');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customer_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `table_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Maria',NULL,NULL,'2025-09-10 03:12:20','2025-09-10 03:12:20','3',NULL),(2,'Maria',NULL,NULL,'2025-09-10 03:20:54','2025-09-10 03:20:54','3',NULL),(3,'Maria',NULL,NULL,'2025-09-10 03:21:46','2025-09-10 03:21:46','3',NULL),(4,'Maria',NULL,NULL,'2025-09-10 03:34:09','2025-09-10 03:34:09','3',NULL),(5,'Pedro',NULL,NULL,'2025-09-10 03:41:44','2025-09-10 03:41:44','4',NULL),(6,'joao',NULL,NULL,'2025-09-10 21:50:38','2025-09-10 21:50:38','3',NULL),(7,'ju',NULL,NULL,'2025-09-11 00:57:46','2025-09-11 00:57:46','8',NULL),(8,'João',NULL,NULL,'2025-09-11 02:28:20','2025-09-11 02:28:20','2',NULL),(9,'anderson',NULL,NULL,'2025-09-11 03:01:51','2025-09-11 03:01:51','3',NULL),(10,'ANA',NULL,NULL,'2025-09-11 06:10:40','2025-09-11 06:10:40','1',NULL),(11,'juao',NULL,NULL,'2025-09-12 03:14:33','2025-09-12 03:14:33','3',NULL),(12,'juao',NULL,NULL,'2025-09-12 03:25:54','2025-09-12 03:25:54','3',NULL),(13,'juao',NULL,NULL,'2025-09-12 03:35:45','2025-09-12 03:35:45','3',NULL),(14,'eu',NULL,NULL,'2025-09-12 03:58:47','2025-09-12 03:58:47','4',NULL),(15,'paulo',NULL,NULL,'2025-09-12 03:59:27','2025-09-12 03:59:27','45',NULL),(16,'pra ser 60',NULL,NULL,'2025-09-12 04:00:19','2025-09-12 04:00:19','2',NULL),(17,'pra ser 40',NULL,NULL,'2025-09-12 04:04:18','2025-09-12 04:04:18','6',NULL),(18,'24 ne',NULL,NULL,'2025-09-12 04:06:29','2025-09-12 04:06:29','5',NULL),(19,'temdeserbiba',NULL,NULL,'2025-09-12 04:13:51','2025-09-12 04:13:51','10',NULL),(20,'seras que ele e',NULL,NULL,'2025-09-12 04:23:28','2025-09-12 04:23:28','3',NULL),(21,'Cesar',NULL,NULL,'2025-09-12 04:25:14','2025-09-12 04:25:14','4',NULL),(22,'TDS2',NULL,NULL,'2025-09-12 04:43:00','2025-09-12 04:43:00','6',NULL),(23,'dfd',NULL,NULL,'2025-09-12 04:48:52','2025-09-12 04:48:52','4',NULL),(24,'dfd',NULL,NULL,'2025-09-12 04:49:25','2025-09-12 04:49:25','4',NULL),(25,'alana',NULL,NULL,'2025-09-12 04:51:50','2025-09-12 04:51:50','8',NULL),(26,'alana',NULL,NULL,'2025-09-12 04:55:28','2025-09-12 04:55:28','8',NULL),(27,'g',NULL,NULL,'2025-09-12 05:01:12','2025-09-12 05:01:12','1',NULL),(28,'g',NULL,NULL,'2025-09-12 19:40:37','2025-09-12 19:40:37','3',NULL),(29,'more2',NULL,NULL,'2025-09-13 00:15:53','2025-09-13 00:15:53','2',NULL),(30,'Ilca',NULL,NULL,'2025-09-13 02:55:51','2025-09-13 02:55:51','5',NULL),(31,'Anderson',NULL,NULL,'2025-09-13 02:57:25','2025-09-13 02:57:25','3',NULL),(32,'serggio',NULL,NULL,'2025-09-13 13:36:14','2025-09-13 13:36:14','8',NULL),(33,'ELEONO',NULL,NULL,'2025-09-14 21:17:12','2025-09-14 21:17:12','9',NULL),(34,'João',NULL,NULL,'2025-09-15 01:21:59','2025-09-15 01:21:59','2',NULL),(35,'weslei',NULL,NULL,'2025-09-15 19:47:37','2025-09-15 19:47:37','56',NULL),(36,'yuri',NULL,NULL,'2025-09-15 21:28:47','2025-09-15 21:28:47','7',NULL),(37,'teeeste',NULL,NULL,'2025-09-15 23:43:44','2025-09-15 23:43:44','2',NULL),(38,'doistamanhos',NULL,NULL,'2025-09-15 23:44:42','2025-09-15 23:44:42','34',NULL),(39,'Superpedido',NULL,NULL,'2025-09-15 23:58:46','2025-09-15 23:58:46','1',NULL),(40,'porcao',NULL,NULL,'2025-09-16 00:01:08','2025-09-16 00:01:08','4',NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_item_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `quantity` int unsigned NOT NULL,
  `unit_price_cents` int unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `total_cents` int GENERATED ALWAYS AS ((`quantity` * `unit_price_cents`)) VIRTUAL,
  `size` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`order_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `quantity`, `unit_price_cents`, `created_at`, `updated_at`, `size`) VALUES (1,1,5,2,500,'2025-09-10 02:04:50','2025-09-10 02:04:50',NULL),(2,1,5,2,500,'2025-09-10 02:05:03','2025-09-10 02:05:03',NULL),(3,9,7,2,200,'2025-09-10 02:09:28','2025-09-10 02:09:28',NULL),(4,10,7,2,200,'2025-09-10 02:14:49','2025-09-10 02:14:49',NULL),(5,11,7,2,200,'2025-09-10 02:16:24','2025-09-10 02:16:24',NULL),(6,12,7,2,200,'2025-09-10 02:27:22','2025-09-10 02:27:22',NULL),(7,13,7,2,200,'2025-09-10 03:34:09','2025-09-10 03:34:09',NULL),(8,14,7,1,100,'2025-09-10 03:41:44','2025-09-10 03:41:44',NULL),(9,15,5,30,3000,'2025-09-10 21:50:38','2025-09-10 21:50:38',NULL),(10,16,5,1,3000,'2025-09-11 00:57:46','2025-09-11 00:57:46',NULL),(11,17,7,1,100,'2025-09-11 02:28:20','2025-09-11 02:28:20',NULL),(12,18,5,2,3000,'2025-09-11 03:01:51','2025-09-11 03:01:51',NULL),(40,49,26,1,2300,'2025-09-15 23:44:42','2025-09-15 23:44:42','M'),(41,49,26,1,4400,'2025-09-15 23:44:42','2025-09-15 23:44:42','G'),(42,50,27,1,4500,'2025-09-15 23:58:46','2025-09-15 23:58:46','M'),(43,50,27,1,4300,'2025-09-15 23:58:46','2025-09-15 23:58:46','G'),(44,50,27,1,3400,'2025-09-15 23:58:46','2025-09-15 23:58:46','P'),(45,50,26,1,2300,'2025-09-15 23:58:46','2025-09-15 23:58:46','M'),(46,50,26,1,4400,'2025-09-15 23:58:46','2025-09-15 23:58:46','G'),(47,50,22,1,1000,'2025-09-15 23:58:46','2025-09-15 23:58:46','Único');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cart_id` bigint unsigned DEFAULT NULL,
  `customer_id` bigint unsigned DEFAULT NULL,
  `status` enum('pending','processing','delivered','shipped','canceled') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'pending',
  `subtotal_cents` int unsigned NOT NULL DEFAULT '0',
  `discount_cents` int unsigned NOT NULL DEFAULT '0',
  `tax_cents` int unsigned NOT NULL DEFAULT '0',
  `total_cents` int unsigned NOT NULL DEFAULT '0',
  `is_loyalty_counted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `paid_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `total_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (49,NULL,38,'pending',0,0,0,0,0,'2025-09-15 23:44:42',NULL,'2025-09-15 23:44:42',67.00),(50,NULL,39,'pending',0,0,0,0,0,'2025-09-15 23:58:46',NULL,'2025-09-15 23:58:46',199.00);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(140) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `category` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `uniquePrice` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sizes` json DEFAULT NULL,
  `stock_qty` int DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `imageUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Café Expresso','Um café encorpado e saboroso','café','5.5',NULL,NULL,1,'2025-09-08 03:57:53','2025-09-08 03:57:53',NULL),(22,'salada1','','teste','','[{\"size\": \"Único\", \"price\": \"10\"}]',0,1,'2025-09-15 01:21:35','2025-09-15 20:14:50','/uploads/1757967290762-126918232.png'),(23,'tsf','tsf','testes fotos','','[{\"size\": \"M\", \"price\": \"7\"}, {\"size\": \"G\", \"price\": \"7\"}]',0,1,'2025-09-15 19:44:17','2025-09-15 19:44:17',NULL),(24,'teeeeeeeeeeeeeeste','hghg','testes fotos','0.00','[{\"size\": \"M\", \"price\": \"6\"}, {\"size\": \"G\", \"price\": \"6\"}]',0,1,'2025-09-15 19:47:09','2025-09-15 19:47:09','/uploads/1757965629263-653567487.png'),(29,'saladinha','saladinhas','Saladas','0.00','[{\"size\": \"G\", \"price\": \"12\"}]',0,1,'2025-09-16 00:11:25','2025-09-16 00:11:25','/uploads/1757981485330-946635913.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20250910010239-add-total-price-to-orders.js'),('XXXXXXXXXX-add-imageUrl-to-products.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-16 19:07:29

-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	8.0.26


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema testdb
--

CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

--
-- Definition of table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`,`category`) VALUES 
 (1,'Terror'),
 (2,'Actions'),
 (3,'Documentaries');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;


--
-- Definition of table `content`
--

DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `content`
--

/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` (`id`,`content`,`description`) VALUES 
 (1,'https://www.youtube.com/watch?v=Xxq2famrigM','video 1'),
 (2,'https://www.youtube.com/watch?v=OqJxXtKu__I','video 2'),
 (3,'https://www.youtube.com/watch?v=fZMRc-UyPm0','video 3'),
 (4,'https://www.youtube.com/watch?v=RljdPIfnp0U','video 4');
/*!40000 ALTER TABLE `content` ENABLE KEYS */;


--
-- Definition of table `contentcategory`
--

DROP TABLE IF EXISTS `contentcategory`;
CREATE TABLE `contentcategory` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `contentid` int NOT NULL,
  PRIMARY KEY (`categoryid`,`contentid`),
  KEY `FK_contentcategory_content` (`contentid`),
  CONSTRAINT `FK_contentcategory_category` FOREIGN KEY (`categoryid`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_contentcategory_content` FOREIGN KEY (`contentid`) REFERENCES `content` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contentcategory`
--

/*!40000 ALTER TABLE `contentcategory` DISABLE KEYS */;
INSERT INTO `contentcategory` (`categoryid`,`contentid`) VALUES 
 (1,1),
 (2,1),
 (1,2);
/*!40000 ALTER TABLE `contentcategory` ENABLE KEYS */;


--
-- Definition of table `contentuser`
--

DROP TABLE IF EXISTS `contentuser`;
CREATE TABLE `contentuser` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `contentid` int NOT NULL,
  PRIMARY KEY (`userid`,`contentid`),
  KEY `FK_contentuser_content` (`contentid`),
  CONSTRAINT `FK_contentuser_content` FOREIGN KEY (`contentid`) REFERENCES `content` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_contentuser_user` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contentuser`
--

/*!40000 ALTER TABLE `contentuser` DISABLE KEYS */;
INSERT INTO `contentuser` (`userid`,`contentid`) VALUES 
 (1,2);
/*!40000 ALTER TABLE `contentuser` ENABLE KEYS */;


--
-- Definition of table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `document` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`,`username`,`password`,`document`,`name`) VALUES 
 (1,'john095@h.com','123456','3838360','John Ríos'),
 (2,'hack095@g.com','1234567','3838360','Hack. Ríos'),
 (5,'john0905@h.com','123456d','3838360','john h'),
 (6,'eminem095@hotmail.com','123456','3838360','john t');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

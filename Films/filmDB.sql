SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

CREATE DATABASE IF NOT EXISTS `filmDB` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `filmDB`;

CREATE TABLE IF NOT EXISTS `film` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `year` varchar(4) NOT NULL,
  `duration` varchar(3) NOT NULL,
  `color` varchar(20) NOT NULL,
  `audio` varchar(10) NOT NULL,
  `category` varchar(200) NOT NULL,
  `direction` varchar(40) NOT NULL,
  `actors` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

INSERT INTO `film` (`id`, `title`, `year`, `duration`, `color`, `audio`, `category`, `direction`, `actors`) VALUES
(1, 'Interstellar', '2014', '169', 'Colore', 'Sonoro', 'Avventura,Drammatico,Fantascienza', 'Christopher Nolan', 'Matthew McConaughey,\r\nAnne Hathaway,\r\nJessica Chastain,\r\nMichael Caine.'),
(2, 'Gravity', '2013', '90', 'Colore', 'Sonoro', 'Avventura,Drammatico,Fantascienza,Thriller', 'Alfonso Cuarón', 'Sandra Bullock,\r\nGeorge Clooney.'),
(3, 'The Green Mile', '1999', '182', 'Colore', 'Sonoro', 'Drammatico,Fantasy', 'Frank Darabont', 'Tom Hanks,\nDavid Morse,\nMichael Clarke Duncan,\nBonnie Hunt,\nJames Cromwell.'),
(4, 'Forrest Gump', '1994', '136', 'Colore', 'Sonoro', 'Commedia,Drammatico', 'Robert Zemeckis', 'Tom Hanks,\nRobin Wright,\nGary Sinise,\nSally Field.'),
(5, 'Blade Runner', '1982', '117', 'Colore', 'Sonoro', 'Fantascienza,Thriller', 'Ridley Scott', 'Harrison Ford,\nRutger Hauer,\nSean Young,\nDaryl Hannah.'),
(6, 'Brazil', '1985', '132', 'Colore', 'Sonoro', 'undefined', 'Terry Gilliam', 'Jonathan Pryce,\nIan Holm,\nRobert De Niro,\nKatherine Helmond,\nJim Broadbent.'),
(7, 'C''era una volta il West', '1968', '165', 'Colore', 'Sonoro', 'Avventura,Western', 'Sergio Leone', 'Claudia Cardinale,\nHenry Fonda,\nJason Robards,\nCharles Bronson.'),
(8, 'Pulp Fiction', '1994', '154', 'Colore', 'Sonoro', 'Commedia,Drammatico,Thriller', 'Quentin Tarantino', 'John Travolta,\r\nSamuel L. Jackson,\r\nUma Thurman,\r\nTim Roth,\r\nBruce Willis.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

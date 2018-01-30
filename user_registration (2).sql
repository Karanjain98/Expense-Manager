-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2017 at 07:59 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_registration`
--

-- --------------------------------------------------------

--
-- Table structure for table `expense_detail`
--

CREATE TABLE `expense_detail` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `amount` int(12) NOT NULL,
  `expense_detail` varchar(255) NOT NULL,
  `time` varchar(20) NOT NULL
) ENGINE=InnoDB ;

--
-- Dumping data for table `expense_detail`
--

INSERT INTO `expense_detail` (`id`, `username`, `amount`, `expense_detail`, `time`) VALUES
(3, 'karan', 12000, 'salary workers', 'Wed Dec 13 2017'),
(9, 'admin', 1300, 'Drinks', 'Wed Dec 06 2017'),
(9, 'admin', 12000, 'YES', 'Wed Dec 06 2017'),
(10, 'user', 800, 'Gifts', 'Sat Dec 23 2017'),
(9, 'admin', 14000, 'Vegetables', 'Sun Dec 24 2017');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(3, 'karan', 'karan@gmail.com', 'karan'),
(4, 'tanuj', 'tanuj@hotmail.com', 'tanuj'),
(5, 'devika', 'devika@outlook.com', 'devika'),
(6, '789', '789', '789'),
(7, '', '', 'op'),
(8, 'rahul', 'rahul@gmail.com', 'rahul'),
(9, 'admin', 'admin@gmail.com', 'admin'),
(10, 'user', 'user@gmail.com', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

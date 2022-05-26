-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2019 at 03:56 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `daily`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dep_id` int(11) NOT NULL,
  `dep_name` text NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `del` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dep_id`, `dep_name`, `description`, `created`, `del`) VALUES
(1, 'Engineering Department', 'The Engineering Department is responsible for planning, analyzing and implementing system extension projects; planning, design, and construction of major facility replacements; capital improvement projects; continuing improvements to water system standards; and technical assistance to other departments and to outside agencies.', '2019-04-02 09:34:13', 0),
(2, 'Finance and Business Services', 'The Finance and Business Services Department is responsible for:\r\nCustomer service\r\nMeter services   Accounting   Investments\r\nInformation technology Purchasing\r\nCollections and claims', '2019-04-10 14:03:55', 0),
(3, 'hello', 'lksdjfafjdfjl;ads\r\n\r\n\r\n\r\n', '2019-04-10 13:44:15', 1),
(4, 'Helo', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2019-04-10 23:57:03', 0);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `equipment_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `brand` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `del` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipment_id`, `name`, `brand`, `created`, `del`) VALUES
(1, 'All in One', 'HP', '2019-04-03 06:00:00', 0),
(2, 'Printer', 'HP', '2019-04-01 06:00:00', 0),
(3, 'Scanner', 'HP', '2019-03-01 06:00:00', 0),
(4, 'Desktop', 'Dell', '2019-03-01 06:00:00', 0),
(5, 'Switch/Router', 'Cisco', '2019-03-01 06:00:00', 0),
(6, 'Others', '', '2019-03-01 06:00:00', 0),
(7, 'Polio', 'Tesla', '2019-04-10 13:04:03', 1);

-- --------------------------------------------------------

--
-- Table structure for table `p_type`
--

CREATE TABLE `p_type` (
  `p_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `del` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `p_type`
--

INSERT INTO `p_type` (`p_id`, `name`, `description`, `created`, `del`) VALUES
(1, 'Software', 'The problem lies in the software,meaning that there is a problem with the program or data, not with the computer itself.', '2019-04-01 05:00:00', 0),
(2, 'Hardware', 'refers to the physical elements of a computer.', '2019-04-01 15:00:00', 0),
(3, 'Network', 'systematic process that aims to resolve problems and restore normal network operations within the network.', '2019-04-02 06:16:00', 0),
(4, 'Power', 'A power outage (also called a power cut, a power out, a power blackout, power failure or a blackout) is a short-term or a long-term loss of the electric power to a particular area', '2019-03-01 06:00:00', 0),
(5, 'Other', '', '2019-04-03 09:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role` text NOT NULL,
  `del` int(2) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role`, `del`, `created`) VALUES
(1, 'Admin', 0, '2019-04-01 08:00:00'),
(2, 'Officer', 0, '2019-04-02 12:00:00'),
(3, 'User', 0, '2019-04-01 08:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `solution`
--

CREATE TABLE `solution` (
  `s_id` int(11) NOT NULL,
  `p_description` varchar(1000) NOT NULL,
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `equipment_id` int(11) NOT NULL,
  `dep_id` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user` varchar(30) NOT NULL,
  `s_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `solution`
--

INSERT INTO `solution` (`s_id`, `p_description`, `role_id`, `user_id`, `p_id`, `equipment_id`, `dep_id`, `created`, `user`, `s_description`) VALUES
(1, 'No Internet Access', 2, 2, 3, 1, 2, '2019-01-03 03:22:00', 'Mrs Efuah', 'Rejoined the computer to the domain'),
(2, 'Power', 2, 2, 3, 3, 1, '2019-02-10 21:36:11', 'Efo', 'Turn on'),
(3, 'No internet access', 3, 3, 1, 3, 1, '2019-03-15 20:44:47', 'Nick', 'Rejoin to domain'),
(4, 'No internet access', 2, 2, 2, 5, 1, '2019-04-11 13:51:38', 'Nick', 'Rejoin to domain'),
(5, 'Power', 3, 3, 5, 4, 2, '2019-04-25 20:45:04', 'Mrs Efuah', 'Rejoin to domain'),
(6, 'Unable to contact the printer over the network', 1, 1, 3, 2, 2, '2019-05-15 20:47:02', 'Efo', 'troubleshoot the printer');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(70) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `del` int(2) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `firstname`, `lastname`, `username`, `password`, `created`, `del`, `role_id`) VALUES
(1, 'Joshua', 'Appiah', 'joedm', 'YTFiYzc5NjQ2ZmFkOTU0MDM4NDAxOTMwNGI2OTlhODA=', '2019-04-10 15:43:30', 0, 1),
(2, 'Qwaku', 'Nii', 'ghost', 'YTFiYzc5NjQ2ZmFkOTU0MDM4NDAxOTMwNGI2OTlhODA=', '2019-04-10 15:50:40', 0, 2),
(3, 'Emma', 'Emma', 'emba', 'YTFiYzc5NjQ2ZmFkOTU0MDM4NDAxOTMwNGI2OTlhODA=', '2019-04-11 00:33:00', 0, 3),
(4, 'Kofi', 'Kofi', 'kofi', 'YTFiYzc5NjQ2ZmFkOTU0MDM4NDAxOTMwNGI2OTlhODA=', '2019-04-11 00:07:19', 0, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dep_id`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`equipment_id`);

--
-- Indexes for table `p_type`
--
ALTER TABLE `p_type`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `solution`
--
ALTER TABLE `solution`
  ADD PRIMARY KEY (`s_id`),
  ADD KEY `role_id` (`role_id`,`user_id`,`p_id`,`equipment_id`,`dep_id`),
  ADD KEY `p_id` (`p_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `equipment_id` (`equipment_id`),
  ADD KEY `dep_id` (`dep_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dep_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `equipment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `p_type`
--
ALTER TABLE `p_type`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `solution`
--
ALTER TABLE `solution`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `solution`
--
ALTER TABLE `solution`
  ADD CONSTRAINT `solution_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `p_type` (`p_id`),
  ADD CONSTRAINT `solution_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `solution_ibfk_3` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`equipment_id`),
  ADD CONSTRAINT `solution_ibfk_4` FOREIGN KEY (`dep_id`) REFERENCES `department` (`dep_id`),
  ADD CONSTRAINT `solution_ibfk_5` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

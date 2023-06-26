

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_no` int(6) NOT NULL,
  `a_initials` varchar(5) NOT NULL,
  `a_surname` varchar(255) NOT NULL,
  `a_email` varchar(255) NOT NULL,
  `itsPin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_no`, `a_initials`, `a_surname`, `a_email`, `itsPin`) VALUES
(123444, 'ER', 'Thamaga', '123444@tut.ac.za', '$2a$10$0.5gBt9y9ALa9LTcz7qK..FKzcv52rgmN9iZh./xphySA.UMh7Oy6'),
(123455, 'DD', 'Sefako', '123455@tut.ac.za', '$2a$10$6CEgUQf/7N.Y9ke/G62qYeB3Arpiu/DA44DPbdigN18Azw5kf.bXu'),
(123456, 'AA', 'Molefe', '123456@tut.ac.za', '$2a$10$deUHfuK/cILz8CpTKOSeJOhIvLjmRhXctHL6TvUntEx/N7zCSpMUe');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_code` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `dep_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dep_name`) VALUES
(1, 'Computer Science'),
(2, 'Informatics');

-- --------------------------------------------------------

--
-- Table structure for table `evaluation`
--

CREATE TABLE `evaluation` (
  `evaluation_id` int(11) NOT NULL,
  `intern_questions` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evaluation`
--

INSERT INTO `evaluation` (`evaluation_id`, `intern_questions`) VALUES
(2233, 'Was your immediate supervisor of assistance in your developing an\r\neffective relationship with co-workers?'),
(2234, 'Did he/she appear interested in you as an individual?'),
(2235, 'Did he/she give or provide for adequate training?'),
(2236, 'Did he/she motivate you to improve yourself?\r\n'),
(2237, 'Did you receive adequate instruction or assistance from your supervisor\r\nin the conduct of your work?'),
(2238, 'Would you recommend that future students receive training at this\r\ncompany?'),
(2239, 'The job satisfaction was positive.'),
(2240, 'The overall impression of the work experience was good.');

-- --------------------------------------------------------

--
-- Table structure for table `evaluation_criteria`
--

CREATE TABLE `evaluation_criteria` (
  `criteria_id` int(11) NOT NULL,
  `student_no` int(11) NOT NULL,
  `wilCoord_id` int(11) NOT NULL,
  `evaluation_id` int(11) NOT NULL,
  `intern_criteria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evaluation_criteria`
--

INSERT INTO `evaluation_criteria` (`criteria_id`, `student_no`, `wilCoord_id`, `evaluation_id`, `intern_criteria`) VALUES
(3, 218049799, 2, 2234, 'Seldom'),
(4, 218049799, 2, 2235, 'Always'),
(5, 218049799, 2, 2233, 'Frequently'),
(6, 218012345, 3, 2234, 'Always'),
(7, 218012345, 2, 2240, 'Frequently'),
(8, 218012345, 2, 2239, 'Sometimes'),
(9, 218012345, 2, 2238, 'Never');

-- --------------------------------------------------------

--
-- Table structure for table `internship`
--

CREATE TABLE `internship` (
  `intern_id` int(11) NOT NULL,
  `comp_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `comp_email` varchar(255) NOT NULL,
  `comp_number` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `internship`
--

INSERT INTO `internship` (`intern_id`, `comp_name`, `address`, `comp_email`, `comp_number`) VALUES
(1, 'Delloite', '5 Magwa Cres, Waterval City, Midrand, 2090', 'usindiaogc@deloitte.com', 219411377);

-- --------------------------------------------------------

--
-- Table structure for table `intern_wil`
--

CREATE TABLE `intern_wil` (
  `intern_wil_id` int(11) NOT NULL,
  `student_no` int(11) NOT NULL,
  `wilCoord_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logbook`
--

CREATE TABLE `logbook` (
  `logbook_id` int(11) NOT NULL,
  `student_no` int(11) NOT NULL,
  `mentor_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `log_description` varchar(255) NOT NULL,
  `log_status` tinyint(1) NOT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logbook`
--

INSERT INTO `logbook` (`logbook_id`, `student_no`, `mentor_id`, `date`, `log_description`, `log_status`, `submitted_at`) VALUES
(2, 218011223, 1, '2023-04-20', 'Decide on the endpoints that will be used to interact with the API. For example, you could have an endpoint for submitting a logbook, an endpoint for retrieving logbooks, and an endpoint for evaluating logbooks.Choose a programming language: Select a prog', 0, '2023-04-20 12:45:10');

-- --------------------------------------------------------

--
-- Table structure for table `mentor`
--

CREATE TABLE `mentor` (
  `mentor_id` int(11) NOT NULL,
  `m_name` varchar(255) NOT NULL,
  `m_surname` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mentor`
--

INSERT INTO `mentor` (`mentor_id`, `m_name`, `m_surname`, `email_address`, `password`) VALUES
(1, 'Sam', 'Mentor', 'sammentor@email.com', '$2a$10$46cWsunOhRo7ijXQe3g4Nu0v5OsJbPt.hZitKlxOSLfNqH8a.N2RS');

-- --------------------------------------------------------

--
-- Table structure for table `registrar`
--

CREATE TABLE `registrar` (
  `registrar_no` int(6) NOT NULL,
  `r_initials` varchar(5) NOT NULL,
  `r_surname` varchar(255) NOT NULL,
  `r_email` varchar(255) NOT NULL,
  `itsPin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registrar`
--

INSERT INTO `registrar` (`registrar_no`, `r_initials`, `r_surname`, `r_email`, `itsPin`) VALUES
(112233, 'RR', 'Radebe', '112233@tut.ac.za', '$2a$10$yRk6mAsH5UBkomjApHLIm.qkVOqAk1jtw3ac2MrUoNTRxFNtUTUym');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `report_id` int(11) NOT NULL,
  `student_no` int(11) NOT NULL,
  `wilCoord_id` int(11) NOT NULL,
  `report_doc` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`report_id`, `student_no`, `wilCoord_id`, `report_doc`) VALUES
(2, 218011223, 3, `In a Scrum team, the role of a back-end developer is to work on the server-side logic of the application or software being developed. They are responsible for designing, developing, and maintaining the database, APIs, and other server-side components of the application.\r\nThe back-end developer works closely with the front-end developers, product owner, and other members of the Scrum team to ensure that the application is being developed according to the requirements and specifications of the product backlog. They are responsible for writing clean, efficient, and maintainable code that meets the project's 
technical requirements and is compatible with the chosen technology stack.\r\nThe back-end developer may also be responsible for testing, debugging, and troubleshooting any issues that arise with the server-side components of the application. They may also collaborate with DevOps engineers to ensure the smooth operation of the production environment.\r\nIn addition to technical skills, a back-end developer in a Scrum team should have good communication skills to effectively communicate with other team members and stakeholders, as well as a strong understanding of agile development methodologies like Scrum.`),
(3, 212233455, 2, 'The back-end developer may also be responsible for testing, debugging, and troubleshooting any issues that arise with the server-side components of the application. They may also collaborate with DevOps engineers to ensure the smooth operation of the production environment.\r\nIn addition to technical skills, a back-end developer in a Scrum team should have good communication skills to effectively communicate with other team members and stakeholders, as well as a strong understanding of agile development methodologies like Scrum.'),
(4, 218049799, 2, 'The issue could be related to the location of the if statement where the JWT token is saved to local storage after a successful login. Make sure that the if statement is in the same file or module as the AuthInterceptor class, as the AuthInterceptor class is responsible for attaching the JWT token to subsequent HTTP requests.If the if statement is located in a different file or module, the localStorage key for the JWT token might not match the one that is being used in the interceptor, causing the interceptor to not find the JWT token and not attach it to the HTTP requests. ');

-- --------------------------------------------------------

--
-- Table structure for table `responsibility`
--

CREATE TABLE `responsibility` (
  `res_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `roles` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `responsibility`
--

INSERT INTO `responsibility` (`res_id`, `dept_id`, `roles`) VALUES
(1, 1, 'Software Testing'),
(2, 1, 'Mobile Development'),
(3, 2, 'Systems Testers');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_no` int(9) NOT NULL,
  `initials` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `gender` enum('Female','Male') NOT NULL,
  `email` varchar(255) NOT NULL,
  `itsPin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_no`, `initials`, `surname`, `gender`, `email`, `itsPin`) VALUES
(212233445, 'TT', 'Twala', 'Male', '212233445@tut4life.ac.za', '$2a$10$56enZmP7oD/gvcCU48BxsuvXtHEFuzy0uqOZJrwACFGsvmCrF0hNC'),
(212233455, 'TR', 'Twala', 'Female', '212233455@tut4life.ac.za', '$2a$10$/lFum8mee5gouFETmqzFb.7g.KLAjPZzicX6fUPqKP7F5SK1y6PGW'),
(218011223, 'BB', 'Baloi', 'Female', '218011223@tut4life.ac.za', '$2a$10$BcHHplOVbgHiSz8c242cCOjXq.WAT/.a4TQWebU0/gJyFDbOAjVSS'),
(218012345, 'RW', 'Radebe', 'Male', '218012345@tut4life.ac.za', '$2a$10$UFVmq4FA7zmBPF4PaeFx1.Co6kQdCmfW.tR.LLWMlIroDYMWTl4Ki'),
(218049799, 'CC', 'Chauke', 'Female', '218049799@tut4life.ac.za', '$2a$10$cERIiYtoReVyvT3mjZif8u8JekSeAp64fUanrBrII5IqVPhsCoV/e');

-- --------------------------------------------------------

--
-- Table structure for table `stud_dep`
--

CREATE TABLE `stud_dep` (
  `studDep_id` int(11) NOT NULL,
  `student_no` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stud_dep`
--

INSERT INTO `stud_dep` (`studDep_id`, `student_no`, `dept_id`) VALUES
(1, 218012345, 2),
(2, 218049799, 1),
(3, 218011223, 1),
(4, 212233445, 1),
(5, 212233455, 2);

-- --------------------------------------------------------

--
-- Table structure for table `wil_coordinator`
--

CREATE TABLE `wil_coordinator` (
  `wilCoord_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `initials` varchar(255) NOT NULL,
  `wilCoord_email` varchar(255) NOT NULL,
  `tel_no` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wil_coordinator`
--

INSERT INTO `wil_coordinator` (`wilCoord_id`, `dept_id`, `surname`, `initials`, `wilCoord_email`, `tel_no`) VALUES
(2, 1, 'Ranko', 'VN', 'RankoVN@tut.ac.za', 123829112),
(3, 2, 'Molefe', 'ML', 'MolefeML@tut.ca.za', 123456789);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_no`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_code`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`evaluation_id`);

--
-- Indexes for table `evaluation_criteria`
--
ALTER TABLE `evaluation_criteria`
  ADD PRIMARY KEY (`criteria_id`),
  ADD KEY `student_no` (`student_no`),
  ADD KEY `evaluation_id` (`evaluation_id`),
  ADD KEY `wilCoord_id` (`wilCoord_id`);

--
-- Indexes for table `internship`
--
ALTER TABLE `internship`
  ADD PRIMARY KEY (`intern_id`);

--
-- Indexes for table `intern_wil`
--
ALTER TABLE `intern_wil`
  ADD PRIMARY KEY (`intern_wil_id`),
  ADD KEY `student_no` (`student_no`),
  ADD KEY `wilCoord_id` (`wilCoord_id`);

--
-- Indexes for table `logbook`
--
ALTER TABLE `logbook`
  ADD PRIMARY KEY (`logbook_id`);

--
-- Indexes for table `mentor`
--
ALTER TABLE `mentor`
  ADD PRIMARY KEY (`mentor_id`);

--
-- Indexes for table `registrar`
--
ALTER TABLE `registrar`
  ADD PRIMARY KEY (`registrar_no`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `student_no` (`student_no`),
  ADD KEY `wilCoord_id` (`wilCoord_id`);

--
-- Indexes for table `responsibility`
--
ALTER TABLE `responsibility`
  ADD PRIMARY KEY (`res_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_no`);

--
-- Indexes for table `stud_dep`
--
ALTER TABLE `stud_dep`
  ADD PRIMARY KEY (`studDep_id`),
  ADD KEY `studep_id` (`student_no`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `wil_coordinator`
--
ALTER TABLE `wil_coordinator`
  ADD PRIMARY KEY (`wilCoord_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_no` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123457;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `evaluation`
--
ALTER TABLE `evaluation`
  MODIFY `evaluation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2241;

--
-- AUTO_INCREMENT for table `evaluation_criteria`
--
ALTER TABLE `evaluation_criteria`
  MODIFY `criteria_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `internship`
--
ALTER TABLE `internship`
  MODIFY `intern_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `intern_wil`
--
ALTER TABLE `intern_wil`
  MODIFY `intern_wil_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logbook`
--
ALTER TABLE `logbook`
  MODIFY `logbook_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mentor`
--
ALTER TABLE `mentor`
  MODIFY `mentor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `registrar`
--
ALTER TABLE `registrar`
  MODIFY `registrar_no` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112234;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `responsibility`
--
ALTER TABLE `responsibility`
  MODIFY `res_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `stud_dep`
--
ALTER TABLE `stud_dep`
  MODIFY `studDep_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `wil_coordinator`
--
ALTER TABLE `wil_coordinator`
  MODIFY `wilCoord_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `evaluation_criteria`
--
ALTER TABLE `evaluation_criteria`
  ADD CONSTRAINT `evaluation_criteria_ibfk_1` FOREIGN KEY (`student_no`) REFERENCES `student` (`student_no`),
  ADD CONSTRAINT `evaluation_criteria_ibfk_3` FOREIGN KEY (`evaluation_id`) REFERENCES `evaluation` (`evaluation_id`),
  ADD CONSTRAINT `evaluation_criteria_ibfk_4` FOREIGN KEY (`wilCoord_id`) REFERENCES `wil_coordinator` (`wilCoord_id`);

--
-- Constraints for table `intern_wil`
--
ALTER TABLE `intern_wil`
  ADD CONSTRAINT `intern_wil_ibfk_1` FOREIGN KEY (`student_no`) REFERENCES `student` (`student_no`),
  ADD CONSTRAINT `intern_wil_ibfk_2` FOREIGN KEY (`wilCoord_id`) REFERENCES `wil_coordinator` (`wilCoord_id`);

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`student_no`) REFERENCES `student` (`student_no`),
  ADD CONSTRAINT `report_ibfk_2` FOREIGN KEY (`wilCoord_id`) REFERENCES `wil_coordinator` (`wilCoord_id`);

--
-- Constraints for table `responsibility`
--
ALTER TABLE `responsibility`
  ADD CONSTRAINT `responsibility_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`);

--
-- Constraints for table `stud_dep`
--
ALTER TABLE `stud_dep`
  ADD CONSTRAINT `stud_dep_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`),
  ADD CONSTRAINT `stud_dep_ibfk_2` FOREIGN KEY (`student_no`) REFERENCES `student` (`student_no`);

--
-- Constraints for table `wil_coordinator`
--
ALTER TABLE `wil_coordinator`
  ADD CONSTRAINT `wil_coordinator_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

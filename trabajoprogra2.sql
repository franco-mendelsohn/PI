-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-09-2020 a las 22:43:12
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajoprogra2`
--
CREATE DATABASE IF NOT EXISTS `trabajoprogra2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `trabajoprogra2`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `comentario` text NOT NULL,
  `fecha_creacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `post_id`, `user_id`, `comentario`, `fecha_creacion`) VALUES
(1, 1, 3, 'Buena crack!', '2020-09-20'),
(2, 1, 3, 'Bestiaa', '2020-09-20'),
(3, 1, 3, 'Máquina', '2020-09-20'),
(4, 1, 3, 'Sos un loco', '2020-09-20'),
(5, 11, 2, 'Feliz cumple!', '2019-04-12'),
(6, 11, 2, 'Capo', '2019-04-12'),
(7, 11, 2, 'Este es un comentario ficticio', '2019-04-12'),
(8, 11, 2, 'Programación II', '2019-04-12'),
(9, 21, 4, 'Prueba', '2018-03-07'),
(10, 21, 4, 'Prueba 2', '2018-03-07'),
(11, 21, 4, 'Prueba 3', '2018-03-07'),
(12, 21, 4, 'Prueba 4', '2018-03-07'),
(13, 11, 6, 'Vamo los pibe', '2020-11-10'),
(14, 11, 6, 'Grandes', '2020-11-10'),
(15, 11, 6, 'Enormes', '2020-11-10'),
(16, 11, 6, 'Titanes', '2020-11-10'),
(17, 11, 5, 'A festejar!', '2020-12-31'),
(18, 11, 5, 'Fiestaaa', '2020-12-31'),
(19, 11, 5, 'Tremendo!', '2020-12-31'),
(20, 11, 5, 'SALUDOSS', '2020-12-31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `url_imagen` varchar(1000) NOT NULL,
  `texto` text NOT NULL,
  `fecha_creacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `url_imagen`, `texto`, `fecha_creacion`) VALUES
(1, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(2, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(3, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(4, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(5, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(6, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(7, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(8, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(9, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(10, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20'),
(11, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(12, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(13, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(14, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(15, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(16, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(17, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(18, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(19, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(20, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12'),
(21, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(22, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(23, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(24, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(25, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(26, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(27, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(28, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(29, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(30, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07'),
(31, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(32, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(33, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(34, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(35, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(36, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(37, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(38, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(39, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(40, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10'),
(41, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(42, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(43, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(44, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(45, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(46, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(47, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(48, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(49, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31'),
(50, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-12-31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `apellido` varchar(300) NOT NULL,
  `apodo` varchar(20) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `edad` decimal(3,1) UNSIGNED NOT NULL,
  `cumpleaños` date NOT NULL,
  `fecha_registracion` date NOT NULL,
  `lema` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `apodo`, `username`, `edad`, `cumpleaños`, `fecha_registracion`, `lema`) VALUES
(2, 'Lautaro', 'Ortiz', 'Lauti', 'ortizlautaro', '21.0', '1999-04-12', '2020-09-20', 'Buenos días'),
(3, 'Agustina', 'Ruiz', 'Petu', 'peturuiz', '21.0', '1999-03-10', '2020-09-20', '¿Y si sale bien?'),
(4, 'Alec', 'Juliao', 'Excel', 'alecjuliao', '22.0', '1998-12-05', '2020-09-20', 'Buenas tardes'),
(5, 'Juan Ignacio', 'Levy', 'Juani', 'juanilevy', '22.0', '1998-06-11', '2020-09-20', 'Este es mi lema'),
(6, 'Franco', 'Mendelsohn', 'Chaco', 'chaco.franco', '20.0', '2000-05-03', '2020-09-20', 'Básquet o morir');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

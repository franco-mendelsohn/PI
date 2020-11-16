-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-11-2020 a las 19:45:27
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `trabajoprogra2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `comentario` text NOT NULL,
  `fecha_creacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `post_id`, `user_id`, `comentario`, `fecha_creacion`) VALUES
(1, 1, 3, 'Buena crack!', '2020-09-20'),
(2, 1, 8, 'Bestiaa', '2020-09-20'),
(3, 1, 3, '#Máquina', '2020-09-20'),
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
(20, 11, 5, 'SALUDOSS', '2020-12-31'),
(72, 23, 8, 'hola', '2020-11-16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `url_imagen` varchar(10000) NOT NULL,
  `texto` varchar(500) NOT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_cambio` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `url_imagen`, `texto`, `fecha_creacion`, `fecha_cambio`) VALUES
(1, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(2, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(3, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(4, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(5, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(6, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(7, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(8, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(9, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(10, 2, 'https://i.imgur.com/7GbxUMW.png', 'Buen día', '2020-09-20', NULL),
(11, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(12, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(13, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(14, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(15, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(16, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(17, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(18, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(19, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(20, 3, 'https://i.imgur.com/zi35rmu.png', 'Día de almuerzo', '2019-04-12', NULL),
(23, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(24, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(25, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(26, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(27, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(28, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(29, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(30, 4, 'https://i.imgur.com/1uM7DNC.png', 'Hoy se juega!', '2018-03-07', NULL),
(31, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(32, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(33, 6, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(34, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(35, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(36, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(37, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(38, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(39, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(40, 5, 'https://i.imgur.com/efihUWZ.png', 'Noche con amigos', '2020-11-10', NULL),
(41, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL),
(42, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL),
(43, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL),
(44, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL),
(45, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL),
(46, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL),
(47, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL),
(48, 6, 'https://i.imgur.com/efihUWZ.png', 'Fiestaaa', '2020-10-31', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `apellido` varchar(300) NOT NULL,
  `email` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `cumpleanos` date NOT NULL,
  `respuesta` varchar(500) NOT NULL,
  `lema` text,
  `fecha_registracion` date DEFAULT NULL,
  `perfil` varchar(1000) DEFAULT NULL,
  `fecha_cambio` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `email`, `username`, `contrasena`, `cumpleanos`, `respuesta`, `lema`, `fecha_registracion`, `perfil`, `fecha_cambio`) VALUES
(2, 'Lautaro', 'Ortiz', 'lauti@gmail.com', 'ortizlautaro', '12345678', '1999-04-12', '', 'Buenos días', '2020-09-20', 'https://i.pinimg.com/originals/cd/be/b1/cdbeb16f63e9a77ccfeee5d4834a0d21.jpg', NULL),
(3, 'Agustina', 'Ruiz', 'petu@gmail.com', 'peturuiz', '12345678', '1999-03-10', '', '¿Y si sale bien?', '2020-09-20', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVHIf8_LbnYDtMLcB5bPOobMeXDOyNpV1Xyw&usqp=CAU', NULL),
(4, 'Alec', 'Juliao', 'excel@gmail.com', 'alecjuliao', '12345678', '1998-12-05', '', 'Buenas tardes', '2020-09-20', 'https://image.freepik.com/foto-gratis/retrato-estudio-expresion-sonrisa-cara-personas-adultas_53876-45363.jpg', NULL),
(5, 'Juan Ignacio', 'Levy', 'juani@gmail.com', 'juanilevy', '12345678', '1998-06-11', '', 'Este es mi lema', '2020-09-20', 'https://pixnio.com/free-images/2019/01/13/2019-01-13-09-51-02-1200x800.jpg', NULL),
(6, 'Franco', 'Mendelsohn', 'chaco@gmail.com', 'chaco.franco', '12345678', '2000-05-03', '', 'Básquet o morir', '2020-09-20', NULL, NULL),
(8, 'Prueba', '', 'hola@gmail.com', 'hola', '$2a$10$CcnnRbHYReJgN9z1aOV0e.ge5Cob3dqHtNGYqhDCs7OPYQI4YyY9a', '2020-11-05', '', '', '2020-09-20', 'https://as.com/tikitakas/imagenes/2018/08/14/portada/1534243742_367271_1534244843_noticia_normal.jpg', '2020-11-16'),
(9, 'Hola', 'HOla', 'hola3@gmail.com', 'e4345345', '$2a$10$T7evpE8kZkz6.vanca1Tv.N7JFiO5dHYWm8Gp4Dnynu0PUdfKtjB2', '2020-11-13', 'rojo', '', NULL, '', NULL);

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
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

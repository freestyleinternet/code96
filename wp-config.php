<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'code96');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sZ~~sn6o$!&T*5@#S?{&JyC,/JyN4jU`C-QMDBn1TrHzRNy!RKpH6^-|s)fa_Ekc');
define('SECURE_AUTH_KEY',  'Vta_zs6j&iUsu{2uOhRA4CGVy+0))S8G)W4ljnH-!8BNgqr/3w[]Y(w@t.:Kw`aA');
define('LOGGED_IN_KEY',    '|ky]s1s:.FGS5bFe pO;Qi5aB*R6o[Km)Ov?DINwsZk^uN3g)#`bJl,A]n<X4>M2');
define('NONCE_KEY',        'WuSmi*h|cpPak#ED5/a7`KijMog$|K<qD-Kd):SK=^:nOt#Mt5RG|R{lhC=ddNGT');
define('AUTH_SALT',        '@eJk^D^%XRwhLlO7XXkeCbE|4YQ^:Zg[p%V/N*=9|SMhqi;.b<}bZ!gc^9D#$(jL');
define('SECURE_AUTH_SALT', 'fg4}yQ: cHE-s,ROqVLT08@)`?8nSx|4I/:ZFdXe*V+OP!O]5yCP;7%W_;)*B@3.');
define('LOGGED_IN_SALT',   'RBr3E2S^_B]oxO$[rYJ_W3s*+>L6sPs)VHn7eSiUo4x)?Ka*{n9i_b&WAWy!00.7');
define('NONCE_SALT',       '/-} es0b!~0_j:2$j#S{=hCzdgUX|/Y))hItGa*_VdT>WH3f|g6o99>@-Kr?xunJ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

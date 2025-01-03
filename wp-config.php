<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'database_baru' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*d%/QhEo8 vJ;&&cg<y;`QE- l|c[}xXLT=@_2#_oxdD_>4(C5hoN|+- yk@w7i>' );
define( 'SECURE_AUTH_KEY',  'o^]&hoYP)lw6AyFTpiR,!HC/2xb2R@@vp4<^pegkOG4.Cf^Fy0;K,I&=3:K0<)[~' );
define( 'LOGGED_IN_KEY',    'AAm?TqPImqsvSjRIg(QcXc}tn*i(;X41/@R5FJ_nj|*@I/xJ77W1xP=:ly6FPW6G' );
define( 'NONCE_KEY',        'rhL8ZbL&Z?2*?4U^O(*zz9f5CyiDEwR<g%E;wWxnl3HsmVx<o$u5rnTMp7s9bw1)' );
define( 'AUTH_SALT',        'JMoG1HSOA3@C&6n0[*+Xpj4(T_Y:wy){B+`$u1hV#Lk,rNwq49w5OKxGh.~-qW,x' );
define( 'SECURE_AUTH_SALT', 'P{b6V=*V?V=/><GZ5h+{qMN!F!dq=Y0V%119hhsWPkQN0`ljQt2NBJs 4upS,4)R' );
define( 'LOGGED_IN_SALT',   'RYZzbL48d3lW3oE5]z>!n))B!#R>((}Uz6{@sv_87R7.qV=@tn8@,Tf4e=BW}5{U' );
define( 'NONCE_SALT',       'mVvTSx3yv)E&;-n#G2}#l,:l94`K{ZZg/LA=c`e/>I_J{hN*% XYD|*U3K05Rt4/' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

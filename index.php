<?php 

$request = $_SERVER['REQUEST_URI'];
$htmlClass = '';
$subtitle = '';

 if ($request == '' || $request == '/' || $request == '/index.php' || $request == '/index.html') {
	$htmlClass = 'home';
  	require __DIR__ . '/header.php';
	require __DIR__ . '/home.php';
}
else if ($request == '/about') {
 	$htmlClass = 'subpage';
 	$subtitle = 'About us';
	require __DIR__ . '/header.php';
 	require __DIR__ . '/about.php';
}
else if ($request == '/team') {
	$htmlClass = 'subpage';
	$subtitle = 'Team';
   require __DIR__ . '/header.php';
	require __DIR__ . '/team.php';
}
else if ($request == '/partnership') {
 	$htmlClass = 'subpage';
 	$subtitle = 'Partner with us';
 	require __DIR__ . '/header.php';
 	require __DIR__ . '/partnership.php';
}
else if ($request == '/faq') {
	$htmlClass = 'subpage';
	$subtitle = 'FAQ';
	require __DIR__ . '/header.php';
	require __DIR__ . '/faq.php';
}
else if ($request == '/contact') {
	$htmlClass = 'subpage';
	$subtitle = 'Contact us';
	require __DIR__ . '/header.php';
	require __DIR__ . '/contact.php';
}
else {
	$htmlClass = '404';
	$subtitle = '404';
	require __DIR__ . '/header.php';
	require __DIR__ . '/404.php';
}

require __DIR__ . '/footer.php';

?>
<?php

$aliases['dev'] = array(
	'uri'=> 'magermans.ccistaging.com',
	'root' => '/home/staging/subdomains/magermans/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=> '-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'live.magermansandraes.com',
	'root' => '/home/magraes/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'magraes',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);

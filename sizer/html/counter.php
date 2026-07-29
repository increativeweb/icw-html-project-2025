<?php
// setcookie('site_unique_visitor', '', time() - 3600, '/');
// File to store visitor count
$counterFile = __DIR__ . '/counter.txt';

// Create file if it doesn't exist
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, "0");
}

// Ignore common bots
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';

if (preg_match('/bot|crawl|slurp|spider|bing|google|yandex|baidu/i', $userAgent)) {
    echo file_get_contents($counterFile);
    exit;
}
// Count only once per browser for 1 year
$cookieName = 'site_unique_visitor';

if (!isset($_COOKIE[$cookieName])) {
    $fp = fopen($counterFile, "c+");    
    if ($fp) {
        flock($fp, LOCK_EX);
        $count = (int)trim(stream_get_contents($fp));
        $count++;
        rewind($fp);
        ftruncate($fp, 0);
        fwrite($fp, $count);
        fflush($fp);
        flock($fp, LOCK_UN);
        fclose($fp);
        setcookie($cookieName,'1',time() + (365 * 24 * 60 * 60),'/','',isset($_SERVER['HTTPS']), true);
    }
}
echo file_get_contents($counterFile);
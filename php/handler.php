<?php
session_start();
date_default_timezone_set('Europe/Moscow');
$currentTime = date("H:i:s");
$start = microtime(true);
$r = ($_POST['r_value']);
$y = ($_POST['y_value']);
$x = ($_POST['x_group']);

function checkAcceptableValues($x, $y, $r)
{
    if ($x >= 0 && $y >= 0)
        return checkFirstHalf($x, $y, $r);
    if ($x <= 0 && $y > 0)
        return checkSecondHalf($x, $y, $r);
    if ($x > 0 && $y < 0)
        return checkFourthHalf($x, $y, $r);
    if ($x <= 0 && $y <= 0)
        return checkThirdHalf($x, $y, $r);
    else return false;
}


function checkFirstHalf($x, $y, $r)
{
    return ($x * $x + $y * $y <= $r * $r);
}

function checkSecondHalf($x, $y, $r)
{
    return false;
}

function checkThirdHalf($x, $y, $r)
{
    return (-$r * $x - $r * $r / 2 - $r * $y / 2 <= 0);
}

function checkFourthHalf($x, $y, $r)
{
    return ($x <= $r && $y >= -$r);
}

$res = checkAcceptableValues($x, $y, $r) ? "TRUE" : "FALSE";
$time = microtime(true) - $start;
$result_table = array((int)$x, (float)$y, (float)$r, $currentTime, $time, $res);
if (!isset($_SESSION['history'])) {
    $_SESSION['history'] = array();

}

array_push($_SESSION['history'], $result_table);

include "table.php";
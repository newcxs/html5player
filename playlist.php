<?php
header("Content-type:text/javascript; charset=utf-8");
require_once 'getid3/getid3.php';
$getID3 = new getID3();
$playlist = array();
foreach(glob("songs/*.mp3") as $filename){
    $songData = array();
    $timestamp = time();
    $info = $getID3->analyze($filename);
    $tags = $info['tags']['id3v2'];
    $picture = @$info['comments']['picture']['0']['data'];
    if($picture){
        file_put_contents('tmp_'.$timestamp.'.picture', $picture);
        $pictype = getimagesize('tmp_'.$timestamp.'.picture');
        unlink('tmp_'.$timestamp.'.picture');
        $pictype = $pictype['mime'];
        $songData['picture'] = "data:".$pictype.";base64,".base64_encode($picture);
    }else{
        $songData['picture'] = "image/none.jpg";
    }
    $songData['filename'] = $filename;
    $songData['title'] = $tags['title']['0'];
    $songData['artist'] = $tags['artist']['0'];
    $songData['album'] = $tags['album']['0'];
    $playlist[] = $songData;
}

$data = array();
foreach($playlist as $key=>$song){
    $data[] = array($song['title'], $song['artist'], $song['album'], $song['filename'], $song['picture']);
}
$data = json_encode($data);

echo "var playlist = ".$data.";";

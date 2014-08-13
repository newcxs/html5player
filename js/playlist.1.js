var playlist = [];
var playlistPrefix = '';
var playlistEndfix = '';
var playlistTitle = [
    "小苹果",
    "平凡之路"
];
var playlistArtist = [
    "筷子兄弟",
    "朴树"
];
var playlistAlbum = [
    "电影《老男孩之猛龙过江》插曲",
    "电影《后会无期》主题曲"
];
var playlistImage = [
    "http://b.hiphotos.baidu.com/ting/pic/item/dc54564e9258d109f857c47bd358ccbf6d814d46.jpg",
    "http://musicdata.baidu.com/data2/pic/121523353/121523353.jpg"
];
var playlistURL = [
    "songs/1.mp3",
    "songs/2.mp3"
];
var i, j, listCountNum = '', playlistItem = '';
for (i in playlistTitle) {
    playlist.push([playlistTitle[i], playlistArtist[i], playlistAlbum[i], playlistURL[i], playlistImage[i]]);
}

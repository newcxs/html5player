var playlist = [];
var playlistPrefix = '';
var playlistEndfix = '';
var playlistTitle = [
    "Girlish Lover",
    "W:Wonder tale"
];
var playlistArtist = [
    "赤﨑千夏;田村ゆかり;金元寿子;茅野愛衣",
    "田村ゆかり"
];
var playlistAlbum = [
    "俺の彼女と幼なじみが修羅場すぎる 第1巻 特典CD",
    "TVアニメ「俺の彼女と幼なじみが修羅場すぎる」EDテーマ"
];
var playlistImage = [
    "http://img.xiami.net/images/album/img0/62500/5772771386814344_2.png",
    "http://img.xiami.net/images/album/img60/58060/2824104631382410463_2.jpg"
];
var playlistURL = [
    "songs/Girlish Lover.mp3",
    "songs/W-Wonder tale.mp3"
];
var i, j, listCountNum = '', playlistItem = '';
for (i in playlistTitle) {
    playlist.push([playlistTitle[i], playlistArtist[i], playlistAlbum[i], playlistURL[i], playlistImage[i]]);
}

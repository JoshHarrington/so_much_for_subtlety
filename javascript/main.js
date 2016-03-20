console.log('This would be the main JS file.');

$('audio').mediaelementplayer({
  alwaysShowHours: true,
  audioWidth: '100%',
  audioHeight: 50,
  features: ['playpause','current','progress','volume']
});
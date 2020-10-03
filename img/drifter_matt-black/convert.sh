rm *.jpg
rm video.mp4
ffmpeg -i *.mp4 -vf "eq=brightness=0.08, unsharp=5:5:1.5:5:5:0.0" -c:a copy video.mp4
ffmpeg -i video.mp4 -r 20 -vf scale=2560:-1 img_%02d.jpg

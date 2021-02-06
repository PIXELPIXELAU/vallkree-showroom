
# Finals FFMPEG commands

## Crop to 4:3 and center 
```
ffmpeg -i trailer_1080p.mov -vf "crop='min(iw,ih/3*4)':'min(iw/1,ih)',scale=1440:1080" video.mp4
```

## Increase brightness 
```
ffmpeg -i video.mp4 -vf "eq=brightness=0.04, unsharp=5:5:1.5:5:5:0.0" -c:a copy video2.mp4
```

# Samples

## Convert video for web
https://medium.com/abraia/basic-video-editing-for-social-media-with-ffmpeg-commands-1e873801659

```
ffmpeg -i trailer_1080p.mov video.mp4
```

## Increase Brightness

```
ffmpeg -i video.mp4 -vf "eq=brightness=0.04" -c:a copy video2.mp4
```


## Increase Brightness & Sharpness

```
ffmpeg -i video.mp4 -vf "eq=brightness=0.04, unsharp=5:5:1.5:5:5:0.0" -c:a copy video2.mp4
```
`
## Resize a video

`ffmpeg -i trailer_1080p.mov -vf "scale=1280:-2" video.mp4`

## Resize a video 1:1 -- with padding

`ffmpeg -i video.mp4 -vf "scale=720:720:force_original_aspect_ratio=decrease,pad=720:720:(ow-iw)/2:(oh-ih)/2:black" video_square--padding.mp4`

## Resize a video 1: -- with crop

`ffmpeg -i video.mp4 -vf "crop='min(iw,1*ih)':'min(iw/1,ih)',scale=720:720" video_square.mp4`

## Resize a video 4:3: -- with crop

`ffmpeg -i video2.mp4 -vf "crop='ih/3*4:ih',scale=720:720/3*4" video_4x3.mp4`

## Resize a video 1: -- with blur

`ffmpeg -i video.mp4 -filter_complex "[0:v]scale=720:720,boxblur=luma_radius=min(h\,w)/20:luma_power=1:chroma_radius=min(cw\,ch)/20:chroma_power=1[bg];[0:v]scale=720:720:force_original_aspect_ratio=decrease[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" -map [outv] -map 0:a? video_square--blur.mp4
ffmpeg -i video_square--padding.mp4 -filter_complex "[0:v]scale=720:720,boxblur=luma_radius=min(h\,w)/20:luma_power=1:chroma_radius=min(cw\,ch)/20:chroma_power=1[bg];[0:v]scale=720:720:force_original_aspect_ratio=decrease[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" -map [outv] -map 0:a? video_square--blur.mp4`

## Create a poster
`ffmpeg -i video.mp4 -ss 14.5 -vframes 1 -q:v 2 poster.jpg`

## Other

`ffmpeg -i trailer_1080p.mov -vf "crop='min(iw,1*ih)':'min(iw/1,ih)',scale=720:720" video.mp4`

`ffmpeg -i trailer_1080p.mov -vf "crop='min(iw,ih/3*4)':'min(iw/1,ih)',scale=1440:1080" video.mp4`

`ffmpeg -i trailer_1080p.mov -vf "crop='ih/3*4:ih':'min(iw/1,ih)',scale=960:720" video.mp4`

`ffmpeg -i trailer_1080p.mov -vf "crop='ih/3*4:ih':'in_h'" video.mp4`

`ffmpeg -i trailer_1080p.mov -filter_complex "[0:v]scale=720:720,boxblur=luma_radius=min(h\,w)/20:luma_power=1:chroma_radius=min(cw\,ch)/20:chroma_power=1[bg];[0:v]scale=720:720:force_original_aspect_ratio=decrease[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" -map [outv] -map 0:a? video.mp4`


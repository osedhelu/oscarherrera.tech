from moviepy.editor import VideoFileClip
import os

def comprimir_video(ruta_video):
   # Cargar el video
   clip = VideoFileClip(ruta_video)

   # Reducir el tamaño del video sin perder calidad
   clip_resized = clip.resize(height=1080)

   # Guardar el video comprimido
   nombre_video = os.path.splitext(os.path.basename(ruta_video))[0]
   ruta_video_comprimido = os.path.join(os.path.dirname(ruta_video), f"{nombre_video}-compress.webm")
   clip_resized.write_videofile(ruta_video_comprimido, codec='libvpx', audio_codec='libvorbis')

   return ruta_video_comprimido
url = comprimir_video("./public/videoc.webm")
print(url)
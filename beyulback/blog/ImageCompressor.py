from PIL import Image


def compress(image_path, image_quality):
    image_type = image_path.split(".")[1]
    img = Image.open(image_path)

    # compressing the image size
    if img.height > 1080 or img.width > 1920:
        output_size = (1920, 1080)
        img.thumbnail(output_size)  # preserves the image aspect ratio

    # changes the jpg to progressive jpg and compress it's quality
    if image_type in ('jpg', 'jpeg'):
        img.save(image_path, optimize=True,
                 quality=image_quality, progressive=True)
    elif image_type == 'png':
        # makes png file as small as possible
        img.save(image_path, optimize=True)

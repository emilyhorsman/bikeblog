import os
import glob
import subprocess

sizes = {"1x": 768, "15x": 1152, "2x": 1536}


def resize(filename):
    new_filename = '{}.webp'.format(os.path.splitext(filename)[0])
    if not os.path.exists(new_filename):
        command = 'cwebp {} -preset photo -o {}'.format(
            filename, new_filename)
        subprocess.run(command, shell=True)

    for size, width in sizes.items():
        new_filename = '{}_{}.webp'.format(os.path.splitext(filename)[0], size)
        if os.path.exists(new_filename):
            continue
        command = 'cwebp {} -preset photo -resize {} 0 -o {}'.format(
            filename, width, new_filename)
        subprocess.run(command, shell=True)


for filename in glob.glob("*.jpg"):
    resize(filename)

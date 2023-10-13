import os
import glob
import subprocess
import itertools

options = {"": "", "_1x": "-resize 768x", "_15x": "-resize 1152", "_2x": "-resize 1536"}
extensions = {"webp": "-define webp:image-hint=photo", "avif": "-define heif:speed=2"}


def resize(filename):
    base = os.path.splitext(filename)[0]
    for ((key, option), (extension, extension_options)) in itertools.product(options.items(), extensions.items()):
        new_filename = '{}{}.{}'.format(base, key, extension)
        if os.path.exists(new_filename):
            continue
        command = 'magick {} {} {} {}'.format(filename, option, extension_options, new_filename)
        print(command)
        subprocess.run(command, shell=True)


for filename in glob.glob("*.jpg"):
    resize(filename)

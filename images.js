const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

async function resize(file) {
  const original = await sharp(file.name);
  const baseWidth = 768;
  const large = original.clone().resize(baseWidth * 2);
  const medium = original.clone().resize(baseWidth * 1.5);
  const small = original.clone().resize(baseWidth);

  const name = path.basename(file.name, ".jpg");
  await original.toFile(name + ".webp");
  await original.toFile(name + ".avif");
  await large.toFile(name + "_2x.webp");
  await large.toFile(name + "_2x.avif");
  await medium.toFile(name + "_15x.webp");
  await medium.toFile(name + "_15x.avif");
  await small.toFile(name + "_1x.webp");
  await small.toFile(name + "_1x.avif");
}

async function main(path) {
  const dir = await fs.promises.opendir(path);
  for await (const file of dir) {
    if (!(file.isFile() && file.name.endsWith(".jpg"))) {
      continue;
    }

    await resize(file);
  }
}

main(".");

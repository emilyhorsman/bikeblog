const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

// TODO: This isn't great lol
const higherQuality = [
  "DSCF4587-Enhanced-NR",
  "DSCF4934",
  "DSCF4034",
  "DSCF4008",
  "DSCF4930",
  "DSCF4937",
  "R0006412",
];

async function resize(file) {
  const original = await sharp(file.name);
  const baseWidth = 768;
  const large = original.clone().resize(baseWidth * 2);
  const medium = original.clone().resize(baseWidth * 1.5);
  const small = original.clone().resize(baseWidth);

  const avifOptions = {};
  if (higherQuality.some((name) => file.name.includes(name))) {
    // AVIF seems to struggle with dark, saturated shadows
    avifOptions.quality = 80;
  }

  const name = path.basename(file.name, ".jpg");
  if (!file.name.includes("16x9")) {
    await original.toFile(name + ".webp");
  }
  await large.toFile(name + "_2x.webp");
  await large.avif(avifOptions).toFile(name + "_2x.avif");
  await medium.toFile(name + "_15x.webp");
  await medium.avif(avifOptions).toFile(name + "_15x.avif");
  await small.toFile(name + "_1x.webp");
  await small.avif(avifOptions).toFile(name + "_1x.avif");
}

async function main(path) {
  const dir = await fs.promises.opendir(path);
  for await (const file of dir) {
    if (!higherQuality.some((x) => file.name.includes(x))) {
      continue;
    }
    if (!(file.isFile() && file.name.endsWith(".jpg"))) {
      continue;
    }

    console.log(file.name);
    await resize(file);
  }
}

main(".");

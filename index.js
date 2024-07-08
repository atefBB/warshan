const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

// Function to remove white background from an image
async function removeWhiteBackground(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const { data, info } = await image
      .raw()
      .toBuffer({ resolveWithObject: true });

    const transparentBackground = Buffer.alloc(data.length);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (r > 240 && g > 240 && b > 240) {
        transparentBackground[i] = 0;
        transparentBackground[i + 1] = 0;
        transparentBackground[i + 2] = 0;
        transparentBackground[i + 3] = 0;
      } else {
        transparentBackground[i] = r;
        transparentBackground[i + 1] = g;
        transparentBackground[i + 2] = b;
        transparentBackground[i + 3] = a;
      }
    }

    await sharp(transparentBackground, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    }).toFile(outputPath);

    console.log(`Processed image saved to ${outputPath}`);
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

// Function to process all PNG files in a directory
async function processImagesInDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);

    // Ensure the output directory exists
    const outputDirectory = path.join(directoryPath, "output");
    await fs.ensureDir(outputDirectory);

    for (const file of files) {
      const inputFilePath = path.join(directoryPath, file);
      const outputFilePath = path.join(outputDirectory, file);

      if (path.extname(file).toLowerCase() === ".png") {
        console.log(`Processing ${inputFilePath}`);
        await removeWhiteBackground(inputFilePath, outputFilePath);
      }
    }

    console.log("All images processed successfully.");
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

// Directory containing the images
const imgsDirectory = path.join(__dirname, "imgs");

// Process images in the directory
processImagesInDirectory(imgsDirectory);

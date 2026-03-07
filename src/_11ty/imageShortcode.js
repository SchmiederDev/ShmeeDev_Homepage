import Image from '@11ty/eleventy-img';

export const imageShortcode = (eleventyConfig) => {
  eleventyConfig.addShortcode("image", async function (src, alt, customClass) {
    let metadata = await Image(src, {
      // dryRun: true,
      widths: [600, 1200, "auto"],
      formats: ['webp', 'png'],
      outputDir: './_site/images/',
      urlPath: '/images/',
    });

    // console.log(metadata); // eslint-disable-line

    let data = metadata.png[0];
    let webp0 = metadata.webp[0]
    let webp1 = metadata.webp[1]
    let webp2 = metadata.webp[2]
    let className = customClass ? customClass : 'img';

    if (webp1) {
      let srcsetAttr = `${webp0.srcset}, ${webp1.srcset}, ${webp2.srcset}`
      let sizesAttr = `(max-width: ${webp0.width + 32}px)${webp0.width}px, (max-width: ${webp1.width + 32}px)${webp1.width}px, ${webp2.width}px`
      return `<img eleventy:ignore src="${data.url}" srcset="${srcsetAttr}" sizes="${sizesAttr}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async" class="${className}">`;
    } else {
      return `<img eleventy:ignore src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async" class="${className}">`;
    }
  });

  eleventyConfig.addShortcode("heroimage", async function (src, alt, customClass) {
    let metadata = await Image(src, {
      // dryRun: true,
      widths: [600, 1200, 2000],
      formats: ['webp', 'png'],
      outputDir: './_site/images/',
      urlPath: '/images/',
    });

    
    let data = metadata.png[2];
    let webp0 = metadata.webp[0]
    let webp1 = metadata.webp[1]
    let webp2 = metadata.webp[2]
    let className = customClass ? customClass : 'img';
    
    // console.log(metadata); // eslint-disable-line
    if (webp1) {
      let srcsetAttr = `${webp0.srcset}, ${webp1.srcset}, ${webp2.srcset}`
      let sizesAttr = `(max-width: ${webp0.width + 32}px)${webp0.width}px, (max-width: ${webp1.width + 32}px)${webp1.width}px, ${webp2.width}px`
      return `<img eleventy:ignore src="${data.url}" srcset="${srcsetAttr}" sizes="${sizesAttr}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async" class="${className}">`;
    } else {
      return `<img eleventy:ignore src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async" class="${className}">`;
    }
  });
}

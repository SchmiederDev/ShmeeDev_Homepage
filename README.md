# Robert Schmieder Website

Portfolio website.

## Installation & Workflow

Requires: [node](https://nodejs.org/en)

```
# one time, clone repo
git clone https://github.com/SchmiederDev/ShmeeDev_Homepage.git
cd ShmeeDev_Homepage

# get latest repo updates
git checkout main
git pull

# create branch
git checkout -b task/name-of-todo

# for frontend assets, if using nvm to manage node version (see .nvmrc for current node version)
nvm use

# install frontend packages
npm install

# run local server
npm start

# commit on feature branch
git push -u origin task/name-of-todo

# create Pull Request and merge in Github
```

## Find your way around the repo

The website uses Eleventy ([11ty.dev](https://www.11ty.dev/docs/)) as a static site generator.

### Frontmatter

Frontmatter is aditional data within an HTML snippet file. It is processed by Eleventy while writing the final HTML files.

```
---
layout: base
title: Shiny new page
listed: true
order: 2
---
```

-   layout: Uses the base layout, see `src/_templates/layout/`.
-   title: Used in head's `<title>`, `<h1>` in overview list.
-   listed: Used on pages to add that page to the 11ty-collection, e.g. used for main nav list


## Image shortcode in Nunjucks

Parmaters are given in quotes, comma-separated. Options are: src, alt, customClass.

```
{% image "./src/assets/images/blog/portfolio-color-palette-2.png", "Color palette with 3 orange, 3 blue and 6 grey colors", "my-class" %}
```

## Ressources

-   [11ty Eleventy Documentation](https://www.11ty.dev/docs/)
-   [Nunjucks templating](https://mozilla.github.io/nunjucks/templating.html)

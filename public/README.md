# Project assets

Place static files here. Referenced from the app root (e.g. `/logo.svg`).

## Structure

```
public/
  logo.svg      Theatre logo (primary)
  logo.png      Optional transparent-background fallback
  images/       Photographs and illustrations
  videos/       Video files and thumbnails
```

## Replacing the logo

The `Logo` component (`src/components/Logo.tsx`) loads `/logo.svg` and
automatically falls back to `/logo.png` if the SVG fails to load.

To swap the logo, overwrite `public/logo.svg` (or `logo.png`). No change
to the Header component is required.

In the future, the `Logo` component's `src` prop can be supplied from a
CMS without touching the Header.

# controller-overlay

Generate a browser source (to use via [OBS](https://obsproject.com/) or any other tool) displaying an overlay of your HOTAS controller in real time.

[`config=elite`](src/configs/elite.ts)

![Preview screenshot][elite-screenshot]

[`config=megadrive6`](src/configs/megadrive6.ts)

![Preview screenshot][megadrive6-screenshot]

[`config=megadrive3`](src/configs/megadrive3.ts)

![Preview screenshot][megadrive3-screenshot]

[`config=sufami`](src/configs/sufami.ts)

![Preview screenshot][sufami-screenshot]

[`config=snes`](src/configs/snes.ts)

![Preview screenshot][snes-screenshot]

[`config=nes`](src/configs/nes.ts)

![Preview screenshot][nes-screenshot]

[`config=famicon`](src/configs/famicon.ts)

![Preview screenshot][famicon-screenshot]

[`config=mastersystem`](src/configs/mastersystem.ts)

![Preview screenshot][mastersystem-screenshot]

[`config=mastersystemred`](src/configs/mastersystem-red.ts)

![Preview screenshot][mastersystemred-screenshot]

[`config=arcade8snes`](src/configs/arcade8-snes.ts)

![Preview screenshot][arcade8-screenshot]

[`config=arcade6neogeo`](src/configs/arcade6-neogeo.ts)

![Preview screenshot][arcade6-screenshot]

[`config=xbox360`](src/configs/xbox360.ts)

![Preview screenshot][xbox360-screenshot]

[`config=gba`](src/configs/gba.ts)

![Preview screenshot][gba-screenshot]

## How to use it

Download the [latest version](https://github.com/danikaze/controller-overlay/releases/latest) and open `index.html`. This should display a webpage like the one shown in the screenshot.

In `OBS` add a `New source > Browser` and enter the provided `OBS URL` in the bottom of the page (to show the page with a transparente background and without the info window at the bottom). This should be something like `file:///your-folder/controller-overlay/index.html?config=megadrive&display=1`

## How to customize it

First version is just a PoC (_Proof of Concept_) where the shown controls are what **I** find interesting to show for **Elite Dangerous**, and the bindings are the ones I use with my **X-56**, so every value is harcoded.

Later on, I added some other configs as shown in the top of this document

The html will show the Elite one by default, but adding `?config=megadrive` should show any other available one (and now it can be chosen with a select input if `display=1` is not added).

## Support

This project plans to support combinations of inputs and displays:

|                      | Digital button | 1-axis | 2-axis |
| -------------------- | -------------- | ------ | ------ |
| CSS digital button   | ✔              | ✔      | ✖      |
| CSS analog button    | △              | △      | ✖      |
| CSS X-axis           | ✔              | ✔      | ✖      |
| CSS Y-axis           | ✔              | ✔      | ✖      |
| CSS XY-axis          | ✔              | ✖      | ✔      |
| Image digital button | ✔              | ✔      | ✔      |
| Image analog button  | ✖              | △      | ✖      |
| Image X-axis         | ✔              | ✔      | ✖      |
| Image Y-axis         | ✔              | ✔      | ✖      |
| Image XY-axis        | ✔              | ✖      | ✔      |

✔ = done | △ = planned | ✖ = not gonna happen

## Rebuilding

First, clone the repository and install the dependencies:

```
npm install
```

Then, just build it:

```
npm build
```

Building will generate the required files in the `app` folder, the `index.html` file is the one to use.

## Changelog

### 0.7.0

- Added support for input keys as buttons
- Added a [configuration](src/configs/gba.ts) for the [Arcade 4+2 stick design](./img/gba-0.7.0.gif) using the keyboard .

### 0.6.0

- Added support for rendering axes using images
- Added a [configuration](src/configs/arcade6-neogeo.ts) for the Neo Geo mini controller with the [Arcade 4+2 stick design](./img/arcade6-0.6.0.gif).
- Added a [configuration](src/configs/xbox360.ts) for the [Xbox 360 controller pad](img/xbox360-0.6.0.gif).

### 0.5.0

- Added support for logic configuration (`AND`, `OR`, `NOT`) - i.e: to show an image when 2 buttons are pressed at the same time (diagonals), etc.
- Added a [configuration](src/configs/arcade8-snes.ts) for the Buffalo controller with the [Arcade 4+4 stick design](img/arcade8-0.5.0.gif).

### 0.4.0

- Added styles. Can import extra css files by the `style` query param or field in the configuration.

### 0.3.0

- Added a [configuration](src/configs/megadrive3.ts) for the Mega Drive mini 6B controller using the [3B design](img/megadrive3-0.3.0.gif).
- Added a [configuration](src/configs/sufami.ts) for the Buffalo controller with the [Japanese Super Nintendo overlay](img/sufami-0.3.0.gif).
- Added a [configuration](src/configs/snes.ts) for the Buffalo controller with the [American Super Nintendo overlay](img/snes-0.3.0.gif).
- Added a [configuration](src/configs/nes.ts) for the Mega Drive mini 6B controller using the [NES](img/nes-0.3.0.gif).
- Added a [configuration](src/configs/famicon.ts) for the Mega Drive mini 6B controller using the [Famicon](img/famicon-0.3.0.gif).
- Added a [configuration](src/configs/mastersystem.ts) for the Mega Drive mini 6B controller using the [Master System](img/mastersystem-0.3.0.gif).
- Added a variation in red for the [configuration](src/configs/mastersystem-red.ts) of the Mega Drive mini 6B controller using the [Master System](img/mastersystemred-0.3.0.gif).
- Added a dropdown list to select the configuration without having to edit the URL param

### 0.2.0

- Allow to fully customize the layout from a [config file](src/configs/elite.ts).
  Config file is still hardcoded tho, but it's a big step.
- Added a [configuration](src/configs/megadrive6.ts) for the Mega Drive mini 6B controller.
- Added support for:
  - Digital buttons with images
  - 1-axis shown as a digital button with CSS
  - 1-axis shown as a digital button with images

### 0.1.0

First version. PoC to test the creation of a browser source in OBS.

It supports:

- Digital buttons with CSS
- 1-axis with CSS
- 2-axis with CSS
- Digital buttons shown as 1-axis with CSS
- Digital buttons shown as 2-axis with CSS

[elite-screenshot]: ./img/elite-0.2.0.gif 'HOTAS overlay preview'
[megadrive6-screenshot]: ./img/megadrive6-0.2.0.gif 'Mega Drive 6B overlay preview'
[megadrive3-screenshot]: ./img/megadrive3-0.3.0.gif 'Mega Drive 3B overlay preview'
[sufami-screenshot]: ./img/sufami-0.3.0.gif 'Sufami overlay preview'
[snes-screenshot]: ./img/snes-0.3.0.gif 'Sufami overlay preview'
[nes-screenshot]: ./img/nes-0.3.0.gif 'NES overlay preview'
[famicon-screenshot]: ./img/famicon-0.3.0.gif 'Famicon overlay preview'
[mastersystem-screenshot]: ./img/mastersystem-0.3.0.gif 'Master System overlay preview'
[mastersystemred-screenshot]: ./img/mastersystemred-0.3.0.gif 'Master System overlay preview (red variation)'
[arcade8-screenshot]: ./img/arcade8-0.5.0.gif '4-4 buttons Arcade Stick overlay preview'
[arcade6-screenshot]: ./img/arcade6-0.6.0.gif '4-2 buttons Arcade Stick overlay preview'
[xbox360-screenshot]: ./img/xbox360-0.6.0.gif 'Xbox360 overlay preview'
[gba-screenshot]: ./img/gba-0.7.0.gif 'Game Boy Advance overlay preview'

# controller-overlay

Generate a browser source (to use via [OBS](https://obsproject.com/) or any other tool) displaying an overlay of your HOTAS controller in real time.

![Preview screenshot][elite-screenshot]

![Preview screenshot][megadrive-screenshot]

## How to use it

Download the [latest version](https://github.com/danikaze/controller-overlay/releases/latest) and open `index.html`. This should display a webpage like the one shown in the screenshot.

In `OBS` add a `New source > Browser` and enter the provided `OBS URL` in the bottom of the page (to show the page with a transparente background and without the info window at the bottom). This should be something like `file:///your-folder/controller-overlay/index.html?display=1`

## How to customize it

First version is just a PoC (_Proof of Concept_) where the shown controls are what **I** find interesting to show for **Elite Dangerous**, and the bindings are the ones I use with my **X-56**, so every value is harcoded.

However, bindings are configurable by changing the [Elite Dangerous](src/elite.ts) and [Mega Drive](src/megadrive6.ts) config files for and rebuilding the project.

The html will show the Elite one by default, but adding `?config=megadrive` should show the other one.

## Support

This project plans to support all kind of inputs. Those (and their progress) are:

- ☑ Digital buttons with CSS
- ☑ Digital buttons with images
- ☑ 1-axis with CSS
- ☐ 1-Analog axis with images
- ☑ 2-axis with CSS
- ☐ 2-Analog axis with images
- ☑ Digital buttons shown as 1-axis with CSS
- ☑ Digital buttons shown as 2-axis with CSS
- ☐ Digital buttons shown as 1-axis with images
- ☐ Digital buttons shown as 2-axis with images
- ☑ 1-axis shown as a digital button with CSS
- ☑ 1-axis shown as a digital button with images
- ☐ 1-axis shown as an analog button with CSS
- ☐ 1-axis shown as an analog button with images

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

### 0.2.0

- Allow to fully customize the layout from a [config file](src/elite.ts).
  Config file is still hardcoded tho, but it's a big step.
- Add configuration file for the Mega Drive mini 6 button controller.
- Add support for:
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
[megadrive-screenshot]: ./img/megadrive-0.2.0.gif 'Mega Drive overlay preview'

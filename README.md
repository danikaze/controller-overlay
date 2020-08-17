# controller-overlay

Generate a browser source (to use via [OBS](https://obsproject.com/) or any other tool) displaying an overlay of your HOTAS controller in real time.

`config=elite`

![Preview screenshot][elite-screenshot]

`config=megadrive6`

![Preview screenshot][megadrive6-screenshot]

`config=megadrive3`

![Preview screenshot][megadrive3-screenshot]

`config=nes`

![Preview screenshot][nes-screenshot]

`config=famicon`

![Preview screenshot][famicon-screenshot]

## How to use it

Download the [latest version](https://github.com/danikaze/controller-overlay/releases/latest) and open `index.html`. This should display a webpage like the one shown in the screenshot.

In `OBS` add a `New source > Browser` and enter the provided `OBS URL` in the bottom of the page (to show the page with a transparente background and without the info window at the bottom). This should be something like `file:///your-folder/controller-overlay/index.html?config=megadrive&display=1`

## How to customize it

First version is just a PoC (_Proof of Concept_) where the shown controls are what **I** find interesting to show for **Elite Dangerous**, and the bindings are the ones I use with my **X-56**, so every value is harcoded.

Later on, I added some other configs as shown in the top of this document

The html will show the Elite one by default, but adding `?config=megadrive` should show any other available one.

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

###

- Added a [configuration](src/configs/megadrive3.ts) for the Mega Drive mini 6B controller using the [3B design](img/megadrive3-0.3.0.gif).
- Added a [configuration](src/configs/nes.ts) for the Mega Drive mini 6B controller using the [NES](img/nes-0.3.0.gif).
- Added a [configuration](src/configs/famicon.ts) for the Mega Drive mini 6B controller using the [Famicon](img/famicon-0.3.0.gif).

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
[nes-screenshot]: ./img/nes-0.3.0.gif 'NES overlay preview'
[famicon-screenshot]: ./img/famicon-0.3.0.gif 'Famicon overlay preview'

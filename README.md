# controller-overlay

Generate a browser source (to use via [OBS](https://obsproject.com/) or any other tool) displaying an overlay of your HOTAS controller in real time.

![Preview screenshot][screenshot]

## How to use it

Download the [latest version](https://github.com/danikaze/controller-overlay/releases/latest) and open `index.html`. This should display a webpage like the one shown in the screenshot.

In `OBS` add a `New source > Browser` and enter the provided `OBS URL` in the bottom of the page (to show the page with a transparente background and without the info window at the bottom). This should be something like `file:///your-folder/controller-overlay/index.html?display=1`

## How to customize it

First version is just a PoC (_Proof of Concept_) where the shown controls are what **I** find interesting to show for **Elite Dangerous**, and the bindings are the ones I use with my **X-56**, so every value is harcoded.

However, bindings are configurable by changing [controller-definitions.ts](src/controller-definitions.ts) file and rebuilding the project.

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

[screenshot]: ./img/screenshot-0.1.0.png 'HOTAS overlay preview'

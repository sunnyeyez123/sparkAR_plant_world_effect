# Plants at Home
 An Instagram filter that let's you see how different types of plants would look in your house
 
## Inspiration

There are so many benefits to having plants at home. Plants in your home can boost mood, productivity, concentration, and creativity. With many of us sheltering in place during the COVID-19 pandemic plants can improve the environment where we are spending a lot more of our time.

## What it does

This filter aims to help you determine places in your home where you might want to add a plant to improve the environment. It provides a small selection of plants that you can add to your world. You can resize them and take photos of the places in your home where a plant could be a good fit. 

## How I built it

I built it by leveraging the Spark AR World Effect template to start then using documentation to learn to add the Native Picker UI. I imported plant images from the AR Library built into SparkAR via SketchFab.

## Challenges I ran into

I ran into a challenge swapping out objects when the picker was chosen. I looked online and eventually found a helpful [youtube video](https://www.youtube.com/watch?v=jRD2hMQpIr0&t=688s). the example code uses deprecated APIs so I used the SparkAR documentation to learn about the new methods I should be using to improve my code.

I also ran into issues trying to get display images for the 3D models I was using in the effect. I wanted to use these images as the labels for the picker buttons so that people can see the plant options. Initially, I had trouble finding a 3D object viewer for my Mac but later I found an online option via [AutoDesk](https://viewer.autodesk.com/designviews) that I used to create screenshots of the models.

## Accomplishments that I'm proud of

I am most proud of getting the basic effect working in only a few hours although I've never used the SparkAR platform before. There were moments where I was stuck and wanted to quit but I kept reading and experimenting and now that I've had a few breakthroughs I'm sure I can build so much more!

## What I learned

This was my first effect so I learned a lot about the SparkAR platform and how to create filters. I also learned a lot about where to get help and how to use patches and scripting to add interactivity to my effect. The SparkAR  Community provides a lot of support and inspiration. There are also a lot of videoes tutorials online to see demos on how to create different things.

## What's next for Plants at Home

- Allow people to place multiple objects in the world at the same time (not sure it's possible)
- Improving the variety of plants
- Ensure new items spawn in the person's field of view
- Improve the picker icons to display the plant images


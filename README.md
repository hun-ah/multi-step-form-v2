# Multi-step Form

This multi-input form is made with React and is a rebuild of [my first React project](https://multi-step-form-react-hwm.netlify.app/).

**You can check it out here:** [Multi-step Form](https://multi-step-form-reactv2-hwm.netlify.app/)

**Backend available here:** [Multi-step form api](https://github.com/hun-ah/multi-step-form-api)

https://github.com/hun-ah/multi-step-form-v2/assets/103898493/f3b48f90-2758-4862-8385-b612190cf33a

## How It's Made/Works:
**Built with: Vite, React, Node.js, Express and MongoDB**
This project is a rebuild of my first React application. The intention was to create drier, more modular code that is easier to read and interact with. The first time I built
this project, I was happy to simply have built something using React. Looking back on how disorganized and repetitive the original code was, I knew I needed to build something using
my current skills and standards.

This application is a multi-step form, where a user can enter their information, select options from multiple kinds of inputs (text, radio and checkbox), see a cost total of their
selections and then submit their information to a database - in this case, MongoDB.

## Optimizations
Right off the bat, you can see that in comparing the original designs to the application, this project matches said designs much more accurately than the first iteration. My knowledge
of CSS has grown since the first build, as well as my understanding of how to structure my HTML elements correctly. A great example of this would be the Sidebar component in the 
application. In the first build, I ended up creating two Sidebar components - one for mobile and one for desktop - because I was having issues with the responsive design. This time 
around, I was able to easily adjust the Sidebar component with CSS, instead of creating an unnecessary component.

In the first project, I used a LOT of in-line styling which became very messy.
I used CSS modules for almost all of the styling - save for a reset and global stylesheet - which keeps this code a lot more organized and modular in comparison to the first project.
I also created an OptionLayout component that can be used inside each step of the form. This component had the same basic styling wherever it was used (within the different form
option steps) and was a huge improvement from the first iteration, where I repeated all of the same styling for each page, just with different class names.

One of the most important changes I made in this project, was creating reusable components. In the first project, I created 10 separate inputs for each input inside of the form. This 
time around, I created 3 Input components (one text, one radio and one checkbox), that pulled information from each form step to render out different inputs with unique labels, styling
and state. This makes it a lot easier for me to create new inputs if need be and edit input information. I had initially created a single Input component and tried to reuse that for all
inputs and quickly found that to be too confusing/complicated. I think creating 3 was a good middle ground and seemed to make the most sense, based on my current skill level.

This project also includes proper email validation using RegEx, utilization of the Context API and a custom API built using Node.js and Express that submits the user info to MongoDB, 
which the original project did not include.

## Lessons Learned/Takeaways:
- great practice refactoring old code and building reusable components
- refresher on building an API and making fetch requests (most recent projects have been frontend only)



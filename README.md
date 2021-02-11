# verb-website
## Deployed URL: https://verb-website.herokuapp.com/
This project models a basic shopping website, with nine products that can be purchased. Item quantities can be controlled and updated within the shopping cart, and the user can click on products for more information. The user can also "checkout", which redirects them to a confirmation page.

### Project Structure
The data associated with this project is stored in App.js as the "data" variable. Each data point has:
- name : String
- price : String
- image : Imported Image
- description : String
- sku : String (unique)
- onSale : "True" or "False"

The code is organized into components, where each component handles and deligates different functionality. The following chart shows the basic layout of the component classes and how they are connected.

![project structure](https://github.com/sarahbawabe/verb-website/blob/master/src/images/components.png?raw=true)

The multi-page structure of the app is handled using React's Router, which allows for rendering updates based on URL location. It also allows for storage of information within the URL parameters, a property which was used on the ProductPage in order to determine which Product should be shown.

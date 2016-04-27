# super-activity-ind
## _Simple Activity indicator for your webapp_

### Installation
    1. `git clone https://github.com/sichunai/activity-indicator.git`
    2. Include `ai.png`, `ai.css`, `ai.js` into your project
      -- `<script src='src/ai.js' type='text/javascript'> </script>`
      -- `<link href='src/ai.css' rel='stylesheet' type='text/css'>`
      -- Add `ai.png` to your images.
      
### Usage
    - To show Activity indicator with a spinner:
        ``AI.show("spinner");``
    - To show Activity indicator with a pinwheel:
        ``AI.show("pinwheel");``
    - To show Activity indicator with a french bulldog:
        ``AI.show("bulldog");``
    - To show Activity indicator with an hourglass:
        ``AI.show("hourglass");``
    - To hide Activity indicator:
        ``AI.hide();``        
        
### Dependencies
  jQuery 2.1.3+

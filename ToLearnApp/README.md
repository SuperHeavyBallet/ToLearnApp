


Today todo:

card area
- Generate Random Card on inital component mount
- Design more extensive preview for random card displayed


- Adjust Completed/Not Completed to something more logical, maybe 'learnt' / 'still learning'

- Add Counters for total array size in each section

^^ Add Tick box on each card, on tick move to completed, add X box in completed section for each card

- Move Full Card display outside of Create New Card into seperate Component


- Design New Card Input Area
- Refactor component heirarchy to seperate elements from within CreateNew Card
- Priority needs a component
- Completed needs a component
- Cards needs a component
- Random needs a component
- Current needs a component

- `Completed status on creation not auto sorting to Completed card`
- `Converge Random Button/Random card area - Button Seperate, Display Card in`
- `Remove card not removing from Completed section`

`COMPONENT DOCUMENTATION`

-`Top Nav Bar` - Top Screen Nav Bar Menu, contains:
- - Logo/Title
- - Nav Bar Links - Not sure to what yet

- `Main Body` - Main Display Area, Manages Current Item States and distributes updates, Contains:

- - `Vertical Menu` - Left Side Menu, contains:
- - Menu Link - Different List Categories, can navigate between List Displays
- - Vertical Menu List - Contains High and Low Priority Cards for the current List Display 

- - `Create New Card` - Create a new card and include it within required sorting arrays

- - `Vertical List` - 
- - - `Current Cards` - Contains Each of the Card Previews
- - - `Completed Cards` - Contains Each of the Completed Cards
- - - `Random Card` - Contains The Generated Random Card

- - `Random Button` - Contains the button to generate a random card from the total array of non-completed cards and display in the related vertical list
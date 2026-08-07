Light Mode Tokens

  // ── brand colours ─────────────────────────────────────────────────────────────────
1. Brand Colours
Brand colours represent the primary visual identity of the application.

  // ──  primary ─────────────────────────────────────────────────────────────────
Colour: #FF7F56
// purpose:   
The main brand colour used to drive focus and indicate primary actions.
// usecases:   
* Primary buttons
* Selected states
* Active navigation items
* Key indicators
* Highlighted elements
// avoid:   
* Large background areas
* Long text passages
* Multiple competing actions on the same screen

  // ──  primary hover ─────────────────────────────────────────────────────────────────
Colour: #CB6241
// purpose:   
Displayed when users hover over primary interactive elements.
// usecases:   
* Primary button hover state
* Icon button hover state
* Interactive cards using brand colour

  // ──  primary active ─────────────────────────────────────────────────────────────────
Colour: #743622
// purpose:   
Displayed when a user is actively clicking or pressing an element.
// usecases:   
* Button pressed state
* Active selectable components

  // ──  primary bg subtle ─────────────────────────────────────────────────────────────────
Colour: #FF7F56 at 12% opacity
// purpose:   
Creates a low-emphasis branded background.
// usecases:  
* Informational banners
* Active filters
* Active tags

  // ──  primary border────────────────────────────────────────────────────────────────
Colour: #743622
// purpose:   
High emphasis branded border.
// usecases:   
* Selected cards
* Active form controls
* Focus indicators

  // ──  primary border subtle ─────────────────────────────────────────────────────────────────
Colour: #FF7F56 at 40% opacity
// purpose:   
Medium emphasis branded border.
// usecases:   
* Informational containers
* Selected chips
* Low prominence selection states

  // ──  primary text ─────────────────────────────────────────────────────────────────
Colour: #A04C31
// purpose:   
for any text that needs to be highlighted with the brand colour.



  // ──  brand gradient ─────────────────────────────────────────────────────────────────
2. Brand Gradient
Used for premium and marketing-style visual treatments.

Gradient Colours
Role	Colour
Shade 1	#F89474
Shade 2	#F0673D
// purpose:   
Adds visual depth and brand personality.
// usecases:   
* Hero sections
* Marketing banners
* Dashboard highlights
* Empty states
// avoid:   
* Standard buttons
* Form controls
* Dense data tables


  // ──  surface & elevation  ─────────────────────────────────────────────────────────────────
3. Surface & Elevation System
Surface colours communicate visual depth rather than shadows.

  // ──  level 0  ─────────────────────────────────────────────────────────────────
Level 0 – Base Application Background
Colour: #FEFEFE
// purpose:   
The foundation layer of the application.
// usecases:   
* Page backgrounds
* Main application canvas

  // ──  level 1  ─────────────────────────────────────────────────────────────────
Level 1 – Navigation Surface
Colour: #F7F7FB
// purpose:   
Used for persistent navigation containers.
// usecases:   
* Sidebar navigation
* Footer navigation
* Top navigation 

  // ──  level 2  ─────────────────────────────────────────────────────────────────
Level 2 – Content Surface
Colour: #F0F0F6
// purpose:   
Primary content containers.
// usecases:   
* Cards
* Tables
* Panels
* Widgets

  // ──  level 3  ─────────────────────────────────────────────────────────────────
Level 3 – Hover Surface
Colour: # E8E8F0
// purpose:   
Indicates hover interaction.
// usecases:   
* Hovered cards
* Hovered rows
* Hovered menu items

  // ──  level 4  ─────────────────────────────────────────────────────────────────
Level 4 – Elevated Surface
Colour: #E0E0EC
// purpose:   
Higher elevation layers.
// usecases:   
* Active rows 

  // ──  level 5  ─────────────────────────────────────────────────────────────────
Level 5 – Modal Surface
Colour: #D8D8E6
// purpose:   
Highest emphasis layer.
// usecases:   
* Dialogs
* Modals
* Tooltips bg 
* Critical overlays



  // ──  stroke system  ─────────────────────────────────────────────────────────────────
4. Stroke System
Borders help define structure and separation.

  // ──  stroke subtle  ─────────────────────────────────────────────────────────────────
Stroke Subtle
Colour: #E8E8F0
// purpose:   
Low visibility separation.
// usecases:   
* Internal dividers

  // ──  stroke default  ─────────────────────────────────────────────────────────────────
Stroke Default
Colour: #D0D0DE
// purpose:   
Standard component borders.
// usecases:   
* Inputs
* Cards
* Tables

  // ──  stroke strong  ─────────────────────────────────────────────────────────────────
Stroke Strong
Colour: #B8B8CA
// purpose:   
Higher visual separation.

  // ──  stroke hover  ─────────────────────────────────────────────────────────────────
Stroke Hover
Colour: #9E9EB5
// purpose:   
Interactive border state.
// usecases:   
* Hovered inputs
* Hovered cards

  // ──  stroke interactive  ─────────────────────────────────────────────────────────────────
Stroke Interactive
Colour: #FF7F56
// purpose:
Active interactive border.
// usecases:   
* Focused inputs
* Active controls



  // ──  semantic colours  ─────────────────────────────────────────────────────────────────
5. Semantic Colours
Semantic colours communicate status and feedback.

  // ──   success  ─────────────────────────────────────────────────────────────────
Success
Base
#16A34A
Used for:
* Success messages
* Completed states
* Positive indicators

Supporting Tokens
BG Solid.       - 16A34A             - Primary badge
BG Subtle.      - 16A34A 8% opacity  -	banner bg
Border	        - 15803D	           - Strong containers
Border Subtle   - 16A34A 40% opacity - Secondary states
Text	          - 14532D	           - copy

  // ──   warning  ─────────────────────────────────────────────────────────────────
Warning
Base
#D97706
Used for:
* Cautionary messages
* System warnings
* Attention-required states

Supporting Tokens
BG Solid	    - D97706	            - Primary badge
BG Subtle	    - D97706 8% opacity  - banners bg
Border	      - B45309	            - Strong containers
Border Subtle	- D97706 40% opacity  - Secondary states
Text	        - 78350F	            - copy

  // ──   error  ─────────────────────────────────────────────────────────────────
Error
Base
#DC2626
Used for:
* Failed actions
* Validation issues
* Destructive states

Supporting Tokens
BG Solid	   - DC2626	            - Primary badge
BG Subtle	   - DC2626 8% opacity	- banners bg
Border	     - B91C1C	            - Strong containers
Border Subtle- DC2626 40% opacity	- Secondary states
Text	       - 7F1D1D	            - copy

  // ──   information  ─────────────────────────────────────────────────────────────────
Information
Base
#2563EB
Used for:
* Informational messages
* Helpful guidance
* Neutral system updates

Supporting Tokens
BG Solid	   - 2563EB	             - Primary badge
BG Subtle	   - 2563EB 8% opacity	 - banners bg
Border.      - 1D4ED8	             - Strong containers
Border Subtle- 2563EB 40% opacity  - Secondary states
Text	       - 1E3A8A	             - copy



  // ──   text system  ─────────────────────────────────────────────────────────────────
6. Text System
Text colours create readable hierarchy.

  // ──   text primary  ─────────────────────────────────────────────────────────────────
Text Primary
Colour: #0F0F18
// purpose:   
Highest emphasis text.
// usecases:   
* Page titles
* Headings
* Primary content

  // ──   text secondary  ─────────────────────────────────────────────────────────────────
Text Secondary
Colour: #4A4A5E
// purpose:   
Supporting content.
// usecases:   
* Labels
* Secondary information

  // ──   text tertiary  ─────────────────────────────────────────────────────────────────
Text Tertiary
Colour: #6E6E88
// purpose:   
Low-emphasis content.
// usecases:   
* Metadata
* Timestamps
* Helper text

  // ──   text accent  ─────────────────────────────────────────────────────────────────
Text Accent
Colour: #5153F6
// purpose:   
Only use for links in the UI

  // ──   text disabled  ─────────────────────────────────────────────────────────────────
Text Disabled
Colour: #A0A0B8
// purpose:   
Unavailable content.
// usecases:   
* Disabled buttons
* Disabled menu items
* Disabled form fields

  // ──   text inverse  ─────────────────────────────────────────────────────────────────
Text Inverse
Colour: #F8FAFC
// purpose:
Text displayed on light or branded backgrounds.
// usecases:   
* Text inside dark status badges
* Text on black surfaces

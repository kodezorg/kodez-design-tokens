Dark Mode Tokens

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
Colour: #F89474
// purpose:   
Displayed when users hover over primary interactive elements.
// usecases:   
* Primary button hover state
* Icon button hover state
* Interactive cards using brand colour

  // ──  primary active ─────────────────────────────────────────────────────────────────
Colour: #FAAF97
// purpose:   
Displayed when a user is actively clicking or pressing an element.
// usecases:   
* Button pressed state
* Active selectable components

  // ──  primary bg subtle ─────────────────────────────────────────────────────────────────
Colour: #FF7F56 at 16% opacity
// purpose:   
Creates a low-emphasis branded background.
// usecases:  
* Informational banners
* Active filters
* Active tags

  // ──  primary border────────────────────────────────────────────────────────────────
Colour: #FF7F56
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
Colour: #FF7F56
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
Colour: #09090E
// purpose:   
The foundation layer of the application.
// usecases:   
* Page backgrounds
* Main application canvas

  // ──  level 1  ─────────────────────────────────────────────────────────────────
Level 1 – Navigation Surface
Colour: #0F0F16
// purpose:   
Used for persistent navigation containers.
// usecases:   
* Sidebar navigation
* Footer navigation
* Top navigation 

  // ──  level 2  ─────────────────────────────────────────────────────────────────
Level 2 – Content Surface
Colour: #15151E
// purpose:   
Primary content containers.
// usecases:   
* Cards
* Tables
* Panels
* Widgets

Surface KPI
Colour: #15151E at 72% opacity 
A reduced-emphasis surface designed for dashboard metrics and summary content. The lower opacity allows KPI components to remain visible while maintaining a lighter visual weight than standard cards.

  // ──  level 3  ─────────────────────────────────────────────────────────────────
Level 3 – Hover Surface
Colour: #1C1C27
// purpose:   
Indicates hover interaction.
// usecases:   
* Hovered cards
* Hovered rows
* Hovered menu items

  // ──  level 4  ─────────────────────────────────────────────────────────────────
Level 4 – Elevated Surface
Colour: #222230
// purpose:   
Higher elevation layers.
// usecases:   
* Active rows 

  // ──  level 5  ─────────────────────────────────────────────────────────────────
Level 5 – Modal Surface
Colour: #2B2B3F
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
Colour: #21212B
// purpose:   
Low visibility separation.
// usecases:   
* Internal dividers

  // ──  stroke default  ─────────────────────────────────────────────────────────────────
Stroke Default
Colour: #35374A
// purpose:   
Standard component borders.
// usecases:   
* Inputs
* Cards
* Tables

  // ──  stroke strong  ─────────────────────────────────────────────────────────────────
Stroke Strong
Colour: #4A4D63
// purpose:   
Higher visual separation.

  // ──  stroke hover  ─────────────────────────────────────────────────────────────────
Stroke Hover
Colour: #60637F
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
#22C55E
Used for:
* Success messages
* Completed states
* Positive indicators

Supporting Tokens
BG Solid.       - 22C55E             - Primary badge
BG Subtle.      - 22C55E 16% opacity -	banner bg
Border	        - 005C39	           - Strong containers
Border Subtle   - 22C55E 40% opacity - Secondary states
Text	          - 4ADE80	           - copy

  // ──   warning  ─────────────────────────────────────────────────────────────────
Warning
Base
#F59E0B
Used for:
* Cautionary messages
* System warnings
* Attention-required states

Supporting Tokens
BG Solid	    - F59E0B	            - Primary badge
BG Subtle	    - F59E0B 16% opacity  - banners bg
Border	      - 71491E	            - Strong containers
Border Subtle	- F59E0B 40% opacity  - Secondary states
Text	        - FBBF24	            - copy

  // ──   error  ─────────────────────────────────────────────────────────────────
Error
Base
#F46969
Used for:
* Failed actions
* Validation issues
* Destructive states

Supporting Tokens
BG Solid	   - F46969	            - Primary badge
BG Subtle	   - F46969 16% opacity	- banners bg
Border	     - F59E0B	            - Strong containers
Border Subtle- F46969 40% opacity	- Secondary states
Text	       - F98585	            - copy

  // ──   information  ─────────────────────────────────────────────────────────────────
Information
Base
#3B82F6
Used for:
* Informational messages
* Helpful guidance
* Neutral system updates

Supporting Tokens
BG Solid	   - 3B82F6	             - Primary badge
BG Subtle	   - 3B82F6 16% opacity	 - banners bg
Border.      - 15407B	             - Strong containers
Border Subtle- 3B82F6 40% opacity  - Secondary states
Text	       - 6AAAFA	             - copy



  // ──   text system  ─────────────────────────────────────────────────────────────────
6. Text System
Text colours create readable hierarchy.

  // ──   text primary  ─────────────────────────────────────────────────────────────────
Text Primary
Colour: #F8FAFC
// purpose:   
Highest emphasis text.
// usecases:   
* Page titles
* Headings
* Primary content

  // ──   text secondary  ─────────────────────────────────────────────────────────────────
Text Secondary
Colour: #BCBCC7
// purpose:   
Supporting content.
// usecases:   
* Labels
* Secondary information

  // ──   text tertiary  ─────────────────────────────────────────────────────────────────
Text Tertiary
Colour: #818197
// purpose:   
Low-emphasis content.
// usecases:   
* Metadata
* Timestamps
* Helper text

  // ──   text accent  ─────────────────────────────────────────────────────────────────
Text Accent
Colour: #7475FF
// purpose:   
Only use for links in the UI

  // ──   text disabled  ─────────────────────────────────────────────────────────────────
Text Disabled
Colour: #595976
// purpose:   
Unavailable content.
// usecases:   
* Disabled buttons
* Disabled menu items
* Disabled form fields

  // ──   text inverse  ─────────────────────────────────────────────────────────────────
Text Inverse
Colour: #0C0C0D
// purpose:
Text displayed on light or branded backgrounds.
// usecases:   
* Text inside orange buttons
* Text inside light status badges
* Text on white surfaces

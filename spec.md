# CodeGear Shop

## Current State
The app is a Hobby Tutorial Finder with:
- A backend that stores hobbies (addHobby, getHobbies, removeHobby)
- Internet Identity authentication
- Hobby cards with YouTube tutorial search links
- Error handling with retry logic for canister warm-up

## Requested Changes (Diff)

### Add
- A "Shop" tab/section in the app navigation
- Coding gear product data (pre-loaded, frontend-only) organized by category:
  - Keyboards
  - Mice
  - Monitors
  - Laptops
  - Headphones
  - Accessories (webcams, desk mats, cables, etc.)
- Each product has: name, description, price range, and an Amazon search link
- Products within each category are randomly shuffled on load to feel "fresh"
- Clicking a product opens the Amazon search results in a new tab
- A category filter row to show/hide categories
- Navigation tabs to switch between "Hobbies" and "Shop" views

### Modify
- App.tsx: Add tab navigation at the top to switch between Hobby and Shop views
- Header: Keep existing header but add tab switcher below it

### Remove
- Nothing removed

## Implementation Plan
1. Create a `shopData.ts` file with all product categories and items with Amazon search links
2. Create a `ShopSection.tsx` component with category grid and product cards
3. Update `App.tsx` to add tab navigation (Hobbies / Shop) and render the ShopSection
4. Apply deterministic data-ocid markers to shop interactive elements

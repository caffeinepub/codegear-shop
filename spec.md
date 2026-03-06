# Hobby Tutorial Finder

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- A page where the user can type in a hobby (e.g. "guitar", "photography", "chess")
- Display a list of saved hobbies
- For each hobby, show a section of relevant tutorial video suggestions (YouTube search embed or link cards)
- Ability to remove a hobby from the list
- Persist hobbies in backend storage

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Backend (Motoko)
- Store a list of hobbies per user (as text entries)
- CRUD: addHobby(name: Text), removeHobby(id: Nat), getHobbies() -> [Hobby]
- Each hobby has: id, name, createdAt

### Frontend
- Main page with a text input and "Add Hobby" button
- Hobby cards list: each card shows the hobby name, a "Find Tutorials" button, and a delete button
- Clicking "Find Tutorials" opens a panel or section showing YouTube search results for "<hobby> tutorial" using YouTube's iframe search embed or direct search links as cards
- Tutorial section shows 4-6 clickable YouTube search link cards with the hobby keyword
- Empty state when no hobbies added yet

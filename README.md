# Simple Daily GIF

A very basic daily gif Hubot script.

## Configuration

Environment variables:

- GIPHY_API_TOKEN

## Commands

`!daily [on|off]`

Every 24 hours after enabling, searches giphy for the day of the week plus a random word (see `src/word-list.json`) and returns the top gif.

If you don't specify `on` or `off`, it will list whether or not it is enabled.

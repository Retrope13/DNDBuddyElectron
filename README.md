The purpose of this software is to create a system that is reminiscient of a video game HUD/character information screen. I've noticed that when newer players of the Dungeons and Dragons table top role playing game are first introduced to the mechanics it can often be overwhelming and confusing. A straight forward and familiar system will be very helpful for new players.

# Running the software:
## Packaging for production:
### `npm run build`
### will compile the TS application into JS. Then it will bundle all of the application assets (CSS, HTML, JS, TS) and create a production build which will be standalone.

## Running for development:
### `npm run dev`
### Will concurrently run the `vite` command which runs a development server locally. This supports the hot-reloading as well as several other useful tools for developing. The other command that it runs is `electron .` which runs the electron application that exists in the specified main directory. 


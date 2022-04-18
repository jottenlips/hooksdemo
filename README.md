# hooksdemo
🪝 Hooks Demo for Mike with Expo


Everything is in app.js

```
yarn
```

```
yarn start
```

Click Web!


made this repo with the command

```
expo init hooksdemo
```

Bonus Learn more graphql FE: 

Apollo has wonderful Graphql hooks for `useQuery` and `useMutation`. 

https://www.apollographql.com/docs/react/get-started/

https://apis.guru/graphql-apis/ 

[Nirvana GraphQL Album Singles](https://graphbrainz.herokuapp.com/?query=query%20NirvanaAlbumSingles%20%7B%0A%20%20lookup%20%7B%0A%20%20%20%20artist(mbid%3A%20%225b11f4ce-a62d-471e-81fc-a69a8278c7da%22)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20releaseGroups(type%3A%20ALBUM)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20firstReleaseDate%0A%20%20%20%20%20%20%20%20%20%20%20%20relationships%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20releaseGroups(type%3A%20%22single%20from%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20target%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20ReleaseGroup%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20firstReleaseDate%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=NirvanaAlbumSingles)

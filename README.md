# Data Dashboard with Virtualized List (React & Next.js)

This project effectively tackles the challenge of presenting and interacting with a large dataset while maintaining a smooth user experience and a responsive design.

## Features

1. Displays a list with virtualized rows using react-window for efficient handling of large datasets (10,000+ entries).
2. Implements a search bar at the top to filter data dynamically based on user input (name field).

## Features Explanation

1. Efficient Data display:

The table on the index page utilizes react-window. This library renders and keeps in memory only the visible rows on the screen at any given time, significantly improving performance when dealing with large datasets.

2. User-friendly Search:

The SearchBar component allows filtering data based on user name as the user types in the search input. It uses the debounce pattern with a delay of 300ms to filter results to balance responsiveness and efficiency while searching. It also handles case sensibility transforming the search term and the user name to lowercase to compare them. When a new search is done the table component efficiently updates the displayed data to reflect only entries matching the search criteria.

## Technologies

- React
- Next.js
- Typescript
- react-window (for virtualization)
- Tailwind CSS for styles
- HeadlesUI for accesible UI components

## Project Structure

- `pages/`: Contains all the pages based on the routes.
- `components/`: Holds reusable components like the search bar and the table row.
- `icons/`: Holds reusable icons components.
- `types/`: Holds shared interfaces and types.
- `data/users.json`: JSON file containing 10,000 user entries.
- `styles/`: Contains files with global styles.

## UI:

![Example Image](./images/demo.png)

## To run locally

Install the dependencies

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

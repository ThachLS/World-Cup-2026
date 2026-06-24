# World Cup 2026 Web App

This project is a web application built using Next.js, React, TypeScript, and Tailwind CSS, designed to provide comprehensive information and features related to the World Cup 2026.

## Features

- **Home Dashboard**: Displays featured matches, live/latest scores, and quick navigation to other sections of the app.
- **Matches Page**: Allows users to filter matches by date, group, stage, team, and status.
- **Match Detail Page**: Provides detailed information about a specific match, including teams, score, venue, kickoff time, and a link to official highlights.
- **Teams Page**: Lists all 48 teams participating in the tournament, along with their group and basic statistics.
- **Standings Page**: Shows the standings for all 12 groups in the tournament.
- **Qualification Projection Page**: Computes and displays the top 2 teams from each group, the 8 best third-placed teams, and the projected Round of 32 bracket.
- **Bracket Page**: Visualizes the knockout rounds of the tournament in a bracket format.
- **Mobile-First Responsive Design**: Ensures a seamless experience across devices.
- **Clean Modern Aesthetic**: Features a football dashboard design that is both functional and visually appealing.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.

## Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/world-cup-2026-app.git
   cd world-cup-2026-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the app.

## Data Sources

The application currently uses local mock JSON data for matches, teams, and groups. The following files contain the mock data:

- `src/data/matches.json`
- `src/data/teams.json`
- `src/data/groups.json`

## Future Enhancements

- Integrate real API data sources to replace the mock data.
- Implement user authentication for personalized features.
- Add more detailed statistics and analytics for matches and teams.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
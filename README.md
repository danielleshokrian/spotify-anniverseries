# 🎵 Music Anniversary Finder

A React web application that helps music lovers discover and celebrate album anniversaries with a retro vinyl-inspired aesthetic. Search for any artist and filter their discography by anniversary milestones (5, 10, 15, 20, or 25-year anniversaries).

## Features

- **Artist Search** - Search for any artist using the Spotify Web API
- **Complete Discographies** - View all albums with cover art, release dates, and record labels
- **Anniversary Filter** - Filter albums by milestone anniversaries (5, 10, 15, 20, 25 years)
- **Custom Year Selection** - Choose any target year to calculate anniversaries from
- **Retro Vinyl Theme** - Dark theme with neon accents and vinyl record aesthetics
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Real-time Filtering** - Instant results as you adjust filter settings
- **Loading & Error States** - Graceful handling of API calls and edge cases

## Tech Stack

**Frontend:**
- React 18.2.0 - UI framework
- React Router 6.20.0 - Client-side routing
- Vite 5.0 - Build tool and dev server
- Tailwind CSS 3.4 - Utility-first styling
- Lucide React - Icon library

**API:**
- Spotify Web API - Music data and artist information

**Design:**
- Dark theme with black background
- Neon pink (#FF00FF), cyan (#00D9FF), and gold (#FFD700) accents
- Vinyl record and retro music aesthetic
- Smooth animations and hover effects

## Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher)
- npm or yarn
- A Spotify Developer Account

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/danielleshokrian/spotify-anniverseries.git
cd spotify-anniverseries
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Spotify API Credentials

#### Create a Spotify Developer App:

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create App"**
4. Fill in the details:
   - **App Name**: Music Anniversary Finder
   - **App Description**: Album anniversary tracker
   - **Redirect URI**: `https://localhost:5173`
   - **API/SDKs**: Check "Web API"
5. Click **"Save"**
6. Click **"Settings"** and copy your:
   - **Client ID**
   - **Client Secret** (click "View client secret")

#### Create Environment Variables:

Create a `.env` file in the project root:

```bash
touch .env
```

Add your credentials (replace with your actual values):

```env
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
```

 **Important:** Never commit your `.env` file to version control!

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Reference

This application uses the Spotify Web API with Client Credentials Flow authentication.

### Endpoints Used:

#### 1. Search Artists
```
GET https://api.spotify.com/v1/search
Parameters:
  - q: search query (artist name)
  - type: artist
  - limit: 10
```

#### 2. Get Artist Details
```
GET https://api.spotify.com/v1/artists/{id}
Returns: artist name, genres, follower count, images
```

#### 3. Get Artist Albums
```
GET https://api.spotify.com/v1/artists/{id}/albums
Parameters:
  - include_groups: album
  - market: US
  - limit: 50
Returns: album list with release dates, artwork, and labels
```

### Authentication

The app uses **Client Credentials Flow** for server-to-server authentication:
- Access tokens are automatically requested and cached
- Tokens auto-refresh when expired (1-hour lifetime)
- No user login required

## Usage

### Searching for an Artist

1. Navigate to the home page
2. Enter an artist name in the search bar
3. Press Enter or click the search button
4. Click on an artist from the results

### Using the Anniversary Filter

1. On the artist page, toggle **"Filter Active"**
2. Select a **Target Year** (e.g., 2026)
3. Choose an **Anniversary Increment**:
   - Every 5 years
   - Every 10 years
   - Every 15 years
   - Every 20 years
   - Every 25 years
4. The album grid automatically updates to show only anniversary albums
5. Each album displays a badge showing how many years (e.g., "10 Year Anniversary")

### Example Use Cases

**Finding 2025 Milestones:**
- Search: "Taylor Swift"
- Target Year: 2025
- Increment: 5 years
- Results: Albums from 2020, 2015, 2010, 2005, etc.

**Planning a 50th Anniversary Event:**
- Search: "David Bowie"
- Target Year: 2027
- Increment: 10 years
- Results: Find albums celebrating major milestones

## Testing

This project includes a comprehensive test suite using Vitest and React Testing Library.

### Running Tests
```bash
# Run all tests once
npm test

# Run tests in watch mode (auto-rerun on file changes)
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage
```


## Current Limitations:

1. **Rate Limiting**: Spotify API has rate limits
   - Basic tier: ~180 requests per minute
   - App caches tokens to minimize requests
   
2. **Album Duplicates**: Some albums appear in multiple markets
   - App filters most duplicates automatically
   - Occasionally some variants may appear

3. **Missing Album Data**: 
   - Some older albums lack high-quality images
   - App displays vinyl icon placeholder when images unavailable
   - Label information may be missing for some releases

4. **Authentication Scope**:
   - Uses Client Credentials (no user login)
   - Cannot access user-specific data (playlists, saved albums)

## Troubleshooting

### App Won't Start

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind Styles Not Loading

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Spotify API Errors

**"Failed to authenticate with Spotify":**
- Verify `.env` file exists in root directory
- Check that credentials are correct (no extra spaces)
- Ensure variables start with `VITE_`
- Restart dev server after changing `.env`

**"Failed to search artists":**
- Check internet connection
- Verify Spotify API status at [status.spotify.com](https://status.spotify.com)
- Check browser console for detailed error messages

### Search Returns No Results

- Try different search terms
- Some artists may not be on Spotify
- Check spelling of artist name

## Contact & Support

**Developer:** Danielle Shokrian

**Project Repository:** [github.com/danielleshokrian/spotify-anniverseries](https://github.com/danielleshokrian/spotify-anniverseries)

**Issues & Bugs:** Please open an issue on GitHub

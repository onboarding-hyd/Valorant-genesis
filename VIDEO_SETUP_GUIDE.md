# Video Background Setup Guide

## How to Change Video Backgrounds for Each Page

Your Valorant Showdown website now has 3 separate pages, each with its own customizable video background.

### Page Structure:
1. **Landing Page** (`/`) - Home page with hero section
2. **Details Page** (`/details`) - Tournament details and information  
3. **Register Page** (`/register`) - Registration form

### Changing Video Backgrounds:

#### Step 1: Add Your Video Files
Place your video files in the `src/assets/` directory:
```
src/assets/
├── 11_05_Homescreen_VCT.mp4 (current default)
├── your-landing-video.mp4
├── your-details-video.mp4
└── your-register-video.mp4
```

#### Step 2: Update Page Components

**For Landing Page** (`src/pages/LandingPage.jsx`):
```jsx
import yourLandingVideo from '../assets/your-landing-video.mp4';

// Update the VideoBackground component:
<VideoBackground 
  videoSrc={yourLandingVideo} 
  overlay={true} 
  overlayOpacity={0.4} 
/>
```

**For Details Page** (`src/pages/DetailsPage.jsx`):
```jsx
import yourDetailsVideo from '../assets/your-details-video.mp4';

// Update the VideoBackground component:
<VideoBackground 
  videoSrc={yourDetailsVideo} 
  overlay={true} 
  overlayOpacity={0.5} 
/>
```

**For Register Page** (`src/pages/RegisterPage.jsx`):
```jsx
import yourRegisterVideo from '../assets/your-register-video.mp4';

// Update the VideoBackground component:
<VideoBackground 
  videoSrc={yourRegisterVideo} 
  overlay={true} 
  overlayOpacity={0.6} 
/>
```

### Video Background Options:

- **videoSrc**: Path to your video file
- **overlay**: Whether to show dark overlay (true/false)
- **overlayOpacity**: Darkness of overlay (0.0 to 1.0)

### Supported Video Formats:
- MP4 (recommended)
- WebM
- OGV

### Video Recommendations:
- **Resolution**: 1920x1080 or higher
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Keep under 50MB for better performance
- **Encoding**: H.264 for MP4 files

### Current Navigation:
- Click "VALORANT SHOWDOWN" logo to go to Landing Page
- Use navigation menu: Home | Details | Register
- Landing page has buttons: "VIEW DETAILS" and "REGISTER NOW"

### Page Features:
- **Landing**: Hero section with countdown timer and tournament info
- **Details**: Tournament details and specifications
- **Register**: Registration form for participants
- **All Pages**: Custom video backgrounds, navigation bar, footer

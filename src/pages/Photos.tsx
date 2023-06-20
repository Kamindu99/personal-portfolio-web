const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { id: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg", width: 900, height: 800 },
    { id: "https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A", width: 1080, height: 1000 },
    { id: "https://pbs.twimg.com/media/E0uDvutUYAEIRsR.jpg:large", width: 1180, height: 1620 },
    { id: "https://pbs.twimg.com/media/FZSpEqFUIAAZIX9?format=jpg&name=large", width: 800, height: 707 },
    { id: "https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large", width: 900, height: 608 },
    { id: "https://media.licdn.com/dms/image/C4E16AQF7KGZv4tFVFQ/profile-displaybackgroundimage-shrink_200_800/0/1623943939422?e=2147483647&v=beta&t=ZCtdM13ByYalJjk7nROD1ccnnu-rhEUf6_bDN-dHsQk", width: 1080, height: 260 },

    { id: "https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A", width: 1080, height: 1000 },
    { id: "https://pbs.twimg.com/media/E0uDvutUYAEIRsR.jpg:large", width: 1180, height: 1620 },
    { id: "https://media.licdn.com/dms/image/C4E16AQF7KGZv4tFVFQ/profile-displaybackgroundimage-shrink_200_800/0/1623943939422?e=2147483647&v=beta&t=ZCtdM13ByYalJjk7nROD1ccnnu-rhEUf6_bDN-dHsQk", width: 1080, height: 260 },
    { id: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg", width: 900, height: 800 },
   { id: "https://pbs.twimg.com/media/FZSpEqFUIAAZIX9?format=jpg&name=large", width: 800, height: 707 },
    { id: "https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large", width: 900, height: 608 },
   
    { id: "https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large", width: 900, height: 608 },
    { id: "https://pbs.twimg.com/media/FZSpEqFUIAAZIX9?format=jpg&name=large", width: 800, height: 707 },
    { id: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg", width: 900, height: 800 },
    { id: "https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A", width: 1080, height: 1000 },
    { id: "https://media.licdn.com/dms/image/C4E16AQF7KGZv4tFVFQ/profile-displaybackgroundimage-shrink_200_800/0/1623943939422?e=2147483647&v=beta&t=ZCtdM13ByYalJjk7nROD1ccnnu-rhEUf6_bDN-dHsQk", width: 1080, height: 260 },
    { id: "https://pbs.twimg.com/media/E0uDvutUYAEIRsR.jpg:large", width: 1180, height: 1620 },

    { id: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg", width: 900, height: 800 },
    { id: "https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A", width: 1080, height: 1000 },
    { id: "https://pbs.twimg.com/media/E0uDvutUYAEIRsR.jpg:large", width: 1180, height: 1620 },
    { id: "https://pbs.twimg.com/media/FZSpEqFUIAAZIX9?format=jpg&name=large", width: 800, height: 707 },
    { id: "https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large", width: 900, height: 608 },
  
    { id: "https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A", width: 1080, height: 1000 },
    { id: "https://pbs.twimg.com/media/E0uDvutUYAEIRsR.jpg:large", width: 1180, height: 1620 },
    { id: "https://media.licdn.com/dms/image/C4E16AQF7KGZv4tFVFQ/profile-displaybackgroundimage-shrink_200_800/0/1623943939422?e=2147483647&v=beta&t=ZCtdM13ByYalJjk7nROD1ccnnu-rhEUf6_bDN-dHsQk", width: 1080, height: 260 },
    { id: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg", width: 900, height: 800 },
   { id: "https://pbs.twimg.com/media/FZSpEqFUIAAZIX9?format=jpg&name=large", width: 800, height: 707 },
    { id: "https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large", width: 900, height: 608 },
    { id: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg", width: 900, height: 800 },
    { id: "https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A", width: 1080, height: 1000 },
    { id: "https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large", width: 900, height: 608 },
    { id: "https://media.licdn.com/dms/image/C4E16AQF7KGZv4tFVFQ/profile-displaybackgroundimage-shrink_200_800/0/1623943939422?e=2147483647&v=beta&t=ZCtdM13ByYalJjk7nROD1ccnnu-rhEUf6_bDN-dHsQk", width: 1080, height: 260 },

];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: photo.id,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src:photo.id,
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;

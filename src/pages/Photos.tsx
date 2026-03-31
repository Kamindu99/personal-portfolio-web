import myPhotos from "../data/my-photos";

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const photos = myPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: photo.id,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.id,
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;

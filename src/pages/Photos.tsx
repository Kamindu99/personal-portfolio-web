const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { id: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg", width: 900, height: 800 },
    { id: "https://pbs.twimg.com/media/E0uDvutUYAEIRsR.jpg:large", width: 1180, height: 1620 },
    { id: "https://pbs.twimg.com/media/FZSpEqFUIAAZIX9?format=jpg&name=large", width: 800, height: 707 },
    { id: "https://pbs.twimg.com/media/E0tEXSVVcAAThjq.jpg:large", width: 900, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378619/MyImages/Myimages_6_e7oras.jpg", width: 800, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378619/MyImages/Myimages_2_lc8pbn.jpg", width: 900, height: 1408 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378619/MyImages/Myimages_5_od2frq.jpg", width: 400, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378620/MyImages/Myimages_10_twzlh5.jpg", width: 700, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378619/MyImages/Myimages_4_ixwrwc.jpg", width: 700, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_39_neieyn.jpg", width: 850, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378619/MyImages/Myimages_3_vy9qhs.jpg", width: 600, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687379684/MyImages/Myimages_24_x3cbu6.jpg", width: 550, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378620/MyImages/Myimages_7_lfyu0i.jpg", width: 550, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378620/MyImages/Myimages_8_jpvo51.jpg", width: 650, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687379684/MyImages/Myimages_25_xy1qjs.jpg", width: 800, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378620/MyImages/Myimages_11_qxbtop.jpg", width: 450, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378620/MyImages/Myimages_9_wxkcpw.jpg", width: 450, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378621/MyImages/Myimages_17_jxymkn.jpg", width: 500, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378621/MyImages/Myimages_12_llcxcq.jpg", width: 700, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378621/MyImages/Myimages_16_g7ozu4.jpg", width: 900, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687379682/MyImages/Myimages_20_z8ntvn.jpg", width: 1200, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378621/MyImages/Myimages_13_ludhgp.jpg", width: 700, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378621/MyImages/Myimages_14_h7nxd0.jpg", width: 500, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687379683/MyImages/Myimages_21_lhdajg.jpg", width: 1000, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378622/MyImages/Myimages_15_ml9e8p.jpg", width: 600, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378622/MyImages/Myimages_1_xzufo4.jpg", width: 608, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378622/MyImages/Myimages_18_aywf3l.jpg", width: 700, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687379683/MyImages/Myimages_19_n75wzg.jpg", width: 570, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687379685/MyImages/Myimages_23_cqz3vn.jpg", width: 500, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687379685/MyImages/Myimages_22_zcquro.jpg", width: 650, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_33_gapcai.jpg", width: 650, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380860/MyImages/Myimages_35_suyzgq.jpg", width: 950, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380860/MyImages/Myimages_34_ktjmdl.jpg", width: 540, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380860/MyImages/Myimages_36_p4gd5r.jpg", width: 950, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_43_kpqr6q.jpg", width: 950, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_27_yw37mj.jpg", width: 650, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_31_qiqxp8.jpg", width: 950, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_32_azqwc4.jpg", width: 840, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_28_aloi9f.jpg", width: 900, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_29_yk4nlt.jpg", width: 650, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_26_ed64oe.jpg", width: 700, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_30_u57vmh.jpg", width: 600, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_40_dwfggq.jpg", width: 900, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_37_fi3od5.jpg", width: 900, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_38_xsrkyc.jpg", width: 650, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_41_u2hisq.jpg", width: 550, height: 608 },
    { id: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_42_tn9jor.jpg", width: 950, height: 608 },

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

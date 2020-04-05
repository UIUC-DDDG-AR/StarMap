import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const ImgThirdEyeGenX2 = "/images/headsets/moverioBT300.jpg";

const useStyles = makeStyles({
    header: {
        paddingTop: "4em",
        background: "#011140",
        color: "white",
    },
    container: {
        padding: "1em",
    },
    grid: {
        flexGrow: 1,
    },
    card: {
        boxShadow: "none",
    },
    title: {
        padding: "0 1em",
    },
    media: {
        height: 300,
        margin: "0 1em",
    },
    content: {
        fontSize: 14,
        padding: "1em",
    },
    button: {
        fontWeight: 700,
    }
});

const ToolsPage = (props) => {
    const classes = useStyles();
    const documentation = props.tab
        ? require("../data/software_documentation")
        : require("../data/hardware_documentation");

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                {documentation.map((tool) => {
                    return (
                        <Grid item xs={6}>
                            <Card className={classes.card} variant="outlined">
                                <h2 className={classes.title}>{tool.name}</h2>

                                <CardMedia
                                    className={classes.media}
                                    image={ImgThirdEyeGenX2}
                                />

                                <CardContent className={classes.content}>
                                    {tool.description}
                                </CardContent>
                                <CardActions>
                                    <Button
                                        className={classes.button}
                                        variant="outlined"
                                        size="medium"
                                        color="default"
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};
export default ToolsPage;

const tools = [
    {
        category: "Head-mounted Displays",
        data: [
            {
                title: "Microsoft Hololens 2",
                img: "/images/headsets/hololens2.png",
                text:
                    "Mixed reality on HoloLens 2 combines an untethered device with apps and solutions that help people across your business learn, communicate, and collaborate more effectively. It's the culmination of breakthroughs in hardware design, AI, and mixed reality development from Microsoft, designed to help you lead your industry into the future—starting today.",
            },
            {
                title: "Magic Leap",
                img: "/images/headsets/magicLeap.png",
                text:
                    "Magic Leap 1 is a lightweight, wearable computer that brings the physical and digital worlds together as one.",
                //https://www.magicleap.com/en-us
            },
            {
                title: "Nreal Light",
                img: "/images/headsets/nreal-light.jpg",
                text:
                    "The first ready-to-wear mixed reality glasses that are both lightweight and comfortable",
                //https://www.nreal.ai/
            },
            {
                title: "Epson Moverio BT-300",
                img: "/images/headsets/moverioBT300.jpg",
                text:
                    "Experience a new way of seeing the world with the revolutionary Moverio BT-300 smart glasses from Epson®. These highly transparent glasses redefine augmented reality (AR) with a groundbreaking Si-OLED display. Superior transparency, plus a high-resolution camera, ensures seamless integration of digital content with the outside world. Ultra light and comfortable to wear, even over prescription glasses, the BT-300 features a binocular display, making it ideal for side-by-side 3D content. With wireless and Bluetooth® Smart (BLE) connectivity, it supports a wide range of accessories. Powered by an Intel® Atom chipset, running Moverio OS, the BT-300 is the ideal platform for developing AR apps.",
                //https://epson.com/For-Work/Wearables/Smart-Glasses/Moverio-BT-300-Smart-Glasses-%28AR-Developer-Edition%29-/p/V11H756020
            },
            {
                title: "ThirdEye Gen X2",
                img: ImgThirdEyeGenX2,
                text:
                    "Lightweight mixed reality glasses. At 9.8 ounces, the X2 Mixed Reality Glasses fit a wide field of view, contain powerful sensors, and come with the VisionEye SLAM SDK into an exceptionally minimalistic form factor.",
                //https://thirdeyegen.com/
            },
            {
                title: "Vuzix M400",
                img: ImgThirdEyeGenX2,
                text:
                    "The M400 is built for the workplace. It is ergonomically designed for all-day comfort and optimized for harsh environments.",
                //https://www.vuzix.com/products/m400-smart-glasses
            },
            {
                title: "Vuzix Blade",
                img: ImgThirdEyeGenX2,
                text:
                    "Vuzix Blade perfectly balances enterprise and prosumer demands. It is built for industry operations and is designed for all-day comfort.",
                //https://www.vuzix.com/products/blade-smart-glasses
            },
            {
                title: "Optinvent ORA-2",
                img: ImgThirdEyeGenX2,
                text:
                    "The ORA-2 is the most powerful wearable computing device in the world.  It is a revolutionary smart glass platform that will change the game for mobile augmented reality and wearable computing.",
                //http://www.optinvent.com/our_products/ora-2/
            },
            {
                title: "DreamWorld DreamGlass",
                img: ImgThirdEyeGenX2,
                text: "",
                //https://www.dreamworldvision.com/
            },
            {
                title: "Project North Star",
                img: ImgThirdEyeGenX2,
                text:
                    "To explore the boundaries of interactive design in AR, we created and open sourced Project North Star, which drove us to push beyond the limitations of existing systems.",
                //https://developer.leapmotion.com/northstar
            },
            {
                title: "Rokid Project Aurora",
                img: ImgThirdEyeGenX2,
                text:
                    "Rokid Glass is an independent AR glasses that integrates AI and AR technology. By responding to complex instructions and even predicting demand, Rokid Glass can better help enterprises improve their work efficiency.",
                //https://www.rokid.com/products/ar-glass/rokid-glass/
            },
        ],
    },
];

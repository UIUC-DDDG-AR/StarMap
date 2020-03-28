import React, { Component, Fragment } from "react";
import "./toolsPage.css";

import Card from "../card/card";
import Logo from "../../logo.svg";

const ImgThirdEyeGenX2 = "/images/headsets/moverioBT300.jpg";

const Grid = props => {
    const cells = props.data.map((data, idx) => (
        <Card
            orient="vertical"
            extra="border"
            title={data.title}
            img={data.img}
            key={data.title}
        >
            {data.text}
            <div className="learnmore">
                <a href="/">Learn more</a>
            </div>
        </Card>
    ));

    return <div className="grid">{cells}</div>;
};

class ToolsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: new Map(buttonData.map(data => [data, true]))
        };
    }

    updateFilter = d => {
        this.state.filter.set(d, !this.state.filter.get(d));
        this.setState({ filter: this.state.filter });
    };

    render() {
        return (
            <Fragment>
                <h1>{this.props.toolType} Tools</h1>

                {buttonData.map(data => {
                    const button_state = this.state.filter.get(data)? "active": "";
                    return (
                        <button
                            className={button_state}
                            onClick={this.updateFilter.bind(this, data)}
                        >
                            {data}
                        </button>
                    );
                })}

                {pageData.map(categoryData => (
                    <div>
                        <h2>{categoryData.category}</h2>
                        <Grid
                            data={categoryData.data.filter(d =>
                                this.state.filter.get(d.type)
                            )}
                        />
                    </div>
                ))}
            </Fragment>
        );
    }
}
export default ToolsPage;

// Temporary function for generating mock data.
Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
};

// Mock data
const buttonData = [
    "Body wearables",
    "Projectors",
    "Smart Glasses",
    "Head-mounted Displays",
    "Mobile",
    "Add-ons"
];

const gridText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
const pageData = [
    {
        category: "Head-mounted Displays",
        data: [
            {
                title: "Microsoft Hololens 2",
                img: "/images/headsets/hololens2.png",
                text: "Mixed reality on HoloLens 2 combines an untethered device with apps and solutions that help people across your business learn, communicate, and collaborate more effectively. It's the culmination of breakthroughs in hardware design, AI, and mixed reality development from Microsoft, designed to help you lead your industry into the future—starting today.",
                type: buttonData.sample() //https://www.microsoft.com/en-us/hololens
            },
            {
                title: "Magic Leap",
                img: "/images/headsets/magicLeap.png",
                text: "Magic Leap 1 is a lightweight, wearable computer that brings the physical and digital worlds together as one.",
                type: buttonData.sample() //https://www.magicleap.com/en-us
            },
            {
                title: "Nreal Light",
                img: "/images/headsets/nreal-light.jpg",
                text: "The first ready-to-wear mixed reality glasses that are both lightweight and comfortable",
                type: buttonData.sample() //https://www.nreal.ai/
            },
            {
                title: "Epson Moverio BT-300",
                img: "/images/headsets/moverioBT300.jpg",
                text: "Experience a new way of seeing the world with the revolutionary Moverio BT-300 smart glasses from Epson®. These highly transparent glasses redefine augmented reality (AR) with a groundbreaking Si-OLED display. Superior transparency, plus a high-resolution camera, ensures seamless integration of digital content with the outside world. Ultra light and comfortable to wear, even over prescription glasses, the BT-300 features a binocular display, making it ideal for side-by-side 3D content. With wireless and Bluetooth® Smart (BLE) connectivity, it supports a wide range of accessories. Powered by an Intel® Atom chipset, running Moverio OS, the BT-300 is the ideal platform for developing AR apps.",
                type: buttonData.sample() //https://epson.com/For-Work/Wearables/Smart-Glasses/Moverio-BT-300-Smart-Glasses-%28AR-Developer-Edition%29-/p/V11H756020
            },
            {
                title: "ThirdEye Gen X2",
                img: ImgThirdEyeGenX2,
                text: "Lightweight mixed reality glasses. At 9.8 ounces, the X2 Mixed Reality Glasses fit a wide field of view, contain powerful sensors, and come with the VisionEye SLAM SDK into an exceptionally minimalistic form factor.",
                type: buttonData.sample() //https://thirdeyegen.com/
            },
            {
                title: "Vuzix M400",
                img: ImgThirdEyeGenX2,
                text: "The M400 is built for the workplace. It is ergonomically designed for all-day comfort and optimized for harsh environments.",
                type: buttonData.sample() //https://www.vuzix.com/products/m400-smart-glasses
            },
            {
                title: "Vuzix Blade",
                img: ImgThirdEyeGenX2,
                text: "Vuzix Blade perfectly balances enterprise and prosumer demands. It is built for industry operations and is designed for all-day comfort.",
                type: buttonData.sample() //https://www.vuzix.com/products/blade-smart-glasses
            },
            {
                title: "Optinvent ORA-2",
                img: ImgThirdEyeGenX2,
                text: "The ORA-2 is the most powerful wearable computing device in the world.  It is a revolutionary smart glass platform that will change the game for mobile augmented reality and wearable computing.",
                type: buttonData.sample() //http://www.optinvent.com/our_products/ora-2/
            },
            {
                title: "DreamWorld DreamGlass",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample() //https://www.dreamworldvision.com/
            },
            {
                title: "Project North Star",
                img: ImgThirdEyeGenX2,
                text: "To explore the boundaries of interactive design in AR, we created and open sourced Project North Star, which drove us to push beyond the limitations of existing systems.",
                type: buttonData.sample() //https://developer.leapmotion.com/northstar
            },
            {
                title: "Rokid Project Aurora",
                img: ImgThirdEyeGenX2,
                text: "Rokid Glass is an independent AR glasses that integrates AI and AR technology. By responding to complex instructions and even predicting demand, Rokid Glass can better help enterprises improve their work efficiency.",
                type: buttonData.sample() //https://www.rokid.com/products/ar-glass/rokid-glass/
            },
            {
                title: "Tesseract holoboard Premium Edition",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Aryzon AR Headset",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Mira Prism",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Realmax Qian",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "ANTVR MIX",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Shadow Creator Action One",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Google Glass Enterprise Edition 2",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Everysight Raptor",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Toshiba dynaEdge AR100 Viewer",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Varjo XR-1",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Lightform (projector)",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Bose Frames",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Zungle Viper",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "Vue Glasses",
                img: ImgThirdEyeGenX2,
                text: gridText,
                type: buttonData.sample()
            }                
            
        ]
    },
    {
        category: "Smart Glasses",
        data: [
            {
                title: "Echo Frames",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title2",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title3",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title4",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title5",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title6",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title7",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title8",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            },
            {
                title: "title9",
                img: Logo,
                text: gridText,
                type: buttonData.sample()
            }
        ]
    }
];

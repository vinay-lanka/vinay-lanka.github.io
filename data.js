var project_data =  [{
        "title": "Drone Visual Particle Filter (CamDroneLoc)",
        "body": "Developed a novel particle filter for drone localization using visual encodings (CNN, VecKM, HOF), tested in Gazebo PX4 SITL, improving positioning accuracy.",
        "link": "https://github.com/vinay-lanka/Visual-Encoding-Particle-Filter",
        "imagelink": "assets/images/camdroneloc.jpeg"
    },
    {
        "title": "Path Planning Competition Winner",
        "body": "Footage from our winning run for a Path Planning competition held for ENPM661 - Path Planning for Robots.",        
        "link": "https://youtu.be/sFpMTiF1X4U",
        "imagelink": "assets/images/competition.png"
    },
    {
        "title": "EV Charging Bot",
        "body": "Developed an EV Charging Bot with FANUC CRX-10iA/L, using stereo vision for 3D goal generation and a custom IK solver for real-time trajectory execution via Damped Least Squares.",
        "link": "https://github.com/vinay-lanka/car_charger_robot",
        "imagelink": "assets/images/sim.gif"
    },
    {
        "title": "HDAL: Human Detection and Localization",
        "body": "Designed and deployed a geometric computer vision algorithm that uses intrinsic camera parameters and pixel information from bounding box information detected using a YOLO v5 model to get accuracy levels greater than 95% for calculated human coordinates relative to the robot’s camera.",        
        "link": "https://github.com/vinay-lanka/Human-Detection-and-Localization",
        "imagelink": "https://i3.ytimg.com/vi/6D_xVzv4fGo/maxresdefault.jpg"
    },
    {
        "title": "Intercom Device (Client) (Neoflux)",
        "body": "Developed a solution for a production-grade multithreaded VOIP product with G711 alaw encoding and encryption based on the Raspberry Pi CM4 module. Designed a carrier board with suitable components for audio recording, processing, and playback.",        
        "link": "",
        "imagelink": "assets/images/intercom.jpg"
    },
    {
        "title": "Autonomous Land Mapping Robot (Client) (Neoflux)",
        "body": "Developed a fully autonomous exploration robot to map an unknown area in 3D. Designed the chassis, electronics and custom algorithms for navigation. Implemented 2-stage EKF (local and global) with RTK GPS for precise position estimates.",        
        "link": "",
        "imagelink": "assets/images/autonomouslandmappingrobot.jpg"
    },
    {
        "title": "Magic Wand (Gesture recognition) (Neoflux)",
        "body": "Created a wand that controls the robot when you wave it in a specific pattern. Used Edge Impulse for recording and detecting the patterns.",        
        "link": "https://www.linkedin.com/feed/update/urn:li:activity:6985485858464305152/",
        "imagelink": "assets/images/swishandflickvideo.png"
    },
    {
        "title": "The battery pack (Neoflux)",
        "body": "A tiny battery made with off the shelf components for quick prototyping of IoT usecases with wireless charging.",        
        "link": "https://www.youtube.com/watch?v=QO9MB4L_WQU",
        "imagelink": "assets/images/batterypack.png"
    },
    {
        "title": "Robot-Web-Suite",
        "body": "Robot-Web-Suite is a web-based platform to remotely control your robotic devices in real-time. <br>An intuitive web interface to manipulate devices like robotic arms and rovers with a service to log points and achieve playback. <br>The system is aimed to replace the usage of teach pendants or similar devices in industrial automation. <br>Using ROS and MoveIt packages we focus on creating a hardware agnostic system that can easily be ported to any robot.",        
        "link": "https://www.youtube.com/watch?v=37U62tWk-zE&t=29s",
        "imagelink": "assets/images/robotwebsuitedemo.png"
    },
    {
        "title": "Tnet",
        "body": "Tnet is an end to end solution with a portal designed to help customers view their injection moulding machine data in an intuitive web interface.<br><br> Uses MySQL, Node.js with Express and AngularJS. Part of my summer internship at Toshiba Machine, Chennai.",
        "link": "https://github.com/vinay-lanka/tnet",
        "imagelink": "assets/images/toshiba.png"
    },
    {
        "title": "Home Service Robot",
        "body": "A Home Service Robot simulated in ROS and Gazebo. Can navigate to a maker, pick up a virtual object and drop it off at another maker.<br><br> Uses - <br> - Adaptive Monte Caro Localisation for Localisation.<br> - Gmapping for Mapping<br> - Navigation is done with move_base ros package",
        "link": "https://github.com/vinay-lanka/Home-Service-Robot",
        "imagelink": "assets/images/homerobotproject.gif"
    },
    {
        "title": "Robot arm color sorter",
        "body": "A Raspberry Pi based real time colour sorter based on Computer Vision (OpenCV) and the Dobot Magician arm, a robotic arm with an Android app to show statistics",
        "link": "https://youtube.com/watch?v=BghCrTwk0t0&t=21s",
        "imagelink": "assets/images/coloursorter.png"
    }
]
var blog_data =  [
    {
        "title": "Disturbance Compensating Model Predictive Control",
        "body": "Wrote a comprehensive report and implemented the paper by Z. Li and J. Sun, ”Disturbance Compensating Model Predictive Control With Application to Ship Heading Control”",
        "link": "assets/DCMPC_Report.pdf",
        "imagelink": "assets/images/dcmpc.png"
    },
    {
        "title": "Research Paper - <br> Designing and Implementing Robot-Web-Suite, <br> A Cloud Based Robotics Platform",
        "body": "Robot-Web-Suite is a web-based platform to control your robotic devices remotely in real-time. The end-user is provided with an intuitive web interface to manipulate devices like robotic arms and mobile robots without having any prior knowledge of the kinematics of the machines. The system also provides a service to log points and achieve playback.",
        "link": "https://ieeexplore.ieee.org/document/9929637",
        "imagelink": "assets/images/paper.png"
    },
    {
        "title": "Autonomous Rover From Scratch (ROS) Part 1",
        "body": " Part 1 of making an Autonomous Robot from scratch using ROS.<br> Here we look at building a basic model and getting started with the microcontroller.",
        "link": "https://www.youtube.com/watch?v=SLDJAOEjVt4&t=434s",
        "imagelink": "assets/images/autonomousroverpt1.jpg"
    },
    {
        "title": "Swish and Flick — Gesture Detection using Deep Learning on Edge Devices",
        "body": "Using an ESP-32 and Edge Impulse to recognize magic spells via gesture recognition",
        "link": "https://medium.com/@vinaylanka/swish-and-flick-gesture-detection-using-deep-learning-on-edge-devices-42d9d863f0ae",
        "imagelink": "assets/images/swishandflickblog.png"
    },
    {
        "title": "Closed Loop Position Control in Stepper Motors",
        "body": "Using the AMS5600 Magnetic Encoder to solve closed loop control",
        "link": "https://medium.com/@vinaylanka/closed-loop-position-control-in-stepper-motors-7f531c084dcd",
        "imagelink": "assets/images/closedloop.png"
    },
    {
        "title": "Autonomous Rover From Scratch (ROS) Part 2",
        "body": " Part 2 of making an Autonomous robot from scratch using ROS. <br> This ultra-long episode covers a lot of stuff. We finally finish writing the Arduino sketch for the hardware. We briefly understand what ROS is,why it was formed and how it works. We look at the kinematics of a differential-drive robot and implement the differential-drive package in a ROS workspace.",
        "link": "https://www.youtube.com/watch?v=n9yU7u55zGg",
        "imagelink": "assets/images/autonomousroverpt2.jpg"
    },
    {
        "title": "Making a hyper-engineered water alarm solution",
        "body": "Raspberry Pi, ESP32, Docker, Nodejs, CI/CD, and an Android app. It has it all.",
        "link": "https://itnext.io/making-a-hyper-engineered-water-alarm-solution-19ba5078d2bc",
        "imagelink": "assets/images/wateralarmsystem.png"
    },
    {
        "title": "Raspberry Pi Pico: A $4 beast!",
        "body": "The Raspberry Pi Foundation’s foray into the microcontroller market. <br>(First Impressions/Tutorial)",
        "link": "https://vinaylanka.medium.com/raspberry-pi-pico-a-4-beast-b000cc50f50a",
        "imagelink": "assets/images/raspberrypipico.png"
    },
    {
        "title": "Exploring Embedded - A Primer",
        "body": "Exploring Embedded, a complete guide for anyone wanting to look beyond Arduino. <br>A comprehensive tutorial with links to software, explanation, and references for literature to guide you further in the field of embedded systems development.",
        "link": "https://medium.com/@vinaylanka/exploring-embedded-a-primer-8977a51bb7af",
        "imagelink": "assets/images/exploringembedded.png"
    },
    {
        "title": "Control any Robotic Arm with ROS",
        "body": "ROS has a steep learning curve and integrating one's robot into its ecosystem is a challenge.<br> An article on how to control any Robotic Arm with MoveIt, a powerful motion planning framework in ROS.",
        "link": "https://blog.usejournal.com/control-any-robotic-arm-with-ros-b10a3115306c",
        "imagelink": "assets/images/rosarmmoveit.png"
    },
    {
        "title": "Development Boards: A Guide",
        "body": "A helpful guide for people to choose the right board for their next project",
        "link": "https://medium.com/techloop/development-boards-a-guide-ab5767f15d47",
        "imagelink": "assets/images/devboard.jpeg"
    }
]
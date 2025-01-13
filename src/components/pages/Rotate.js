import { useEffect, useState } from "react";

const Rotate = () => {
    const [rotation, setRotation] = useState(0);
    const sun = document.getElementById("sun");

    const makeRotation = () => {
        if (rotation < 360) {
            setRotation(rotation + 30);
        }
        else {
            setRotation(0);
        }
        sun.style.background = "red";
    }

    useEffect(() => {
        makeRotation();
    }, []);

}

export default Rotate;
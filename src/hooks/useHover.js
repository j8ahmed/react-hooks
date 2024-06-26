import { useState } from "react";

import useEventListener from "./useEventListener";


export default function useHover(elementRef)
{
    const [hovered, setHovered] = useState(false);

    useEventListener("mouseover", () => setHovered(true), elementRef);
    useEventListener("mouseout", () => setHovered(false), elementRef);

    return { hovered, setHovered };
}

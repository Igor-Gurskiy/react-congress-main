import styled from "styled-components";

const ShelfBase = styled.div`
    position: absolute;
    background-size: contain;
    will-change: transform;
    transform-origin: top left;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -ms-transform: translateZ(0); /* IE 9 */
    -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
    transform: translateZ(0) scale(0.193181818);
    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
`

export default ShelfBase
import styled from "styled-components";

export const ShelfPicture = styled.picture`
  position: absolute;
  top: 0px;
  left: 0px;
  user-select: none;

  img {
    user-select: none;
    width: 1177px;
    height: 2158px;
    z-index: 2;
    will-change: transform;
    transform-origin: top left;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.300741427);
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
`
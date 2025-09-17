import React, {useEffect} from 'react';

const PreloadImages = () => {
    useEffect(() => {
        const imageSources = [
            '/assets/images/dercos/linegame/cases/case__one-before.png',
            '/assets/images/dercos/linegame/cases/case__one-after.png',
            '/assets/images/dercos/linegame/cases/case__two-before.png',
            '/assets/images/dercos/linegame/cases/case__two-after.png',
            '/assets/images/dercos/linegame/cases/case__three-before.png',
            '/assets/images/dercos/linegame/cases/case__three-after.png',
            '/assets/images/dercos/linegame/cases/case__four-before.png',
            '/assets/images/dercos/linegame/cases/case__four-after.png',
            '/assets/images/dercos/linegame/cases/case__five-before.png',
            '/assets/images/dercos/linegame/cases/case__five-after.png',
        ];

        imageSources.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return null;
}

export default PreloadImages;

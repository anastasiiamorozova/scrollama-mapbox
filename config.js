var config = {
    style: 'mapbox://styles/anastasiia-morozova/clynde5kc01y801nzd18zaqne',
    accessToken: 'pk.eyJ1IjoiYW5hc3Rhc2lpYS1tb3Jvem92YSIsImEiOiJjbHlpeGd2bmgwaWRvMmtvanpvbXB3bWdsIn0.5b13QMKiY7mzSJOnjp7Wlg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    //inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Are you safe during the air attack?',
    subtitle: 'I analyzed the 5 biggest cities in the Sumy region of Ukraine. I marked the streets from which you can reach the nearest shelter within 5 minutes in green. It turned out that in all but one city more that 50% of the area is unsafe.',
    byline: 'Anastasiia Morozova',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: true,
            title: 'Охтирка',
            //image: 'sorry.png',
            //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [34.07056, 51.38996],
zoom: 6.97,
pitch: 25.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
        },
        {
            id: 'shostka',
            alignment: 'right',
            hidden: false,
            title: 'Shostka',
            //image: './path/to/image/source.png',
            description: 'There are 59 shelters in Shostka. However, they are mostly located in the city centre because a major part of the city is private housing.',
            location: {
                center: [33.48702, 51.85600],
zoom: 13,
pitch: 25.00,
bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                layer: 'shostka',
                opacity: 1,
                duration: 5000
            }],
            onChapterExit: [{layer: 'shostka',
                opacity: 1,
                duration: 5000}]
        },
        {
            id: 'konotop',
            alignment: 'left',
            hidden: false,
            title: 'Konotop',
            //image: 'sorry.png',
            description: 'In Konotop the number of shelters is even smaller – 47. Which makes it the least safe in the region.',
            location: {
                center: [33.20471, 51.23985],
zoom: 12.03,
pitch: 25.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
        },
        {
            id: 'Romny',
            alignment: 'right',
            hidden: false,
            title: 'Romny',
            /*image: './path/to/image/source.png',*/
            description: 'Although in Romny the local authorities report to have 67 shelters, some of them are located outside the city in rural area.',
            location: {
                center: [33.48682, 50.74290],
zoom: 13.01,
pitch: 25.00,
bearing: 0.00
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sumy',
            alignment: 'left',
            hidden: false,
            title: 'Sumy',
            //image: './path/to/image/source.png',
            description: 'Sumy is the biggest city in the region, therefore it has the biggest number of shelters. However, it has been often reported by the journalist that during air raid alert some shelters are closed.',
            location: {
                center: [34.80553, 50.91211],
zoom: 12.49,
pitch: 25.00,
bearing: 0.00
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'okhtyrka',
            alignment: 'left',
            hidden: false,
            title: 'Okhtyrka',
            //image: './path/to/image/source.png',
            description: 'Okhtyrka has been partially occupied as the war broke out. Today it counts 107 shelters, which are located mostly in the city center.',
            location: {
                center: [34.89727, 50.31056],
zoom: 12.05,
pitch: 25.00,
bearing: 0.00
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'search',
            alignment: 'right',
            hidden: false,
            interactive:true,
            title: 'See if your street is in the safe area.',
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            location: {
                center:[34.07056, 51.38996],
                zoom: 7.5,
                pitch: 25.00,
                bearing: 0.00
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

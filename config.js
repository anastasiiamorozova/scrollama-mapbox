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
    title: 'Укриття поруч?',
    subtitle: 'Кордон.Медіа провели дослідження, наскільки районні центри Сумської області забезпечені укриттями. Ми порахували, з яких вулиць можна дістатися до найближчого укриття за 5 хвилин.',
    byline: 'Anastasiia Morozova',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'okhtyrka',
            alignment: 'left',
            hidden: false,
            title: 'Охтирка',
            //image: 'sorry.png',
            //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [34.88819, 50.30709],
zoom: 13.03,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'intro',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'okhtyrka',
                    opacity: 1
                }
            ]
        },
        {
            id: 'shostka',
            alignment: 'right',
            hidden: false,
            title: 'Шостка',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [33.48702, 51.85600],
zoom: 12.46,
pitch: 45.00,
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
            title: 'Конотоп',
            /*image: './path/to/image/source.png',*/
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'staten island',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.12432, 40.56992],
zoom: 11.35,
pitch: 45.00,
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

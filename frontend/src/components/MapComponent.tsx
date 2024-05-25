import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";
import {Link} from "@tanstack/react-router";

const geoUrl = "https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson"

const coordinates = [
    {
        "city": "Prague",
        "lat": "50.0875",
        "lng": "14.4214",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Praha",
        "capital": "primary",
        "population": "1357326",
        "population_proper": "1357326"
    },
    {
        "city": "Brno",
        "lat": "49.1925",
        "lng": "16.6083",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Jihomoravský Kraj",
        "capital": "admin",
        "population": "396101",
        "population_proper": "396101"
    },
    {
        "city": "Ostrava",
        "lat": "49.8356",
        "lng": "18.2925",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Moravskoslezský Kraj",
        "capital": "admin",
        "population": "283504",
        "population_proper": "283504"
    },
    {
        "city": "Plzeň",
        "lat": "49.7475",
        "lng": "13.3775",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Plzeňský Kraj",
        "capital": "admin",
        "population": "181240",
        "population_proper": "181240"
    },
    {
        "city": "Liberec",
        "lat": "50.7667",
        "lng": "15.0667",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Liberecký Kraj",
        "capital": "admin",
        "population": "107389",
        "population_proper": "107389"
    },
    {
        "city": "Olomouc",
        "lat": "49.5939",
        "lng": "17.2508",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Olomoucký Kraj",
        "capital": "admin",
        "population": "101825",
        "population_proper": "101825"
    },
    {
        "city": "České Budějovice",
        "lat": "48.9747",
        "lng": "14.4747",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Jihočeský Kraj",
        "capital": "admin",
        "population": "96417",
        "population_proper": "96417"
    },
    {
        "city": "Hradec Králové",
        "lat": "50.2092",
        "lng": "15.8322",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Královéhradecký Kraj",
        "capital": "admin",
        "population": "93506",
        "population_proper": "93506"
    },
    {
        "city": "Pardubice",
        "lat": "50.0386",
        "lng": "15.7792",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Pardubický Kraj",
        "capital": "admin",
        "population": "92149",
        "population_proper": "92149"
    },
    {
        "city": "Ústí nad Labem",
        "lat": "50.6583",
        "lng": "14.0417",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Ústecký Kraj",
        "capital": "admin",
        "population": "91963",
        "population_proper": "91963"
    },
    {
        "city": "Zlín",
        "lat": "49.2331",
        "lng": "17.6669",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Zlínský Kraj",
        "capital": "admin",
        "population": "74191",
        "population_proper": "74191"
    },
    {
        "city": "Havířov",
        "lat": "49.7831",
        "lng": "18.4228",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Moravskoslezský Kraj",
        "capital": "",
        "population": "70245",
        "population_proper": "70245"
    },
    {
        "city": "Kladno",
        "lat": "50.1431",
        "lng": "14.1053",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Středočeský Kraj",
        "capital": "",
        "population": "68436",
        "population_proper": "68436"
    },
    {
        "city": "Most",
        "lat": "50.5031",
        "lng": "13.6367",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Ústecký Kraj",
        "capital": "",
        "population": "63856",
        "population_proper": "63856"
    },
    {
        "city": "Opava",
        "lat": "49.9381",
        "lng": "17.9044",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Moravskoslezský Kraj",
        "capital": "",
        "population": "55512",
        "population_proper": "55512"
    },
    {
        "city": "Frýdek-Místek",
        "lat": "49.6856",
        "lng": "18.3506",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Moravskoslezský Kraj",
        "capital": "",
        "population": "54188",
        "population_proper": "54188"
    },
    {
        "city": "Jihlava",
        "lat": "49.4003",
        "lng": "15.5906",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Vysočina",
        "capital": "admin",
        "population": "52548",
        "population_proper": "52548"
    },
    {
        "city": "Teplice",
        "lat": "50.6444",
        "lng": "13.8319",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Ústecký Kraj",
        "capital": "",
        "population": "50843",
        "population_proper": "50843"
    },
    {
        "city": "Karviná",
        "lat": "49.8542",
        "lng": "18.5428",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Moravskoslezský Kraj",
        "capital": "",
        "population": "50172",
        "population_proper": "50172"
    },
    {
        "city": "Karlovy Vary",
        "lat": "50.2306",
        "lng": "12.8725",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Karlovarský Kraj",
        "capital": "admin",
        "population": "49043",
        "population_proper": "49043"
    },
    {
        "city": "Chomutov",
        "lat": "50.4611",
        "lng": "13.4167",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Ústecký Kraj",
        "capital": "",
        "population": "46940",
        "population_proper": "46940"
    },
    {
        "city": "Jablonec nad Nisou",
        "lat": "50.7244",
        "lng": "15.1681",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Liberecký Kraj",
        "capital": "",
        "population": "45830",
        "population_proper": "45830"
    },
    {
        "city": "Mladá Boleslav",
        "lat": "50.4125",
        "lng": "14.9044",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Středočeský Kraj",
        "capital": "",
        "population": "45000",
        "population_proper": "45000"
    },
    {
        "city": "Prostějov",
        "lat": "49.4722",
        "lng": "17.1106",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Olomoucký Kraj",
        "capital": "",
        "population": "43551",
        "population_proper": "43551"
    },
    {
        "city": "Přerov",
        "lat": "49.4556",
        "lng": "17.4511",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Olomoucký Kraj",
        "capital": "",
        "population": "41634",
        "population_proper": "41634"
    },
    {
        "city": "Česká Lípa",
        "lat": "50.6886",
        "lng": "14.5386",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Liberecký Kraj",
        "capital": "",
        "population": "37262",
        "population_proper": "37262"
    },
    {
        "city": "Třebíč",
        "lat": "49.2150",
        "lng": "15.8817",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Vysočina",
        "capital": "",
        "population": "34712",
        "population_proper": "34712"
    },
    {
        "city": "Tábor",
        "lat": "49.4144",
        "lng": "14.6578",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Jihočeský Kraj",
        "capital": "",
        "population": "34301",
        "population_proper": "34301"
    },
    {
        "city": "Znojmo",
        "lat": "48.8556",
        "lng": "16.0489",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Jihomoravský Kraj",
        "capital": "",
        "population": "34146",
        "population_proper": "34146"
    },
    {
        "city": "Kolín",
        "lat": "50.0281",
        "lng": "15.2006",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Středočeský Kraj",
        "capital": "",
        "population": "33289",
        "population_proper": "33289"
    },
    {
        "city": "Příbram",
        "lat": "49.6883",
        "lng": "14.0092",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Středočeský Kraj",
        "capital": "",
        "population": "32743",
        "population_proper": "32743"
    },
    {
        "city": "Písek",
        "lat": "49.3089",
        "lng": "14.1475",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Jihočeský Kraj",
        "capital": "",
        "population": "30742",
        "population_proper": "30742"
    },
    {
        "city": "Kroměříž",
        "lat": "49.2989",
        "lng": "17.3931",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Zlínský Kraj",
        "capital": "",
        "population": "28185",
        "population_proper": "28185"
    },
    {
        "city": "Orlová",
        "lat": "49.8453",
        "lng": "18.4303",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Moravskoslezský Kraj",
        "capital": "",
        "population": "27966",
        "population_proper": "27966"
    },
    {
        "city": "Líšeň",
        "lat": "49.2075",
        "lng": "16.6861",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Jihomoravský Kraj",
        "capital": "",
        "population": "26781",
        "population_proper": "26781"
    },
    {
        "city": "Břevnov",
        "lat": "50.0833",
        "lng": "14.3579",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Středočeský Kraj",
        "capital": "",
        "population": "25756",
        "population_proper": "25756"
    },
    {
        "city": "Vsetín",
        "lat": "49.3386",
        "lng": "17.9961",
        "country": "Czechia",
        "iso2": "CZ",
        "admin_name": "Zlínský Kraj",
        "capital": "",
        "population": "25393",
        "population_proper": "25393"
    }
]


const coordinateToMarker = (coordinate: any) => {
    return {
        markerOffset: 15,
        name: coordinate.city,
        coordinates: [parseFloat(coordinate.lng), parseFloat(coordinate.lat)]
    }
}

const markers = [
    ...coordinates.map(coordinateToMarker)
];

type Props = {
    data: any[]
}


export const MapChart = (
    {
        data
    }: Props) => {


    const geoMatchedData = (name: string) => {
        const listOfKeywords = data?.map((d) => d.keyword?.map((k: any) => k.cs)).flat()
        const el =  data.find((d) => d.title.cs.includes(name) || listOfKeywords.includes(name))
        return el
    }

    return (
        <ComposableMap
            projection="geoAzimuthalEquidistant"
            projectionConfig={{
                rotate: [-15.0, -52.0, 0],
                center: [0.3, -2],
                scale: 10350,
            }}>
            <Geographies geography={geoUrl}>
                {({geographies}) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                        />
                    ))
                }
            </Geographies>
            {markers.map(({name, coordinates, markerOffset}) => geoMatchedData(name) ? (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                    <Link to={'/city-detail' } search={{
                        url: geoMatchedData(name)?.distribution?.[0]?.accessURL as string
                    }}>
                        <g
                            fill="none"
                            stroke="#FF5533"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)"
                        >
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
                        </g>
                        <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{fontFamily: "system-ui", fill: "#5D5A6D"}}
                        >
                            {name}
                            {/*{JSON.stringify(geoMatchedData(name))}*/}
                        </text>
                    </Link>

                </Marker>
            ) : null)}
        </ComposableMap>);
};
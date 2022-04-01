import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext, { IMapContext } from "./MapContext";
import * as ol from "ol";

interface Props {
	children: React.ReactNode,
	zoom: number,
	center: Array<number>
}

// interface IMap {
// 	olMap: ol.Map
// }

const Map = ({ children, zoom, center }: Props) => {
	const mapRef = useRef();
	let options = {
		view: new ol.View({ zoom, center }),
		layers: [],
		controls: [],
		overlays: []
	};
	let mapObject = new ol.Map(options);
	mapObject.setTarget(mapRef.current);
	const [map, setMap] = useState<IMapContext>({ map: mapObject });	

	// on component mount
	useEffect(() => {
		let options = {
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: []
		};

		let mapObject = new ol.Map(options);
		mapObject.setTarget(mapRef.current);
		
		setMap({ map: mapObject });

		return () => mapObject.setTarget(undefined);
	}, []);

	// zoom change handler
	useEffect(() => {
		if (!map) return;

		map.map.getView().setZoom(zoom);
	}, [zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return;

		map.map.getView().setCenter(center)
	}, [center])

	return (
		<MapContext.Provider value= {{ map }}>
			<div ref={mapRef.current} className="ol-map">
				{children}
			</div>
		</MapContext.Provider>
	)	
}

export default Map;
import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext, { IMapContext } from "./MapContext";
import * as ol from "ol";

interface Props {
	children: React.ReactNode,
	zoom: number,
	center: Array<number>
}

const Map = ({ children, zoom, center }: Props) => {
	const mapRef = useRef<HTMLDivElement>(null);

	const [map, setMap] = useState<IMapContext>({map: undefined});	

	// on component mount
	useEffect(() => {
		let options = {
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: []
		};
		let mapObject = new ol.Map(options);
		mapObject.setTarget(mapRef.current || undefined);
		
		setMap({ map: mapObject });
		return () => mapObject.setTarget(undefined);
	}, [center, zoom]);

	// zoom change handler
	useEffect(() => {
		if (!map?.map) return;

		map.map.getView().setZoom(zoom);
	}, [map, zoom]);

	// center change handler
	useEffect(() => {
		if (!map?.map) return;

		map.map.getView().setCenter(center)
	}, [center, map])
	console.log('CHILDREN: ', map.map);
	return (
		<MapContext.Provider value= {{ map: map.map }}>
			<div ref={mapRef} className="ol-map">
				{children}
			</div>
		</MapContext.Provider>
	)	
}

export default Map;
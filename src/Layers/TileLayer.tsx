import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLTileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";

interface Props {
	source: TileSource,
	zIndex: number
}

const TileLayer = ({ source, zIndex = 0 }: Props) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let tileLayer = new OLTileLayer({
			source,
			zIndex,
		});

		map.addLayer(tileLayer);
		tileLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(tileLayer);
			}
		};
	}, [map, source, zIndex]);

	return null;
};

export default TileLayer;

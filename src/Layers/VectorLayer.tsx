import { useContext, useEffect } from "react";
import MapContext, { IMapContext } from "../Map/MapContext";
import OLVectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

interface Props {
	source: VectorSource,
	style: any,
	zIndex: number
}

const VectorLayer = ({ source, style, zIndex = 0 }: Props) => {
	const { map } = useContext(MapContext) as IMapContext;

	useEffect(() => {
		if (!map) return;

		let vectorLayer = new OLVectorLayer({
			source,
			style
		});

		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(vectorLayer);
			}
		};
	}, [map, source, style, zIndex]);

	return null;
};

export default VectorLayer;
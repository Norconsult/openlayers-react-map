import React, { useContext, useEffect, useState } from "react";
// import { FullScreen } from "ol/control";
// import MapContext from "../Map/MapContext";

// const FullScreenControl = () => {
// 	const { olMap } = useContext(MapContext);

// 	useEffect(() => {
// 		if (!olMap) return;

// 		let fullScreenControl = new FullScreen({});

// 		olMap.controls.push(fullScreenControl);

// 		return () => olMap.controls.remove(fullScreenControl);
// 	}, [olMap]);

// 	return null;
// };

// export default FullScreenControl;
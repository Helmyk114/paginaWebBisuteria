import React from "react";
import "./contenedor2.css";

const Texto3 = ({ precio }) => {
	return (
		<div>
			<label className="label">
				<p>{precio} $</p>
			</label>
		</div>
	);
};

export default Texto3;
import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
        <p>
          {/* show only 0-200 characters if readMore is true using the substring method */}
					{readMore ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setReadMore(!readMore)}>
						{readMore ? "show less" : "  read more"}
					</button>
				</p>
				<button className="delete-btn" onClick={() => removeTour(id)}>
					not interested
				</button>
			</footer>
		</article>
	);
};

export default Tour;

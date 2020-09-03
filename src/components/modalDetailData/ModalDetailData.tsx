import React from "react";
import "./ModalDetailData.css";

interface ModalDetailDataProps {
	children: React.ReactNode;
	data?: string | Date;
}

const ModalDetailData: React.FC<ModalDetailDataProps> = ({
	children,
	data,
}) => {
	return (
		<div>
			<div className="modalDetailData">
				<p className="modalDetailData__subtitle">{children} &#160;</p>

				<p className="modalDetailData__detail">{data ? data : "None"}</p>
			</div>
		</div>
	);
};

export default ModalDetailData;

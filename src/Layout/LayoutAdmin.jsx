import FooterAdmin from "../components/FooterAdmin/FooterAdmin";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";
import React from "react";

const LayoutAdmin = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <HeaderAdmin />
            <div
                style={{
                    flex: 1,
                }}
            >
                {props.children}
            </div>
            <FooterAdmin />
        </div>
    );
};

export default LayoutAdmin;

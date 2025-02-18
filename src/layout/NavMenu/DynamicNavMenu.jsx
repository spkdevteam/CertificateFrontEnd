import React, { useState } from "react";
import { Link } from "react-router-dom";

const DynamicNavMenu = ({ capability }) => {
    const [selectedMenu, setSelectedMenu] = useState("");
    const [expandedSubMenus, setExpandedSubMenus] = useState({});

    const toggleSubMenu = (menu) => {
        setSelectedMenu(menu === selectedMenu ? "" : menu);
    };

    const toggleChildMenu = (subMenu) => {
        setExpandedSubMenus((prev) => ({
            ...prev,
            [subMenu]: !prev[subMenu],
        }));
    };

    return (
        <div className="w-full flex gap-2 p-4">
            {Object.keys(capability)?.map((menu) => (
                <div
                    key={menu}
                    className={`w-${Math.floor(12 / Object.keys(capability)?.length)}/12 border p-2 cursor-pointer`}
                    onClick={() => toggleSubMenu(menu)}
                >
                    <div className="font-bold mb-2">{menu}</div>
                    {selectedMenu === menu && capability[selectedMenu]?.menu ? (
                        <div className="ml-4 border-t pt-2">
                            {Object.entries(capability[selectedMenu].menu).map(([subKey, item]) => (
                                <div key={item._id} className="mb-1">
                                    <div
                                        className="cursor-pointer font-semibold"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleChildMenu(subKey);
                                        }}
                                    >
                                        {item.displayName}
                                    </div>
                                    {expandedSubMenus[subKey] && item.menu ? (
                                        <div className="ml-4 border-l pl-2">
                                            {Object.entries(item.menu).map(([childKey, childItem]) => (
                                                <div key={childItem._id} className="mb-1">
                                                    <Link to={childItem.path} className="hover:text-gray-300 block">
                                                        {childItem.displayName}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default DynamicNavMenu;

import { Link } from "react-router-dom";

export default function UserPanelMenuItem({
    activeTab,
    onClickHandler,
    activeTitle,
    title,
    icon,
    className,
    path,
}) {
    return (
        <li>
            <Link
                onClick={onClickHandler}
                className={`user-panel-menu-item ${
                    activeTab === activeTitle ? "text-white bg-primary" : ""
                } ${className}`}
                to={path}
            >
                <svg className="w-6 h-6">
                    <use href={`#${icon}`}></use>
                </svg>
                <span>{title}</span>
            </Link>
        </li>
    );
}

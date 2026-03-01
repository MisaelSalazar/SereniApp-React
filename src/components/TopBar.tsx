import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface TopBarProps {
    title: string;
    rightIcon?: IconDefinition;
    rightLink?: string;
    onRightClick?: () => void;
}

const TopBar: FC<TopBarProps> = ({
    title,
    rightIcon,
    rightLink,
    onRightClick,
}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleRightAction = () => {
        if (onRightClick) {
            onRightClick();
        } else if (rightLink) {
            navigate(rightLink);
        }
    };

    return (
        <div className="head-container row topBar mt-2" style={{marginLeft: "0.5rem"}}>
            {/* Volver*/}
            <div className="col-4 mt-1">
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={handleBack}
                    style={{fontSize: "2rem"}}
                />
            </div>

            {/* Titulo */}
            <div className="col-4 mt-1">
                <h3>{title}</h3>
            </div>

            <div className="col-2"></div>

            {/* Icono Opcional */}
            <div className="col-2 mt-1">
                {rightIcon && (
                    <FontAwesomeIcon
                        icon={rightIcon}
                        onClick={handleRightAction}
                        style={{fontSize: "2rem"}}
                    />
                )}
            </div>
        </div>
    );
};

export default TopBar;
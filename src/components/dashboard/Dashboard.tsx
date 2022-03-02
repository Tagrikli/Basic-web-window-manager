import GridLayout from "react-grid-layout";
import "../../styles/dashboard.scss";
import Draggable from "./Draggable";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <GridLayout
                className="layout"
                cols={5}
                rowHeight={200}
                width={1200}
                draggableCancel=".panel-content"
                draggableHandle=".panel-handle"
            compactType={null}>
                
                <div className="panel" key="a">
                    <Draggable></Draggable>
                </div>
                <div className="panel" key="b">
                    <Draggable></Draggable>
                </div>
                <div className="panel" key="c">
                    <Draggable></Draggable>
                </div>
            </GridLayout>
        </div>
    );
}

import GraphDays from "./GraphDays";
import GraphMonths from "./GraphMonths";

function GridGraph(){
    
    return( <>
                <table>
                    <caption>Streak</caption>
                    <GraphDays/>
                    <GraphMonths/>
                </table>
            </>);
}

export default GridGraph
import React from "react";
import * as _ from "lodash";
import models from "../models";
import interpreter from "../interpreter";
import Checkbox from "@material-ui/core/Checkbox";
import Textfield from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AstrogationContainer from './AstrogationContainer';
import AthleticsContainer from './AthleticsContainer';
import CharmContainer from './CharmContainer';
import CoercionContainer from './CoercionContainer';
import ComputersContainer from './ComputersContainer';
import CoolContainer from './CoolContainer';
import CoordinationContainer from './CoordinationContainer';
import DeceptionContainer from './DeceptionContainer';
import DisciplineContainer from './DisciplineContainer';
import LeadershipContainer from './LeadershipContainer';
import MechanicsContainer from './MechanicsContainer';
import MedicineContainer from './MedicineContainer';
import NegotiationContainer from './NegotiationContainer';
import PerceptionContainer from './PerceptionContainer';
import PilotingPlanetaryContainer from './PilotingPlanetaryContainer';
import PilotingSpaceContainer from './PilotingSpaceContainer';
import ResilienceContainer from './ResilienceContainer';
import SkulduggeryContainer from './SkulduggeryContainer';
import StealthContainer from './StealthContainer';
import StreetwiseContainer from './StreetwiseContainer';
import SurvivalContainer from './SurvivalContainer';
import VigilanceContainer from './VigilanceContainer';

class Component extends React.Component {
    render(){
        return (<Grid id="generalSkills" container spacing={8} justify="space-around" direction={"vertical" == "vertical" ? "column" : "row"}>
                    <Grid item xs={12}>
<AstrogationContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<AthleticsContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<CharmContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<CoercionContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<ComputersContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<CoolContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<CoordinationContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<DeceptionContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<DisciplineContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<LeadershipContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<MechanicsContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<MedicineContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<NegotiationContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<PerceptionContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<PilotingPlanetaryContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<PilotingSpaceContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<ResilienceContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<SkulduggeryContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<StealthContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<StreetwiseContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<SurvivalContainer value={this.props.value} />
</Grid>
<Grid item xs={12}>
<VigilanceContainer value={this.props.value} />
</Grid>
                </Grid>);
    }

    shouldComponentUpdate(){
        return false;
    }
}
export default Component;
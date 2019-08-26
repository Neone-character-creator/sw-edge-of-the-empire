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
import BrawnCharacteristicsNumber from './BrawnCharacteristicsNumber';
import AgilityCharacteristicsNumber from './AgilityCharacteristicsNumber';
import IntellectCharacteristicsNumber from './IntellectCharacteristicsNumber';
import CunningCharacteristicsNumber from './CunningCharacteristicsNumber';
import WillpowerCharacteristicsNumber from './WillpowerCharacteristicsNumber';
import PresenceCharacteristicsNumber from './PresenceCharacteristicsNumber';

class Component extends React.Component {
    render(){
        return (<Grid id="characteristics" container spacing={8} justify="space-around" direction={"horizontal" == "vertical" ? "column" : "row"}>
                    <Grid item xs={2}>
<BrawnCharacteristicsNumber value={this.props.value} />
</Grid>
<Grid item xs={2}>
<AgilityCharacteristicsNumber value={this.props.value} />
</Grid>
<Grid item xs={2}>
<IntellectCharacteristicsNumber value={this.props.value} />
</Grid>
<Grid item xs={2}>
<CunningCharacteristicsNumber value={this.props.value} />
</Grid>
<Grid item xs={2}>
<WillpowerCharacteristicsNumber value={this.props.value} />
</Grid>
<Grid item xs={2}>
<PresenceCharacteristicsNumber value={this.props.value} />
</Grid>
                </Grid>);
    }

    shouldComponentUpdate(){
        return false;
    }
}
export default Component;
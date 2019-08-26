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
import VigilanceLabelLabel from './VigilanceLabelLabel';
import VigilanceCareerFlagCheckbox from './VigilanceCareerFlagCheckbox';
import VigilanceRatingNumber from './VigilanceRatingNumber';

class Component extends React.Component {
    render(){
        return (<Grid id="vigilance" container spacing={8} justify="space-around" direction={"horizontal" == "vertical" ? "column" : "row"}>
                    <Grid item xs={4}>
<VigilanceLabelLabel value={this.props.value} />
</Grid>
<Grid item xs={4}>
<VigilanceCareerFlagCheckbox value={this.props.value} />
</Grid>
<Grid item xs={4}>
<VigilanceRatingNumber value={this.props.value} />
</Grid>
                </Grid>);
    }

    shouldComponentUpdate(){
        return false;
    }
}
export default Component;
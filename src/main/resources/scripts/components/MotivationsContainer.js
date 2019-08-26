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
import MotivationsLabelLabel from './MotivationsLabelLabel';
import MotivationsListList from './MotivationsListList';

class Component extends React.Component {
    render(){
        return (<Grid id="motivations" container spacing={8} justify="space-around" direction={"vertical" == "vertical" ? "column" : "row"}>
                    <Grid item xs={12}>
<MotivationsLabelLabel value={this.props.value} />
</Grid>
<Grid item xs={12}>
<MotivationsListList value={this.props.value} />
</Grid>
                </Grid>);
    }

    shouldComponentUpdate(){
        return false;
    }
}
export default Component;
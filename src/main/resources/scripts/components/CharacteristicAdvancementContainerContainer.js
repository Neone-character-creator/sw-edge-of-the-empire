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
import CharacteristicAdvancementLabelLabel from './CharacteristicAdvancementLabelLabel';
import CharacteristicAdvancementSelect from './CharacteristicAdvancementSelect';
import CharacteristicAdvancementCostNumber from './CharacteristicAdvancementCostNumber';
import CharacteristicSubmitButton from './CharacteristicSubmitButton';

class Component extends React.Component {
    render(){
        return (<Grid id="characteristicAdvancementContainer" container spacing={8} justify="space-around" direction={"vertical" == "vertical" ? "column" : "row"}>
                    <Grid item xs={12}>
<CharacteristicAdvancementLabelLabel value={this.props.value} />
</Grid>
<Grid item xs={12}>
<CharacteristicAdvancementSelect value={this.props.value} />
</Grid>
<Grid item xs={12}>
<CharacteristicAdvancementCostNumber value={this.props.value} />
</Grid>
<Grid item xs={12}>
<CharacteristicSubmitButton value={this.props.value} />
</Grid>
                </Grid>);
    }

    shouldComponentUpdate(){
        return false;
    }
}
export default Component;
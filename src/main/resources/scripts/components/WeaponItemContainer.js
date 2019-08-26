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
import WeaponNameTextfield from './WeaponNameTextfield';
import WeaponSkillTextfield from './WeaponSkillTextfield';
import WeaponDamageNumber from './WeaponDamageNumber';
import WeaponRangeTextfield from './WeaponRangeTextfield';
import WeaponCritNumber from './WeaponCritNumber';
import WeaponSpecialTextfield from './WeaponSpecialTextfield';

class Component extends React.Component {
    render(){
        return (<Grid id="weaponItem" container spacing={8} justify="space-around" direction={"horizontal" == "vertical" ? "column" : "row"}>
                    <Grid item xs={2}>
<WeaponNameTextfield value={this.props.value} />
</Grid>
<Grid item xs={1}>
<WeaponSkillTextfield value={this.props.value} />
</Grid>
<Grid item xs={1}>
<WeaponDamageNumber value={this.props.value} />
</Grid>
<Grid item xs={1}>
<WeaponRangeTextfield value={this.props.value} />
</Grid>
<Grid item xs={1}>
<WeaponCritNumber value={this.props.value} />
</Grid>
<Grid item xs={2}>
<WeaponSpecialTextfield value={this.props.value} />
</Grid>
                </Grid>);
    }

    shouldComponentUpdate(){
        return false;
    }
}
export default Component;
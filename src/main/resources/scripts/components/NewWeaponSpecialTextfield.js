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
import { connect } from "react-redux";
class Component extends React.Component {
    render(){
        return <Textfield disabled={this.props.disabled} id="newWeaponSpecial" fullWidth={true} label="Special" value={this.props.value} onChange={this.props.update} />;
    }

    shouldComponentUpdate(nextProps){
        return this.props.disabled !== nextProps.disabled ||
            this.props.value !== nextProps.value;
    }
}
const isBoundComponent = true
const boundProperty = "$state.selectedWeapon.special"; // The expression used to determine the value of binding.
const readOnly = false; // If this component only calculates its value, or is bound and can update it.
const valueExpression = "";
const action = "undefined";
const disabledWhenExpression = undefined;
const selectionCountExpression = 0;
const connected = connect((state, ownProps) => {
    const context = {
        $state: state,
        $model: models,
        $this: ownProps.value,
        $index: ownProps.index
    }
    const value = (()=>{
        try {
            if (isBoundComponent){
                return _.get(context, boundProperty);
            } else {
                return interpreter.interpret(boundProperty, context);
            }
        } catch(e){
            console.error(e);
            return undefined;
        }
    })();
    const maxSelections = interpreter.interpret(selectionCountExpression, context);
    const options = (()=>{
        return interpreter.interpret(valueExpression, context);
        })() || [];
    const disabled = interpreter.interpret(disabledWhenExpression, context);
    const clickAction = interpreter.interpret(action, context);
    return {
        clickAction,
        disabled,
        options,
        maxSelections,
        value: _.isNil(value) ? "" : value
    };
}, (dispatch) => {
    return {dispatch};
}, (stateProps, dispatchProps, ownProps) => {
    var {dispatch} = dispatchProps;
    return {...stateProps,
        onClick: clickHandler.bind(null, dispatch,  stateProps),
        update: stateUpdater.bind(null, dispatch, stateProps)
    };
})(Component);

function doNothing(){};

function clickHandler(dispatch, stateProps, event){
    dispatch(stateProps.clickAction);
}

function stateUpdater(dispatch, stateProps, event){
    const value = event.target.value;
    if(!stateProps.maxSelection || stateProps.maxSelection == 1 || value.length <= stateProps.maxSelection) {
        dispatch({ type: "SET", path: boundProperty, value});
    }
}

function determineValues(expression, state, value){
    if (!expression){
        return [];
    }
    const expressionTokens = expression.split(".");
    switch(expressionTokens[0]){
        case "model":
            return _.get(models, expressionTokens.slice(1).join("."));
        case "character":
            return _.get(state, expression, []);
    }
}

export default connected;
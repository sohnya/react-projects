import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove != option)
        }))
    };
    handlePick = () => {
        if (this.state.options.length > 0) {
            const randomChoice = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomChoice]
            this.setState(() => ({
                selectedOption: option
            }))
        }
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

        // Instead of explicitly setting up the function body and returning 
        // the object I'm going to implicitly return the object by wrapping the 
        // object in parantheses. 
        // Instead of 
        // this.setState( (prevState) => {
        //     return {
        //         options: prevState.options.concat(option) 
        //     }
        // })
        // I'm doing
        // this.setState ( (prevState) => ({ 
        //     options: prevState.options.concat(option) 
        // }));
    };
    // Life cycle method, accessible for class-based components only.
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing at all
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            console.log('Saving data!');
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    };
    render() {

        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options: []
}
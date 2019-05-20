import React from "react";

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            formTitle: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        console.log("Formulaire rendu");
    }

    handleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleSubmit(event) {
        this.setState({ formTitle: `Mon formulaire - ${this.state.title}` });
        event.preventDefault();
    }

    componentWillUpdate() {
        console.log("Titre changé");
    }

    render() {
        return (
            <>
                <h2>{this.state.formTitle}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </>
        );
    }
}

export default FormComponent;

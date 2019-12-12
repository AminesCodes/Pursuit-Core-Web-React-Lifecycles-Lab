import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class TodoItem extends React.Component {
    componentDidMount() {
        toast.success(`Todo Created: ${this.props.text}`);
    }

    componentWillUnmount() {
        toast.error(`Todo Deleted: ${this.props.text}`);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.completed !== this.props.completed) {
            if (nextProps.completed) {
                toast.warn(`${nextProps.text} marked as completed`);
            } else {
                toast(`${nextProps.text} marked as incomplete again`);
            }
            return true
        }
        return false
    }

    handleClick = () => {
        this.props.updateText(this.props.target)
    }


    // ############################ RENDER ##########################
    render() {
        return (
            <div>
                <span onClick={this.handleClick} style={{textDecoration: this.props.textDecoration}}>{this.props.text}</span>
                <button onClick={() => this.props.deleteBtn(this.props.target)}>X</button>
            </div>
        )
    }
}
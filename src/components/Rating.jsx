import React, { Component } from 'react';

//Children components
import Input from '../utils/Input';
import Textarea from '../utils/Textarea';
import UserForum from '../utils/UserForum';
import ThumbsUp from '../utils/ThumbsUp';
import Methods from '../utils/Methods';

//style
import '../styles/Rating.css';

class Rating extends Methods {
    state = {
        account: {
            newUsername: '',
            newMessage: '',
        },
        responses: [
            {            
                id: 1,         
                username: 'Martin',
                message: 'Cheesecake marzipan jelly jelly beans. Marzipan sesame snaps jelly gingerbread marshmallow sweet lemon drops gummies. Danish macaroon lemon drops cupcake cookie chocolate gummi bears dragée. Cotton candy carrot cake chocolate bar lemon drops pudding. Sugar plum chocolate jelly beans jelly sweet cupcake marzipan apple pie. Sugar plum wafer gummies cake pastry jelly bear claw. Oat cake macaroon sugar plum cheesecake jelly beans dragée cookie chupa chups bonbon.'
            }
        ],
        errors: {}
    };

    doSubmit = () => {};

  //template
    render() {
        const { account, errors } = this.state;

        const responses = this.state.responses.map(response => (
            <li className="list" key={response.id}>
                <div className="response-box w-75">
                    <a onClick={() => this.handleDelete(response)}>
                        <span className="delete" aria-hidden="true">&times;</span>
                    </a> 
                    <span className="span_username">{response.username}</span>
                    <span className="span_message">{response.message}</span>
                    <span className="span_liked">
                        <ThumbsUp 
                            liked={response.liked} 
                            onClick={() => this.handleLike(response)}
                        />
                    </span>
                </div>
            </li>
        ));

        return (
            <div className="rating">
                <div className="title w-100">
                    <h2>Podeľ sa o tvoju skúsenosť s našimi produktami</h2>
                    <p>Pridaj svoj názor, odporuč kvalitu</p>
                </div>
                <div className="user-form w-100">
                    <form className="form-box" onSubmit={this.handleSubmit}>
                        <div className="form-holder">
                            <Input
                                value={account.newUsername}
                                onChange={this.handleChange}
                                name="newUsername"  
                                className="input"  
                                error={errors.newUsername}
                            />
                            <Textarea 
                                value={account.newMessage}
                                onChange={this.handleChange}
                                name="newMessage" 
                                className="textarea"
                                error={errors.newMessage}
                            />
                            <button 
                                type="submit" 
                                className="confirm-button"
                            >
                                Pridaj tvoj názor
                            </button>
                        </div>
                    </form>
                </div>
                <div className="user-forum w-100">
                    <h1>FÓRUM</h1>
                    <UserForum 
                        listOfResponses={responses}
                    />
                </div>
            </div>
        );
    }
}

export default Rating
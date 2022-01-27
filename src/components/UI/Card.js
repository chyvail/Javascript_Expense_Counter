// showing the concept of composition; the card component can now act as a shell around expense items

import './Card.css';
function Card(props){ // children here is a reserved name used to output all elements under the card
    const classes = "card " + props.className; // this is to be able to use other classes plus the one with card
    return (
        <div className={classes}>
            {props.children} 
        </div>
    );
};  


// ** ARROW functions can also be used based on thge card above; use const instead of functon keyword
/* const Card = (props) =>{ 
    const classes = "card " + props.className; 
    return (
        <div className={classes}>
            {props.children} 
        </div>
    );
};  
 */
export default Card;
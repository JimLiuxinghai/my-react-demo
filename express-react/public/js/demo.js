/**
 * Created by liujim on 16/3/10.
 */
 var Comment = React.createClass({
    render : function () {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>{this.props.text}</div>
            </div>
        )
    }
});
var CommentForm = React.createClass({
    getInitialState : function () {
      return {
        name : '',
        text : ''
      }
    },

    render : function () {
        return (
            <div>
                <input className='name' type='text' value={this.state.name} onChange={this.handleName} />
                <input className='text' type='text' value={this.state.text} onChange={this.handleText} />
                <br/>
              <input type='button' value='发表' />
            </div>
        )
    }
});

var CommentList = React.createClass({

});
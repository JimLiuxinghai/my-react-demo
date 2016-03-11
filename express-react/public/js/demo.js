
var CommentBox = React.createClass({

  handleSubmit : function (comment) {
    $.ajax({
      url : '/postCom',
      data : comment,
      type : "POST",
      success : function (msg){
        if(msg == '200'){

        }
      }
    })
  },
  getData : function (){
    var _self = this;
    $.ajax({
      url : 'data.json',
      type : 'GET',
      async : false,
      success : function(msg){
        _self.setState({data : msg})
      }
    })
  },
  getInitialState : function () {
    return {
      data : []
    }
  },
  componentDidMount : function () {
    this.getData();
    var _self = this;
    setInterval(function () {
      _self.getData();
    },1000);
  },
  render : function () {
    return (
      <div className='commentBox'>
        <CommentList commetData={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleSubmit}/>
      </div>
    )
  }
})

var Comment = React.createClass({
  render:function(){
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
})
//修改CommentList组件，让其载入Comment组件
var CommentList = React.createClass({
  render:function(){
    console.log(this.props.commetData)
    var commentNodes = this.props.commetData.map(function(one){
      return (
        <Comment author={one.author} key={one.id}>
          {one.text}
        </Comment>
      )
    })
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
});

var CommentForm = React.createClass({
  getInitialState : function(){
    return {
      author : '',
      text : ''
    }
  },
  handleAuthor : function (e){
      this.setState({
        author : e.target.value
      })
  },
  handleText : function (e) {
    this.setState({
      text : e.target.value
    })
  },
  submit : function () {
    //e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render : function () {
    return (
      <div>
          <div className='mt10'>
            姓名：<input type='text' onChange={this.handleAuthor}/>
          </div>
          <div className='mt10'>
            内容：<input type='text' onChange={this.handleText}/>
          </div>
          <div className='mt10'>
            <input type="button" value="发表" onClick={this.submit}/>
          </div>
      </div>
    )
  }
})

ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
)

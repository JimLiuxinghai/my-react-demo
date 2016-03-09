/**
 * Created by liujim on 16/3/9.
 */
//定义一个大组件，里面引入图片地址及链接组件
var Avator = React.createClass({
    render : function(){
        return(
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        )
    }

});

var ProfilePic = React.createClass({
    render : function(){
        return (
            <img src={'http://graph.facebook.com/' + this.props.username +'/picture'} />
        )
    }
});

var ProfileLink = React.createClass({
    render : function(){
        return (
            <a href={'http://www.facebook.com/'  + this.props.username}>
                {this.props.username}
            </a>
        )
    }
});

React.render(
    <Avator username="Jim Liu"/>,
    document.getElementById('container')

)

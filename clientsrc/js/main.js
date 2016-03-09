// =======================
// get instance we need
// =======================
$ = jQuery = require('jquery');
window.Tether = require('tether');
var bootstrap = require('bootstrap');
var domready = require('domready');
var noty = require('noty');
var React = require('react');
var ReactDom = require('react-dom');
$.noty.defaults.layout = 'topRight';
$.noty.defaults.timeout = 3000;

// =======================
// css
// =======================
var cssify = require('cssify');
cssify.byUrl('//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css');
cssify.byUrl('//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
var styleNode = require('../../public/css/style.css');

// =======================
// library
// =======================

// =======================
// jQuery setting
// =======================

// =======================
// global error catch handler
// =======================

// =======================
// entry point
// =======================
domready(function() {
  example1();
  example2();
  example3();
  example4();
  example5();
  example6();
  example7();


});

function example1() {

  var HelloWorld = React.createClass({
    render: function() {
      return (
        <div className="helloworld">
          Hello, world! I am a CommentBox.
        </div>
      );
    }
  });

  ReactDom.render(
    <HelloWorld />,
    $('#example1').get(0)
  );

}

function example2() {

  var Name = React.createClass({
    render: function() {
      return (
        <span>{this.props.name}</span>
      );
    }
  });

  var HelloWorld = React.createClass({
    render: function() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <Name name="Akihiro" />
        </div>
      );
    }
  });

  ReactDom.render(
    <HelloWorld />,
    $('#example2').get(0)
  );

}

function example3() {
  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          Hello, world! I am a CommentBox.
        </div>
      );
    }
  });

  ReactDom.render(
    <CommentBox />,
    $('#example3').get(0)
  );

}

function example4() {
  var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function() {
      return (
        React.createElement('div', {className: "commentBox"},
          "This Object Created by JSX"
        )
      )
    }
  });

  ReactDom.render(
    React.createElement(CommentBox, null),
    $('#example4').get(0)
  );

}

function example5() {
  // 子コンポーネント１
  var CommentList = React.createClass({
    render: function() {
      return (
        <div className="commentList">
          Hello, I am a Comment List.
        </div>
      );
    }
  });

  // 子コンポーネント２
  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          I am a CommentForm
        </div>
      );
    }
  });

  // 親コンポーネント
  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          <h1>Example5</h1>
          <CommentList />
          <CommentForm />
        </div>
      )
    }
  });

  ReactDom.render(
    React.createElement(CommentBox, null),
    $('#example5').get(0)
  );

}

function example6() {
  var Comment = React.createClass({
    // get parameter by this.props from parent
    // this.props.[attributes name] - アトリビュートにセットされたパラメータ
    // this.props.children - タグの子要素
    render: function() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  });

  var CommentList = React.createClass({
    render: function() {
      return (
        <div className="commentList">
          <Comment author="Akihiko Takayama">This is one comment</Comment>
          <Comment author="Akemi Takayama">This is another comment</Comment>
        </div>
      );
    }
  });

  // 子コンポーネント２
  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          I am a CommentForm
        </div>
      );
    }
  });

  // 親コンポーネント
  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          <h1>Example6</h1>
          <CommentList />
          <CommentForm />
        </div>
      )
    }
  });

  ReactDom.render(
    React.createElement(CommentBox, null),
    $('#example6').get(0)
  );

}

function example7() {
  var Comment = React.createClass({
    render: function() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  });

  var CommentList = React.createClass({
    render: function() {
      // 受け取ったデータ分、Commentオブジェクトを作成
      var commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
  });

  // 子コンポーネント２
  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          I am a CommentForm
        </div>
      );
    }
  });

  // 親コンポーネント
  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          <h1>Example7</h1>
          <CommentList data={this.props.data} />
          <CommentForm />
        </div>
      )
    }
  });

  var data = [
    {id: 1, author: "Akihiko Takayama", text: "Akiiko's Comment"},
    {id: 2, author: "Akemi Takayama", text: "Akemi's Comment"}
  ];

  ReactDom.render(
    React.createElement(CommentBox, {data: data}),
    $('#example7').get(0)
  );

}











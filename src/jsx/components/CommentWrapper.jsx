import React from 'react';

const CommentWrapper = props => {
    return (
        <div>
            <div className="publisher">
                <div className="title">
                    <div>
                        <a href="#">网友曝光两女孩蹲着等地铁,称没教养,你怎么看(投票)</a>
                    </div>
                    <div className="tips">
                        <span>还可以输入</span>
                        <strong>140</strong>字
                    </div>
                </div>
                <div className="textElDiv">
                    <textarea placeholder={props.content}></textarea>
                </div>
            </div>
        </div>
    );
}
export default CommentWrapper;
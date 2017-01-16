import React, {Component} from 'react';

class game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board:[[2,2,2,2],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]]
        }
        // this.handlechange =this.handlechange.bind(this)
        this.keyHandler =this.keyHandler.bind(this)
    }

    keyHandler(e){
        console.log(e.keyCode)
        var xCount = 0
        var newBoard = this.state.board
        var random = Math.floor(Math.random() * 2, 0) ? 2 : 4
        var frist = Math.floor(Math.random()*4)
        var second = Math.floor(Math.random()*4)
        if(newBoard[frist][second] === 0){
            newBoard[frist][second] = random
        }
        console.log('random' + random + frist + second)
        // 普通のforに書き換える
        this.state.board.forEach(function(x) {
            console.log(x)
            var yCount = 0
            x.forEach(function(y) {
                // left
                if(e.keyCode === 37){
                    console.log('left')
                    if(newBoard[xCount][yCount+1] === y
                        && y !== 0)
                        newBoard[xCount][yCount] = y*2
                        console.log('test' + x + 'test' )
                    if(newBoard[xCount][yCount-1] === y*2
                        && y !== 0){
                        newBoard[xCount][yCount] = 0
                    }
                }
                // right
                // down
                // up
                yCount++
            }, this);
            //left
            if(e.keyCode === 37){
                newBoard[xCount].sort(function(a,b){
                    if( a > b ) return -1;
                    if( a < b  && a === 0) return 1;
                    return 0;
                })
                console.log('sort' + newBoard[xCount])
            }
            xCount++
        }, this);
        this.setState({
            board:newBoard
        })
    }

    // handlechange(e){
    //     console.log('test')
    // }
    componentDidMount(){
        window.addEventListener("keydown", this.keyHandler, false)
    }

    render() {
        var count = 0;
        var yCount = 0;
        return (
            <div>
                {this.state.board.map(x =>(
                    <ul key={count++} className={count}>
                    {x.map(y =>(
                        <li key={count + '' + yCount++}>{y}</li>   
                    ))}
                    </ul>
                ))}
            </div>
        );
    }
}


export default game;
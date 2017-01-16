import React, {Component} from 'react';

class game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board:[[2,0,2,2],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]]
        }
        // this.handlechange =this.handlechange.bind(this)
        this.keyHandler =this.keyHandler.bind(this)
    }

    keyHandler(e){
        console.log(e.keyCode)
        //var xCount = 0
        var newBoard = this.state.board
        var random = Math.floor(Math.random() * 2, 0) ? 2 : 4
        var frist = Math.floor(Math.random()*4)
        var second = Math.floor(Math.random()*4)
        if(newBoard[frist][second] === 0){
            newBoard[frist][second] = random
        }
        console.log('random' + random + frist + second)
        
        // 変換方法
        const keyCodeMap = {
            37 : ([true,true]),//left
            38 : ([true,false]),// up
            39 : ([false,false]),//right
            40 : ([false,true])// down
        }
        var conversion = keyCodeMap[e.keyCode]
        console.log(conversion[0])
        
        if(e.keyCode === 37 || e.keyCode === 40){
            if(e.keyCode === 40){
                newBoard.reverse()
            }
            for(var x = 0;x < newBoard.length;x++){
                for(var y = 0;y < newBoard[x].length;y++){
                        var z = 0
                        if(newBoard[x][y+1] === newBoard[x][y] && newBoard[x][y] !== 0){
                            z = newBoard[x][y]
                            newBoard[x][y] = z*2
                        }
                        if(newBoard[x][y-1] === newBoard[x][y]*2 && newBoard[x][y] !== 0){
                            newBoard[x][y] = z
                        }
                    
                   console.log(newBoard[x][y])
                }
                //left
                if(e.keyCode === 37){
                    newBoard[x].sort(function(a,b){
                        if( a > b ) return -1;
                        if( a < b  && a === 0) return 1;
                        return 0;
                    })
                    console.log('sort' + newBoard[x])
                }
                //down
                if(e.keyCode === 40){
                    newBoard[x].sort(function(a,b){
                        if( a > b ) return -1;
                        if( a < b  && a === 0) return 1;
                        return 0;
                    })
                    console.log('sort' + newBoard[x])
                }
            }
        }
        if(e.keyCode === 40){
            newBoard.reverse()
        }
        console.log(newBoard)

        // // 配列転置
        // var testArray = newBoard.map((a,x) => a.map((b,y)=>newBoard[y][x]))
        // console.log(testArray[0][0] + '転置' + testArray[1][0])
        // // 上下反転
        // console.log(newBoard.reverse() + '上下反対')
        this.setState({
            board:newBoard
        })
    }

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
                <p>{this.state.board}</p>
            </div>
        );
    }
}


export default game;